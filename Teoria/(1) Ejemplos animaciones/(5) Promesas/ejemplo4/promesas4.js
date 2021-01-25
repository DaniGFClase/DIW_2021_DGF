// finally() - ¡NO RECIBE PARÁMETROS! - NO es soportado por algunos navegadores
document.addEventListener("DOMContentLoaded", () => {
	let log = document.getElementById('log');
	 
	log.insertAdjacentHTML('beforeend', 'Antes de la petición<br/>'); 
    
    // Prueba a poner mal la URL para generar un error
    fetch('https://reqres.in/api/users')
    .then( 
        (respuesta) => {
			log.insertAdjacentHTML('beforeend', 'dentro del then<br/>');
			log.insertAdjacentHTML('beforeend', respuesta + "<br/>");
		})
    .catch(
        (respuesta) => {
            log.insertAdjacentHTML('beforeend', 'dentro del catch<br/>');
			log.insertAdjacentHTML('beforeend', respuesta + "<br/>");
        })
    .finally( 
        () => {
           log.insertAdjacentHTML('beforeend', 'al final del todo<br/>');
        });
	
	log.insertAdjacentHTML('beforeend', 'después de la petición<br/>');
    
 });