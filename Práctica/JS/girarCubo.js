var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';
var inter;
var cont = 0;
var partes = ['front', 'right', 'back', 'left', 'top', 'bottom'];

function girar() {

    inter = setInterval(() => {
        //  console.log(cont);
        //   var checkedRadio = radioGroup.querySelector(':checked');
        var showClass = 'show-' + partes[cont];
        cont++;
        if (currentClass) {
            cube.classList.remove(currentClass);
        }
        cube.classList.add(showClass);
        currentClass = showClass;
        if (cont == partes.length) {
            cont = 0;
        }
    }, 1000);


}

window.onload = girar;