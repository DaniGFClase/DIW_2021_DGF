// Petición con API Fetch
document.addEventListener("DOMContentLoaded", () => {
	let log = document.getElementById('log'); 
	
    log.insertAdjacentHTML('beforeend', 'Antes de la petición<br/>');
	// No se muestra hasta que no se resuelve la petición
    fetch('https://reqres.in/api/users').then( 
        (respuesta) => {
			log.insertAdjacentHTML('beforeend', 'dentro del then<br/>');
			log.insertAdjacentHTML('beforeend', respuesta);            
        });
		
	// Está línea se muestra antes que el fetch aunque esté después en el código
    log.insertAdjacentHTML('beforeend', 'después de la petición<br/>');
});