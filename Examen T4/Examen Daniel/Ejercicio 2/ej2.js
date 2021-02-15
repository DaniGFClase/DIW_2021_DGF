class miSemaforo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.seconds;
    }

    connectedCallback() {
        this.render();
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