const templateMyParagraph = document.createElement('template');

templateMyParagraph.innerHTML = `
  <style>
    span {
      color: red;
      padding: 5px;
    }
	
	/* Estilos que se aplican a los elementos en un slot */
	::slotted(*){
        font-style: italic;
	}
	

  </style>
  <p><slot name="personal">Un marcador...</slot></p>
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