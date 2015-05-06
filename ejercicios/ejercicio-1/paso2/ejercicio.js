//función para verificar si el DOM cargó completamente
window.onload = function(){
  var mostrarEncuesta = function(evt){
    var nombre, comida, precio;
    alert("bienvenido a la encuesta! \n Pulsa aceptar para continuar");
    nombre = prompt("¿Cuál es tu nombre?");
    console.log("se ingresó el nombre", nombre);

    comida = prompt("¿Cuál es la comida que te gusta?");
    console.log("Se ingresó la comida", comida);

    precio = prompt("¿Cuánto cuesta?");
    console.log("Se ingresó el precio", precio);
    evt.preventDefault();
  };

  document.forms[0].encuesta.addEventListener("click", mostrarEncuesta);
};
