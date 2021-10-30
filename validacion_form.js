document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    /*var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Este campo es obligatorio');
      return;
    }
    var clave = document.getElementById('clave').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }*/
    var nombre, correo, fecha, hora, adultos, niños;
    var hoy = new Date();
    var fechaActual = hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate();
    var horaActual = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('email').value;
    fecha = document.getElementById('fecha').value;
    hora = document.getElementById('hora').value;
    telefono = document.getElementById('telefono').value;
    personas = document.getElementById('personas').value;

    if (nombre === "" || email === "") {
        alert("El campo está vacío");
        return;
    }

    if (personas < 0) {
        alert("Debe ingresar un número de personas mayor o igual a 0");
        return;
    }

    console.log(fecha);
    console.log(hoy);
    console.log(fechaActual);


    if (fecha < fechaActual) {
        alert("La fecha es incorrecta. Seleccione una fecha posterior");
        return;
    }

    if (fecha == fechaActual) {
        if (hora < horaActual) {
            alert("La hora es incorrecta. Seleccione una hora posterior");
            return;
        }
    }


    this.submit();
    console.log(fecha);
    console.log(hora);
    console.log(hoy);
    console.log(fechaActual);
    console.log(horaActual);


}