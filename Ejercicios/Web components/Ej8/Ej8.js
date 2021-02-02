class ProgressBar extends HTMLElement {
    constructor() {
        super();

        // Creamos shadow DOM que a partir de ahora se puede acceder a través de 
        this.attachShadow({ mode: 'open' });

        let tiem = 0;
        this.seconds = Math.floor(Math.random() * (30 - 10) + 10);

        if ((typeof this.seconds == "undefined" || this.seconds == null) || this.seconds < 0) {
            alert('Alerta');
        }
        setInterval(() => {
            tiem++;
            this.barra.textContent = tiem + "%";
        }, 1000);

        // Se cambia el texto y esperamos un segundo
        setTimeout(() => {

        }, this.seconds * 1000);




    }

    connectedCallback() {
        // Se representa el HTML de la propiedad template en el shadow DOM
        this.render(this.getAttribute('status'));

        // Guardamos un atributo con el botón
        this.barra = this.shadowRoot.querySelector("#prog");
        this.bot = this.shadowRoot.querySelector("#botAc");
    }

    // Se llama cuando se modifica el valor de los atributos especificados en observedAttributes
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr == 'status' && oldVal != newVal) {
            console.log('a');
            this.render(newVal);
        }
    }

    // Atributos reactivos cuando se invoca attributeChangedCallback
    static get observedAttributes() {
        return ['status'];
    }

    // Código HTML
    render(currentStatus) {
        this.shadowRoot.innerHTML = `
		<style>
		  #bar {
            border: 1px solid black;
			animation-duration: 1s; 
			animation-timing-function: ease-in;
		
		  }
		  div:active{ 
			animation-name: anim; 
		  }
		  @keyframes anim { 
			0% {transform: scale(1);} 
			10%, 40% {transform: scale(0.7) rotate(-1.5deg);}  
			100% {transform: scale(1) rotate(0);} 
		  } 
		  .neutral {
			background-color: #888;
		  }
		  .danger {
			background-color: #d66;
		  }
		  .success {
			background-color: #3a6;
		  }
		</style>
        <div id="bar">
            <div id="prog">0%</div>
        </div>
        
	  `;
    }
}

function empezar(params) {
    window.customElements.define('progress-bar', ProgressBar);
}


function getHeight() {

    divElement = document.querySelector(".box");

    elemHeight = divElement.offsetHeight;

    document.querySelector(".output").textContent = elemHeight + "px";
}