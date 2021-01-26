class blink extends HTMLElement {
    constructor() {
        super();
        this.cont = 'Prueba';
        this.baseColor = 'black';
        this.alternativeColor = 'red';
        this.changeInterval = 2;
        this.alt();
    }


    alt() {
        setInterval(() => {
            this.style.color = this.alternativeColor;
            this.bas();
        }, this.changeInterval * 1000);
        this.render();
    }

    bas() {
        setInterval(() => {
            this.style.color = this.baseColor;
            this.alt();
        }, this.changeInterval * 1000);
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