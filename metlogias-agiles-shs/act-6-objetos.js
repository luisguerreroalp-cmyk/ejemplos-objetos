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


// ------------- PASO 7 TOTAL ----------
const total = producto.precio * pedido.cantidad;
pedido.total = total;

console.log("------PASO 7------");
console.log(pedido);


// ------ PASO 8 COPIAR -------
console.log("------PASO 8-------");
const copiamala = producto;
copiamala.precio = 999;
console.log(producto.precio);
// Va imprimir 999: copiamala y producto apuntan al MISMO objeto
// la variable no guarda el objeto, guarda donde esta

producto.precio = 15; //lo dejamos como estaba

const copiabuena = {...producto};
copiabuena.precio = 1000;
console.log(producto.precio);// 15 el original quedo intacto



// ------- PASO 9 --------
console.log("-------PASO 9 ------");

const respuestaOK = {
    ok: true,
    data:pedido
};

const respuestaError = {
    ok: false,
    error: {
        mensaje:"El producto no esta disponible",
        detalles:[]
    }
};
console.log(respuestaOK);
console.log(respuestaError);
