class miSemaforo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.seconds;
        this.inter;
    }

    connectedCallback() {
        if (!this.seconds) {
            this.seconds = 1;
        }


        this.render();

        this.cj1 = this.shadowRoot.querySelector('.caja1');
        this.cj2 = this.shadowRoot.querySelector('.caja2');
        this.cj3 = this.shadowRoot.querySelector('.caja3');



        this.cj1.addEventListener('click', () => {
            setTimeout(() => {
                clearInterval(this.inter);
                console.log(this.seconds);
                this.cj1.style.backgroundColor = 'red';
                this.cj2.style.backgroundColor = 'gray';
                this.cj3.style.backgroundColor = 'gray';
            }, this.seconds * 1000);

        });


        this.cj2.addEventListener('click', () => {
            this.cj1.style.backgroundColor = 'gray';
            this.inter = setInterval(() => {
                console.log('1');
                if (this.cj2.style.backgroundColor == 'yellow') {
                    this.cj2.style.backgroundColor = 'gray';
                } else {
                    this.cj2.style.backgroundColor = 'yellow';
                }

            }, (this.seconds * 1000) / 2);

            this.cj3.style.backgroundColor = 'gray';
        });


        this.cj3.addEventListener('click', () => {
            clearInterval(this.inter);

            this.cj1.style.backgroundColor = 'gray';
            this.cj2.style.backgroundColor = 'gray';
            this.cj3.style.backgroundColor = 'green';
        });

    };




    render() {
        this.shadowRoot.innerHTML = `
        <style>
    .contenedor {
        display: flex;
        flex-direction: column;
    }
    
    .cajas {
        border: 1px solid black;
        width: 50px;
        height: 50px;
        margin: 5px;
    }
    
    .caja1 {
        background-color: red;
    }
    
    .caja2 {
        background-color: grey;
    }
    
    .caja3 {
        background-color: grey;
    }
</style>
        
        
        
<div class="contenedor">
<div class="caja1 cajas"></div>
<div class="caja2 cajas"></div>
<div class="caja3 cajas"></div>
</div>
        
        
        `;

    }
}

customElements.define('mi-semaforo', miSemaforo);