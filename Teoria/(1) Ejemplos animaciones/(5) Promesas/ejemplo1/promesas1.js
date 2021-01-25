'use strict';

// Promesa que se resuelve en dos segundos
let miPrimeraPromesa = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("¡Éxito!"); 
  }, 2000);
});

document.addEventListener("DOMContentLoaded", () => {
  let log = document.getElementById('log'); 
	
  // Llamamos a la promesa solo si se ejecuta con éxito	
  if ("Promise" in window) {
    miPrimeraPromesa.then(function(data) {
       log.insertAdjacentHTML('beforeend', data);
    });
  } else {
    alert("Tu navegador no soporta Promesas.");
  }    
  
  // No espera a la promesa
  log.insertAdjacentHTML('beforeend', "Antes del then sin esperar a la promesa<br/>");
});
