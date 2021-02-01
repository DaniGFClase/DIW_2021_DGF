const templateMyParagraph = document.createElement('template');

templateMyParagraph.innerHTML = `
  <style>
    
	
	/* Estilos que se aplican a los elementos en un slot */
	::slotted(span){
        font-style: italic;
	}
	

  </style>
  <span><slot name="personal">Un marcador...</slot></span>
`;

console.log('aaa');

// En este caso creamos el Custom Element con una clase anónima
customElements.define('my-paragraph',
    class extends HTMLElement {
        constructor() {
            super();

            this._shadowRoot = this.attachShadow({ mode: 'open' });
            this._shadowRoot.appendChild(templateMyParagraph.content.cloneNode(true));
        }
    }
)