class ProgressBar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.seconds = Math.floor(Math.random() * (30 - 1) + 1);
    }

    connectedCallback() {
        this.render(this.getAttribute('seconds'));
        this.barra = this.shadowRoot.querySelector("#prog");

        this.shadowRoot.querySelector("#botAc").addEventListener('click', () => {
            let tiem = 0;
            this.interva = setInterval(() => {
                tiem++;
                this.barra.textContent = tiem + "%";
                this.barra.style.width = tiem + "%";
                if (tiem == 100) {
                    clearInterval(this.interva);
                }
            }, this.seconds);
        });

        this.shadowRoot.querySelector("#botPar").addEventListener('click', () => {
            clearInterval(this.interva);
        });


    }


    attributeChangedCallback() {
        if ((typeof this.seconds == "undefined" || this.seconds == null) || this.seconds < 0) {
            alert('Alerta');
        }
    }


    static get observedAttributes() {
        return ['seconds'];
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