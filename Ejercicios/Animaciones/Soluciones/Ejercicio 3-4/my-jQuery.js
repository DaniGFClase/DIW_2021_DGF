// Función fadeIn que recibe un elemento inicialmente oculto que se va a mostrar en la cantidad de segundos del parámetro time
function fadeIn(el, time=0, callback=null) {
  el.style.opacity = 0;
  el.style.visibility = "visible";
  
  // La forma más segura de conocer el valor de display que corresponde al elemento según el CSS es crear un nuevo elemento del mismo tipo
  // De esta forma, con getComputedStyle obtenemos el valor que corresponde según el tipo de elemento (cuidado de no tener display: none por defecto)
  let newEl = document.createElement(el.tagName);
  document.body.appendChild(newEl);
  el.style.display = getComputedStyle(newEl).display;
  document.body.removeChild(newEl);
  
  // Otra opción es el.style.display = "", pero si el CSS externo ha asignado display: none no nos deja sobreescribirlo
  // Probar a comentar el código que crear el elemento y descomentar este y observa los resultados
  // el.style.display = ""
  
  var last = null;
  function fade(timestamp) {
	if (!last) last = timestamp;
	
	/* Se divide el tiempo transcurrido entre el tiempo total para calcular el progreso
	   Es decir, en el instante inicial la opacidad es de 0. Supongamos un ejemplo con un parámetro de tiempo de 2 segundos (2000 milisegundos)
	   Si han transcurrido 1000ms la opacidad es de 0.5, ya que timestamp - last = 1000, por lo que opacity = 1000/2000*/
	let opacity = (timestamp - last) / time; 
		
	el.style.opacity = opacity;
	//console.log(last, timestamp, opacity);	

	// Basta con preguntar por la opacidad y no por el tiempo transcurrido, ya que se calcula en base a ello
	// Es decir, cuando la opacidad sea 1 quiere decir que ha transcurrido el tiempo del parámetro "time"
	if (opacity < 1) {		
       requestAnimationFrame(fade);	   
    } else {
	   el.style.opacity = 1; // Al finalizar se trunca el valor a 1
	   callback && callback(); // Comprobamos si la función callback existe y en caso afirmativo la llamamos
	}
  };

  requestAnimationFrame(fade);
}

// Solo funciona con opacity y visibility. Con display habría que usar animation 
/*function fadeIn(el, time, callback) {
   el.style.transition = `opacity ${time}ms`;
   el.classList.add('show');
   el.classList.remove('hide');
   if (callback) setTimeout(callback, time);
}*/

// Función fadeIn que recibe un elemento inicialmente oculto que se va a mostrar en la cantidad de segundos del parámetro time
function fadeOut(el, time=0, callback=null) {
  el.style.opacity = 1;
  
  var last = null;
  function fade(timestamp) {
	if (!last) last = timestamp;
	
	// Es el mismo cálculo que en fadeIn, pero como ahora quiero que la opacidad máxima sea al inicio, basta con restar 1 al valor asociado al transcurso actual
	// Es decir, si el tiempo es de 2000 milisegundos y han transcurrido 500, entonces 500 / 2000 = 0.25, pero como la opacidad es decreciente, entonces
	// en este caso 1 - 0.25 = 0.75. Así hasta el instante final que tendría 2000/2000 = 1, por tanto 1 - 1 = 0
	let opacity = 1 - ((timestamp - last) / time); // Se resta la opacidad final que es 1 a la que corresponde para que se aplique de manera decreciente
	el.style.opacity = opacity;

	//console.log(timestamp, last, (timestamp - last), opacity);
	// Basta con preguntar por la opacidad y no por el tiempo transcurrido, ya que se calcula en base a ello
	// Es decir, cuando la opacidad sea 0 quiere decir que ha transcurrido el tiempo del parámetro "time"
	if (opacity > 0) {		
       requestAnimationFrame(fade);	   
    } else {
	   el.style.opacity = 0; // Al finalizar se trunca el valor a 0
	   el.style.visibility = "hidden";
	   el.style.display = "none";
	   callback && callback(); // Comprobamos si la función callback existe y en caso afirmativo la llamamos
	}
  };

  requestAnimationFrame(fade);
}

// Solo funciona con opacity. Con display y visibility habría que usar también animation
/*function fadeOut(el, time=0, callback=null) {
   el.style.transition = `opacity ${time}ms`;
   el.classList.remove('show');
   el.classList.add('hide');
   setTimeout(callback, time);
}*/

// Si no se envía como parámetro el tiempo, se indica una cantidad mínima de milisegundos para que se vea el efecto de slide
function slideDown(el, time=300, callback=null) {
  // La forma más segura de conocer el valor de display que corresponde al elemento según el CSS es crear un nuevo elemento del mismo tipo
  // De esta forma, con getComputedStyle obtenemos el valor que corresponde según el tipo de elemento (cuidado de no tener display: none por defecto)
  let newEl = document.createElement(el.tagName);
  document.body.appendChild(newEl);
  el.style.display = getComputedStyle(newEl).display;
  document.body.removeChild(newEl);	
	
  initialHeight = parseInt(getComputedStyle(el).height);
  
  var last = null;
  function slide(timestamp) {
	if (!last) last = timestamp;
	// Es exactamente igual a fadeIn y fadeOut, pero en este caso tengo que multiplicar al valor obtenido el transcurso actual
	// Es decir, si antes tenía en el instante intermedio 0.5. Si ahora la altura que quiero lograr es 100px, sería 0.5 x 100 = 50px
	let height = (time==0)?initialHeight:((timestamp - last) / time) * initialHeight; // Se calcula el instante actual
	el.style.height = height + "px";

	if (height < initialHeight) {		
       requestAnimationFrame(slide);	   
    } else {
	   el.style.height = initialHeight + "px";	// Se redondea al tamaño inicial para evitar descuadres
	   callback && callback(); // Comprobamos si la función callback existe y en caso afirmativo la llamamos
	}
  };

  requestAnimationFrame(slide);
}

// Si no se envía como parámetro el tiempo, se indica una cantidad mínima de milisegundos para que se vea el efecto de slide
function slideUp(el, time=300, callback=null) {
  initialHeight = parseInt(getComputedStyle(el).height);  
	
  var last = null;
  function slide(timestamp) {
	if (!last) last = timestamp;
	// Exactamente igual al cálculo de fadeOut y teniendo en cuenta lo indicado en slideDown
	// Como la altura es decreciente, restamos el resultado obtenido en base al progreso. Siguiendo el ejemplo de slideDown,
	// si en el instante 500ms de un total de 2000ms tenemos 25px, entonces sería 100 - 25px = 75px hasta llegar a 0 en el final
	let height = (time==0)?0: initialHeight - (((timestamp - last) / time) * initialHeight);
	el.style.height = height + "px";

	if (height > 0) {		
       requestAnimationFrame(slide);	   
    } else {
	   el.style.height = initialHeight + "px";	// Cuando terminamos se establece el tamaño inicial y se oculta para no dejar el tamaño a 0
	   el.style.display = "none";
	   callback && callback(); // Comprobamos si la función callback existe y en caso afirmativo la llamamos
	}
  };

  requestAnimationFrame(slide);
}

