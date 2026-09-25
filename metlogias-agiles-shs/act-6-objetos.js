//Datos y metodos de un objeto
//ficha de menu
// los datos son distintos a proposito compara la FORMA, no el contenido
const producto = {
    id: "p-07",
    nombre:"agua de jamaica",
    precio:15,
    categoria:"bedida", 
    disponible:true,

    //metodos
    resumen(){
        return this.nombre + "- $ " + this.precio + "(" + this.categoria + ")"
    },
    estadisponible(){
      return this.disponible;
    }
}



console.log("paso 1 - impriendo el producto");
console.log(producto);

// paso 2 - tres formas de leer 
console.log("-----PASO 2 -----");
const campo = "nombre";
console.log(producto.nombre);
console.log(producto["nombre"]);
console.log(producto[campo]);


console.log("----PASO 3 ----");
console.log(producto.resumen());
console.log(producto.estadisponible());

// ----- PASO 4 El usuario ------
const usuario = {
    id: "u-03",
    nombre:"Juanito pistolas",
    correo:"Juanito@cbtis258.edu.mx",
   telefono:8185679818,
    rol:"alumno"
};


// ----- PASO 5 -----
const pedido = {
    folio:"PR- 0118",
    cliente: usuario,
    producto: producto,
    cantidad: 3,
    estado: "pendiente"
}


console.log("----- PASO 5----")
console.log(pedido.cliente.nombre);
console.log(pedido.producto.precio);
console.log(pedido.cliente.telefono);


//paso 6 - Desestructuracion
console.log("-------PASO 6 -------");
const {nombre,precio} = producto;
console.log(nombre, precio);

const{cantidad, nota = "sin nota"} = pedido;
console.log(cantidad, nota);
console.log("Mi nombre soy programdor")