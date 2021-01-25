document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#btn").addEventListener("click", () => {
		let log = document.getElementById('log');	
		
		var p1 = new Promise((resolve, reject) => { 
			setTimeout(resolve, 4000, 'una'); 
		}); 

		var p2 = new Promise((resolve, reject) => { 
			setTimeout(resolve, 1000, 'dos'); 
		});

		var p3 = new Promise((resolve, reject) => {
			setTimeout(resolve, 3000, 'tres');
		});

		var p4 = new Promise((resolve, reject) => {
			setTimeout(resolve, 2000, 'cuatro');
		});

		var p5 = new Promise((resolve, reject) => {
			// Ejecutar reject si queremos generar un error
			setTimeout(resolve, 5000, 'cinco');
			//reject("promesa 5 fallida");
		});

		Promise.all([p1, p2, p3, p4, p5]).then(values => { 
			log.insertAdjacentHTML('beforeend', values);
		}, reason => {
			log.insertAdjacentHTML('beforeend', reason);
		});
	});	
	
});


// https://javascript.info/promise-chaining

