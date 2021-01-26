class blink extends HTMLElement {
    constructor() {
        super();
        this.cont = 'Prueba';
        this.baseColor = 'black';
        this.alternativeColor = 'red';
        this.changeInterval = 2;
        this.inter();

    }


    inter() {
        this.style.color = this.alternativeColor;


        setInterval(() => {
            this.style.color = this.baseColor;
            this.inter();
        }, this.changeInterval * 1000);
        console.log("a");
        this.style.color = this.baseColor;
        // this.inter();
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