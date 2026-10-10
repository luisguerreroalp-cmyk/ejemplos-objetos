// Ejercicio - El menu vivo - version de referencia

//------ PASO 1 -----------El arreglo 

const productos = [
    {id:crypto.randomUUID(), nombre: "Molletes", precio:30,categoria:"comida",disponible:true}, 
    {id:crypto.randomUUID(), nombre:"jugo de naranja", precio: 18, categoria: "bebida", disponible:true},
    {id:crypto.randomUUID(),nombre: "Gelatina", precio:12,categoria:"postre",disponible:false}
];


// --------PASO 2 y 3 -------LEER(read)-----------
const listar = ()=> productos;

const listarDisponibles = () => productos.filter((p) => p.disponible);

// ----------- PASO 4: Buscar uno -------------
const obtenerporId = (id) => productos.find((p) => p.id === id);

// ---------------- PASO 5: crear ---------------------
function crear(datos){
    const nuevo = {id:crypto.randomUUID(), disponible:true, ...datos};
    productos.push(nuevo);
    return nuevo;
};

// ----------------- PASO 6 Actualizar ------------------
function Actualizar(id,cambios){
    const i = productos.findIndex((p) => p.id === id);
    if (i === -1) return null;
    productos[i] = {...productos[i], ...cambios};
    return productos[i];
};

// --------------- PASO 7 Borrado logico -----------
function eliminar(id){
    const producto = obtenerporId(id);
    if(!producto) return null;
    producto.disponible = false;
    return producto;
};

// Razon: los pedidos viejos guardan el id de su producto, el historial queda apuntando a algo que ya no exite
// y el corte del dia se rompe, es mejor marcarlo como no disponible para sacarlo del menu sin destruir la informacion, ademas se puede revertir 

// --------------- PASO 8 Total con reduce ---------
function calcularTotal(pedido){
    return pedido.item.reduce((suma,item) => suma + item.precio* item.cantidad, 0);
};

// ----------- PASO 9 ¿ya existe? --------------
const existeNombre = (nombre) =>
    productos.some((p) => p.nombre. toLowerCase() === nombre.toLowerCase());

const buscarportexto = (texto) =>
    productos.filter((p) => p.nombre.
toLowerCase().includes(texto. tolocalelowercase()));
// -------- PASO 10 pruebas -----------
console.log("---------------- LISTAR-------------");
console.log(listar());

console.log("-------------- LISTA DISPONIBLES-----------");
console.log(listarDisponibles().map((p) => p.nombre));

console.log("------------- CREAR-----------");
const creado = crear({nombre:"sincronizada", precio:32, categoria:"comida"});
console.log(creado)
console.log(listar());

console.log("luis daniel totis")