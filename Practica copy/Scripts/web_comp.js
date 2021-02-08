 const insertCoin = `
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

 const menuJuego = `
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


 const jueg = `
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
             let niv = 1;

             this.insrtCo(menuJuego);

             document.addEventListener('keydown', (event) => {
                 switch (event.key) {
                     case "a":

                         this.insrtCo(jueg);
                         console.log();
                         clearInterval(juego);

                         empezar_Juego(niv, this.shadowRoot.getElementById('myCanvas'));
                         break;
                     case "w":
                         niv++;

                         if (niv > 7) {
                             niv = 7;
                         }

                         console.log('niv');
                         break;
                     case "e":
                         niv--;

                         if (niv < 1) {
                             niv = 1;
                         }
                         break;
                     case "r":
                         document.getElementById('arcade').style.backgroundImage = "url('./CSS/Imagenes/Pantalla_btn4.png')";
                         break;

                     default:
                         break;
                 }
                 console.log(`key=${event.key},code=${event.code}`);
             });


         });
     }

     connectedCallback() {
         this.insrtCo(insertCoin);
     }

     // Código HTML
     insrtCo(cod) {
         this.shadowRoot.innerHTML = cod;
     }
 }

 window.customElements.define('wc-pantalla', pantallJuego);