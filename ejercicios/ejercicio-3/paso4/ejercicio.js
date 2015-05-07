//función para verificar si el DOM cargó completamente
window.onload = function(){
  var form = document.forms[0];
  var categorias = {};
  var productos = [];

  var registrarProducto = function(evt){
    var nombreProducto  = form.producto.value;
    var nombreCategoria = form.categoria.value;
    var precio = parseInt(form.precio.value);

    registrarItemCategoria(nombreCategoria, nombreProducto);
    registrarItemProducto(nombreProducto, nombreCategoria, precio);

    var registro = "Producto: "+ nombreProducto +" - Categoría: "+ nombreCategoria +" - Precio:"+ precio + "\n";
    form.registroProducto.innerHTML += registro;
    evt.preventDefault();
  };

  var registrarItemProducto = function(nombreProducto, nombreCategoria, precio){
    var itemProducto = {
        "nombre": nombreProducto,
        "categoria": nombreCategoria,
        "precio": precio
    };
    productos.push(itemProducto);
  };

  var registrarItemCategoria = function(nombreCategoria, nombreProducto){
    if(!categorias[nombreCategoria]){
      categorias[nombreCategoria] = {
        "productos": [nombreProducto]
      };
    } else {
      categorias[nombreCategoria].productos.push(nombreProducto);
    }
  };

  var categoriasRegistradas = function(evt){
    var result = "";
    for(var nombreCategoria in categorias){
       result += "Categoría: " + nombreCategoria + ": " + categorias[nombreCategoria].productos.length + "\n";
    };
    alert(result);
    evt.preventDefault();
  };

  var totalProductosRegistrados = function(evt){
    alert("Total de productos registrados: " + productos.length);
    evt.preventDefault();
  };

  var sumaPrecioProductosRegistrados = function(evt){
    resultado = 0;
    for(var i = 0; i < productos.length; i++){
      var itemProducto = productos[i];
      resultado += parseInt(itemProducto.precio);
    }
    alert("El precio total es: " + resultado);
    evt.preventDefault();
  };

  form.registrar.addEventListener("click", registrarProducto);
  form.total_categorias.addEventListener("click", categoriasRegistradas);
  form.total_productos.addEventListener("click", totalProductosRegistrados);
  form.suma_productos.addEventListener("click", sumaPrecioProductosRegistrados);
}
