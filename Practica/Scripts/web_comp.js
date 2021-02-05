insertCoin = `
  <style>
  #insrtC {
    text-align: center;
    font-family: 'Courier', monospace;
    font-weight: 800;
    line-height: 1.0;
    letter-spacing: -0.03em;
    transform: perspective(300px) scaleY(1.5) rotateX(-40deg);
    transform-style: preserve-3d;
    --layer-depth: 0.32em;
    width: 100%;
    height: 100%;
    /*animacion*/
    animation-name: spinner;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 5s;
}

@keyframes spinner {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(-360deg);
    }
}
  </style>
    <div id='insrtC' width="480" height="320">
            <h1>INSERT COIN</h1>
    </div>
`;

menuJuego = `
  <style>
  #menu {
    height: 100%;
}

#instruc {
    background-color: black;
    color: white;
    border: thick dotted white;
}


  </style>
  <div id='menu'>
            <p id="pong">PONG</p>
            <div id="instruc">
                CONTROLES
                <p>Controlas la pala de la derecha y tu objetivo es marcar 3 goles</p>
                <p>&#8657; Flecha hacia arriba</p>
                <p>&#8659; Flecha hacia abajo</p>
                <p>A Empezar el juego</p>
                <p>R Acabar el juego</p>
                <p>W Aumentar dificultad</p>
                <p>E Disminuir dificultad</p>
                <p id="dicif"></p>
            </div>
        </div>
`;


jueg = `
  <style>
  #myCanvas {
    width: 100%;
    height: 100%;
}
  </style>
  <canvas id="myCanvas" width="480" height="320"></canvas>
`;


class pantallJuego extends HTMLElement {
    constructor() {
        super();
        // Creamos shadow DOM que a partir de ahora se puede acceder a través de 
        this.attachShadow({ mode: 'open' });

        document.querySelector('#instCoin').addEventListener('click', () => {
            // Creamos un objeto con todos los valores posibles y descripciones
            let opciones = { neutral: "Haz click para probar", danger: "Error", success: "Correcto" };
            let valores = Object.entries(opciones);

            // Se cambia el texto y esperamos un segundo
            this.boton.textContent = "Cambiando estado..."

            setTimeout(() => {
                // Elegimos una opción al azar y se actualiza junto con su descripción
                let opcionElegida = valores[Math.floor(Math.random() * valores.length)];

                // Cambiamos solo el DOM asociado al botón
                this.boton.className = opcionElegida[0];
                this.boton.textContent = opcionElegida[1];
            }, 1000);
        });
    }

    connectedCallback() {
        // Se representa el HTML de la propiedad template en el shadow DOM
        this.insrtCo(this.getAttribute('status'));

        // Guardamos un atributo con el botón
        this.boton = this.shadowRoot.querySelector("#buttonStatus");
    }

    // Se llama cuando se modifica el valor de los atributos especificados en observedAttributes
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr == 'status' && oldVal != newVal) {
            this.insrtCo(newVal);
        }
    }

    // Atributos reactivos cuando se invoca attributeChangedCallback
    static get observedAttributes() {
        return ['status'];
    }


    // Código HTML
    insrtCo() {
        this.shadowRoot.innerHTML = `
            <style>
            #insrtC {
              text-align: center;
              font-family: 'Courier', monospace;
              font-weight: 800;
              line-height: 1.0;
              letter-spacing: -0.03em;
              transform: perspective(300px) scaleY(1.5) rotateX(-40deg);
              transform-style: preserve-3d;
              --layer-depth: 0.32em;
              width: 100%;
              height: 100%;
              /*animacion*/
              animation-name: spinner;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              animation-duration: 5s;
          }
          
          @keyframes spinner {
              from {
                  transform: rotateY(0deg);
              }
              to {
                  transform: rotateY(-360deg);
              }
          }
            </style>
              <div id='insrtC' width="480" height="320">
                      <h1>INSERT COIN</h1>
              </div>
          
	  `;
    }
}

window.customElements.define('wc-pantalla', pantallJuego);