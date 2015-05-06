//función para verificar si el DOM cargó completamente
window.onload = function(){
  var mostrarError = function(){
    var mensaje = "El dato que ingresó es inválido y se registrará en el historial";
    mostrarMensajeEnTextArea(mensaje);
    return alert(mensaje);
  };

  var mostrarMensaje = function(nombre, comida, precio){
    var mensaje = "Hola " + nombre + ", te gusta "+ comida +" y cuesta " + precio + " soles";
    mostrarMensajeEnTextArea(mensaje);
    return alert(mensaje);
  };

  var mostrarMensajeEnTextArea = function(mensaje){
    document.forms[0].registro.value += "-" + mensaje + "\n";
  };

  var mostrarEncuesta = function(evt){
    var nombre, comida, precio;
    alert("bienvenido a la encuesta! \n Pulsa aceptar para continuar");
    nombre = prompt("¿Cuál es tu nombre?");
    if(typeof nombre == "string" && isNaN(nombre)){
      //excelente continúo el flujo
      comida = prompt("¿Cuál es la comida que te gusta?");
      if(typeof comida == "string" && isNaN(comida)){
        //excelente continúo el flujo
        precio = prompt("¿Cuánto cuesta en soles?");
        if(!isNaN(precio)){
          //excelente termina el flujo con éxito
          mostrarMensaje(nombre, comida, precio);
        } else {
          mostrarError();
        }

      } else {
        mostrarError();
      }

    } else {
      mostrarError();
    }
    evt.preventDefault();
  };

  document.forms[0].encuesta.addEventListener("click", mostrarEncuesta, false);
}
