var inputInicioSesion1 = document.getElementById('inputInicioSesion1');
var inputInicioSesion2 = document.getElementById('inputInicioSesion2');

console.log('funciona');
document.getElementById('init').addEventListener('click', function() {
    if (inputInicioSesion1.value == 'Miguel' && inputInicioSesion2.value == 'mis hermanas') {
        alert('aceptado');
        window.location.href = '../INICIO_ADMIN/index.html';
        alert('Reenviando')
    }
    else if (inputInicioSesion1.value == 'Miguel_2' && inputInicioSesion2.value == 'mis hermanas') {
        alert('aceptado');
        window.location.href = '../INICIO_CLIENTE/index.html';
        alert('Reenviando')
    }
    else {
        console.log('Estas rechazado');
    }
    // window.location.href = '../INICIO_ADMIN/index.html';
});

