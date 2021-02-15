const templateSemaforo = document.createElement('template');
 
templateSemaforo.innerHTML = `
	<style>
		.caja{
			width: 50px;
			height: 50px;
			border: 1px solid black;
			background-color: grey;
			margin-bottom: 2px;
			cursor: pointer;
		}
		
		.rojo{
			background-color: red;
		}
		
		.amarillo{
			background-color: yellow;
		}
		
		.verde{
			background-color: green;
		}
	</style>
	<div id="rojo" class="caja rojo"></div>
	<div id="ambar" class="caja"></div>
	<div id="verde" class="caja"></div>
`;

class Semaforo extends HTMLElement{
	constructor() {
		super();

		// Creamos shadow DOM que a partir de ahora se puede acceder a través de attachShadow
		this._shadowRoot = this.attachShadow({mode: 'closed'});		  				
 	}
	
	connectedCallback(){
		// Se representa el HTML de la propiedad template en el shadow DOM
		this.render();
		
		// Almacenamos en una variable una referencia a cada elemento de la página
		this.rojo = this._shadowRoot.querySelector("#rojo");
		this.ambar = this._shadowRoot.querySelector("#ambar");		
		this.verde = this._shadowRoot.querySelector("#verde");
		
		// Actualizamos la cantidad de milisegundos que corresponden según el atributo seconds
		this.calcularMilisegundos();
	
		// Evento cuando se hace click en el cuadro rojo
		this.rojo.addEventListener('click', (e) => {			
			let clases = e.target.classList;
			
			window.setTimeout(() => {
				// Se añade rojo y se eliminan el resto de clases
				clases.add("rojo");
				
				// Se finaliza el setInterval al hacer click en el color verde (no se pedía en el enunciado)
				clearInterval(this.intervalID);
				this.ambar.classList.remove("amarillo");
				this.verde.classList.remove("verde");						
			}, this.milisegundos);
		});
		
		// Evento cuando se hace click en el cuadro en ámbar
		this.ambar.addEventListener('click', (e) => {
			let clasesAmbar = e.target.classList;
			
			// Se elimina el color del resto de recuadros diferentes a ámbar (aunque no se pide en el ejercicio)
			this.rojo.classList.remove("rojo");	
			this.verde.classList.remove("verde");
			
			// El semáforo en ámbar se muestra en intervalos de segundos/2
			this.intervalID = window.setInterval(() => {															
				// Si el color es amarillo se elimina y viceversa
				if (clasesAmbar.contains("amarillo")){
					clasesAmbar.remove("amarillo");				
				} else {
					clasesAmbar.add("amarillo");		
				}			
			}, this.milisegundos/2);			
		});
		
		// Evento cuando se hace click en el cuadro en verde
		this.verde.addEventListener('click', (e) => {
			// Se finaliza el setInterval al hacer click en el color verde (no se pedía en el enunciado)
			clearInterval(this.intervalID);
			
			// Se elimina el color del resto de recuadros diferentes a verde (aunque no se pide en el ejercicio)
			this.rojo.classList.remove("rojo");	
			this.ambar.classList.remove("amarillo");
			
			this.verde.classList.add("verde");
		});
	}
	
	// Se llama cuando se modifica el valor de los atributos especificados en observedAttributes
	attributeChangedCallback(attr, oldVal, newVal) {
		if (attr == 'seconds' && oldVal != null){
			// Paramos la animación del semáforo en ámbar si existiera
			clearInterval(this.intervalID);
			
			// Garantizamos que el color sea gris eliminando las clases específicas de cada color
			this.ambar.classList.remove("amarillo");
			this.verde.classList.remove("verde");
				
			this.rojo.classList.add("rojo");
			
			// Actualizamos la cantidad de milisegundos que corresponden según el atributo seconds
			this.calcularMilisegundos();
		}
	}
	
	// Cálculo de milisegundos según el atributo segundos del HTML. Si no existe se fuerza a 1
	calcularMilisegundos(){
		this.milisegundos = (this.seconds == null)?1000:this.seconds*1000;
		return this.milisegundos;
	}
	
	// Atributos reactivos cuando se invoca attributeChangedCallback
	static get observedAttributes() {
		return ['seconds'];
	}
	
	get seconds() {
		return this.getAttribute('seconds');
	}
  
	set seconds(value) {
		this.setAttribute('seconds', value);
	}  
			
	// Código HTML
	render() {
		this._shadowRoot.appendChild(templateSemaforo.content.cloneNode(true)); 
	}
}

window.customElements.define('mi-semaforo', Semaforo);