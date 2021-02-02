class ProgressBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.seconds = Math.floor(Math.random() * (30 - 1) + 1);
    }

    connectedCallback() {
        this.render(this.getAttribute('status'));

        this.shadowRoot.querySelector("#botAc").addEventListener('click', () => {
            let tiem = 0;
            this.interva = setInterval(() => {
                tiem++;
                this.barra.textContent = tiem + "%";
                this.barra.style.width = tiem + "%";
            }, 1000);
        });

        this.shadowRoot.querySelector("#botPar").addEventListener('click', () => {
            clearInterval(this.interva);
        });

        this.barra = this.shadowRoot.querySelector("#prog");
        this.tot = this.shadowRoot.querySelector("#bar");
    }


    attributeChangedCallback() {
        if ((typeof this.seconds == "undefined" || this.seconds == null) || this.seconds < 0) {
            alert('Alerta');
        }
    }


    static get observedAttributes() {
        return ['status'];
    }

    // Código HTML
    render() {
        this.shadowRoot.innerHTML = `
		<style>
		  #bar {
            border: 1px solid black;
          }
          
          #prog{
              width: 0%;
              background-color:red;
          }

          
        </style>
        <button id="botAc">Aceptar</button>
        <button id="botPar">Parar</button>
        <div id="bar">
            <div id="prog">0%</div>
        </div>
        
	  `;
    }
}


window.customElements.define('progress-bar', ProgressBar);