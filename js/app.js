class Producto {
    constructor(categoria, nombre, precio, codigo, enOferta) {
      this.categoria = categoria;
      this.nombre = nombre;
  
      // Si el producto esta en oferta, se le aplica un descuento del 10%
      if(enOferta){
          let precioDescuento = precio * 0.1;
          this.precio = parseFloat(precio - precioDescuento);
      }else{
          this.precio = parseFloat(precio);
      }
      
      this.codigo = codigo;
      this.enOferta = enOferta;
    }
  
    //metodo para agergar un codigo al producto aleatoriamente   
    generarCodigo(array) {  
        this.codigo = array.length + 1000;
    }
  }
  
  const ropa = [
      new Producto("Buzo", "Buzo kongo Pink", 1000, 1000, false),
      new Producto("Buzo", "Buzo kongo Azul", 1500, 1001, true),
      new Producto("Buzo", "Buzo kongo Negro", 1000, 1002, false),
      new Producto("Remera", "Remera kongo Pink", 1000, 1009, false),
      new Producto("Remera", "Remera kongo Azul", 1500, 1010, true),
      new Producto("Remera", "Remera kongo Negro", 1000, 1011, false),
      new Producto("Pantalon", "Pantalon kongo Pink", 1000, 1016, false),
      new Producto("Pantalon", "Pantalon kongo Azul", 1500, 1017, true),
      new Producto("Pantalon", "Pantalon Kongo Negro", 1000, 1018, false)
  ];
  
  // Pedir que se ingresen nuevos productos mediante un prompt y agregarlos al array de ropa
  // 1. Pedir que se ingrese la categoria
  // 2. Pedir que se ingrese el nombre
  // 3. Pedir que se ingrese el precio
  // 4. Pedir que se ingrese si esta en oferta o no
  // 5. Agregar el producto al array de ropa
  // 6. Preguntar si desea agregar otro producto
  let continuar = true;
  while (continuar) { 
    let salir = prompt("Desea ingresar un nuevo producto? Ingresar Si para cargar. Ingrear X para salir");
    salir = salir.toUpperCase();
    // Si salir es X, salgo del while
    if (salir === "X") {
        continuar = false;
        break;
    }
    
    let categoria = prompt("Ingrese la categoria."); 
    let nombre = prompt("Ingrese el nombre");
    let precio = prompt("Ingrese el precio");
    let enOferta = prompt("Ingrese si esta en oferta o no (true/false)");

    // Transformo el string enOferta a boolean
    if (enOferta.toLowerCase() === "true") {
        enOferta = true;
    } else { 
        enOferta = false;
    }

    // Creo el producto con los datos ingresados
    let ingreso = new Producto(categoria, nombre, precio, 0, enOferta);

    // Genero el codigo del producto
    ingreso.generarCodigo(ropa);

    // Ingreso el producto al array de ropa
    ropa.push(ingreso);
    continuar = confirm("Desea agregar otro producto?");
  }
  console.log(ropa);
  
  // Creo funcion de para ordenar dependiendo del criterio elegido
  // 1 si es por precio
  // 2 si es por categoria
  // 3 si esta en oferta
  function ordenar(array, criterio) {
      let arrayOrdenado = [];
      if (criterio === '1') {
          arrayOrdenado = array.sort((a, b) => a.precio - b.precio);
      } else if (criterio === '2') {
          arrayOrdenado = array.sort((a, b) => a.categoria.localeCompare(b.categoria));
      } else if (criterio === '3') {
          arrayOrdenado = array.filter((producto) => producto.enOferta);
      }
      return arrayOrdenado;
  }
  
  // Creo una funcion para mostrar por string los productos el arrayOrdenado en un alert
  function mostrarProductos(array) {
      let stringProductos = "";
      array.forEach((producto) => {
          stringProductos += `- Categoria: ${producto.categoria} \n- Nombre: ${producto.nombre} \n- Precio: $${producto.precio}\n\n\n`;
      });
      return stringProductos;
  }
  
  criterioElegido = prompt("Ingrese el criterio de ordenamiento. 1 para precio, 2 para categoria, 3 para ver si esta en oferta");
  alert(mostrarProductos(ordenar(ropa, criterioElegido)));