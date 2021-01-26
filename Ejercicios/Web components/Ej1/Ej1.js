var inter1, inter2;

class blink extends HTMLElement {
    constructor() {
        super();
        this.cont = 'Prueba';
        this.baseColor = 'black';
        this.alternativeColor = 'transparent';
        this.changeInterval = 1;
        this.alt();
    }


    alt() {
        clearInterval(inter2);

        inter1 = setInterval(() => {
            this.style.color = this.alternativeColor;
            this.bas();
        }, this.changeInterval * 1000);
        this.render();
    }

    bas() {
        clearInterval(inter1);

        inter2 = setInterval(() => {
            this.style.color = this.baseColor;
            this.alt();
        }, this.changeInterval * 1000);
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.textContent = this.cont.toString();
    }
}


window.customElements.define('wc-blink', blink);