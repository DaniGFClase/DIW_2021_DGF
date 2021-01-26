class BlinkSpan extends HTMLSpanElement {
    constructor() {
        super();
    }

    // Los atributos no existen hasta connectedCallback, por tanto no se deben acceder en el constructor
    connectedCallback() {
        const interval = (this.getAttribute('changeInterval') || 1) * 1000;
        const base = this.getAttribute('baseColor') || 'inherit';
        const alte = this.getAttribute('alternativeColor') || 'transparent';
        let n = 0;

        setInterval(() => {
            this.style.color = ++n % 2 ? alte : base;
        }, interval);
    }
}

//Se define el elemento que extiende a span
customElements.define('wc-blink-span', BlinkSpan, { extends: 'span' });