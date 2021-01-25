class blink extends HTMLElement {
    constructor() {
        super();
        this.cont = 'Prueba';
        this.addEventListener('click', () => {
            this.clicked()
        });
    }

    clicked() {
        this.cont = '++';
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    // Método que modifica el contenido del componente
    render() {
        this.textContent = this.cont.toString();
    }
}

window.customElements.define('wc-blink', blink);