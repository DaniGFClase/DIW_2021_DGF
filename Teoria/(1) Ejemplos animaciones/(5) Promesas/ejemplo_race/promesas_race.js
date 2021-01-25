document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#btn").addEventListener("click", () => {
		let log = document.getElementById('log');	
		
		var p1 = new Promise( (resolve, reject) => { 
			setTimeout(resolve, 500, "uno"); 
		});
		var p2 = new Promise( (resolve, reject) => { 
			setTimeout(resolve, 100, "dos"); 
		});

		Promise.race([p1, p2]).then( value => {
			log.insertAdjacentHTML('beforeend', "Resolved: " + value + "<br/>");
			// Ambas se resuelven, pero la p2 antes.
		});

		// Ejemplo con un resolve y un reject en el mismo método race.
		var p3 = new Promise( (resolve, reject) => { 
			setTimeout(resolve, 100, "tres");
		});
		var p4 = new Promise( (resolve, reject) => { 
			setTimeout(reject, 500, "cuatro"); 
		});

		Promise.race([p3, p4]).then( value => {
			log.insertAdjacentHTML('beforeend', "Resolved: " + value + "<br/>");
			// p3 es mas rápida, así que se resuelve el race
		}, reason => {
			log.insertAdjacentHTML('beforeend', "Rejected: " + reason + "<br/>");
			// No es llamado
		});

		var p5 = new Promise( (resolve, reject) => { 
			setTimeout(resolve, 500, "cinoc"); 
		});
		var p6 = new Promise( (resolve, reject) => { 
			setTimeout(reject, 100, "seis");
		});

		Promise.race([p5, p6]).then( value => {
			log.insertAdjacentHTML('beforeend', "Resolved: " + value + "<br/>");
			// No es llamado
		}, reason => {
			log.insertAdjacentHTML('beforeend', "Rejected: " + reason + "<br/>");
			// p6 es mas rápida, así que se rechaza
		});
	});

});

