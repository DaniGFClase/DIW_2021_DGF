class Blink extends HTMLElement {
    constructor () {
      super ();      
    }
	
	// Los atributos no existen hasta connectedCallback, por tanto no se deben acceder en el constructor
	connectedCallback(){	 	    
	  const interval = (this.getAttribute ('changeInterval') || 1) * 1000;
      const base     = this.getAttribute ('baseColor') || 'inherit';
      const alte     = this.getAttribute ('alternativeColor') || 'transparent';
	  let n          = 0;	
		
	  setInterval (() => {
        this.style.color = ++n % 2 ? alte : base;
      }, interval);
	}
	
  }
  customElements.define ('wc-blink', Blink);