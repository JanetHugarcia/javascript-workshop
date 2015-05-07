//función para verificar si el DOM cargó completamente
window.onload = function(){
  var form = document.forms[0];
  var btnCalculaSuma = form["calcula-suma"];
  var btnCalculaResta = form["calcula-resta"];
  var btnCalculaMultiplica = form["calcula-multiplica"];

  var calculaSumaAB = function(evt){
    var valorA = parseInt(form.sumaA.value);
    var valorB = parseInt(form.sumaB.value);
    var destinoResultado = document.getElementById("resultado-suma");
    destinoResultado.innerHTML = valorA + valorB;
    evt.preventDefault();
  };

  var calculaRestaAB = function(evt){
    var valorA = parseInt(form.restaA.value);
    var valorB = parseInt(form.restaB.value);
    var destinoResultado = document.getElementById("resultado-resta");
    destinoResultado.innerHTML = valorA - valorB;
    evt.preventDefault();
  };

  var calculaMultiplicaAB = function(evt){
    var valorA = parseInt(form.multiA.value);
    var valorB = parseInt(form.multiB.value);
    var destinoResultado = document.getElementById("resultado-multiplica");
    destinoResultado.innerHTML = valorA * valorB;
    evt.preventDefault();
  };


  //Asociando eventos
  btnCalculaSuma.addEventListener("click", calculaSumaAB);
  btnCalculaResta.addEventListener("click", calculaRestaAB);
  btnCalculaMultiplica.addEventListener("click", calculaMultiplicaAB);
};
