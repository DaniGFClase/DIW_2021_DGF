// 3 llamadas a .then() encadenadas (si no hacemos return, a las siguientes no les llega nada)
/* document.addEventListener("DOMContentLoaded", () => {
    console.log('Antes de la petición');
    
    fetch('https:reqres.in/api/users')
    
    .then( (respuesta) => {
            console.log('dentro del primer then');
            console.log(respuesta);
    })
    
    .then( (respuesta) => {
            console.log('dentro del segundo then');
            console.log(respuesta);
    })
    
    .then( (respuesta) => {
            console.log('dentro del tercer then');
            console.log(respuesta);
    })
    ;

    console.log('después de la petición');
});*/

// 3 llamadas a .then() encadenadas, y cada una modificando el valor que le llega a la siguiente
document.addEventListener("DOMContentLoaded", () => {
    let log = document.getElementById('log');
	
	log.insertAdjacentHTML('beforeend', 'Antes de la petición<br/>'); 
    
    fetch('https://reqres.in/api/users')
    
    .then( (respuesta) => {
		log.insertAdjacentHTML('beforeend', 'dentro del primer then<br/>');
		log.insertAdjacentHTML('beforeend', respuesta + "<br/>");
		
		return respuesta.json()
		//return new Promise.resolve(respuesta.data)
    })
    
    .then( (respuesta) => {
		log.insertAdjacentHTML('beforeend', 'dentro del segundo then<br/>');
		log.insertAdjacentHTML('beforeend', JSON.stringify(respuesta) + "<br/>");
		
		return respuesta.data;
    })
    
    .then( (respuesta) => {
        log.insertAdjacentHTML('beforeend', 'dentro del tercer then<br/>');
		log.insertAdjacentHTML('beforeend', JSON.stringify(respuesta[0]) + "<br/>");
    })
    ;

	log.insertAdjacentHTML('beforeend', 'Después de la petición<br/>'); 
})


// https://javascript.info/promise-chaining

