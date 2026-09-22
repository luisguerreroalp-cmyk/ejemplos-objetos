// let nameu = "Jhon";
// let age = 25;
// let isEnrolled = true;
// let subjetcs = ["programacion", "Base de datos", "IA"];

// //acceder a la informacion
// console.log(typeof(nameu));
// console.log(typeof(age));
// console.log(typeof(isEnrolled));
// console.log(typeof(subjetcs));

// console.log(Array.isArray(subjetcs));

// console.log(subjetcs.map(function (s) {return typeof(s); }));

// subjetcs.forEach(function (element){
//     console.log(element);
// })


let estudiante = {
    "name":"jhon M",
    "age": 25,
    "esActivo": true,
    "materias": ["programacion", "BD", "IA"]
}

console.log(typeof(estudiante));
//accedemos a los datos especificados de objeto
console.log("El nombre del estudiante es:", estudiante.name);
console.log("la edad es:", estudiante.age);
console.log("¿Esta inscrito?:", estudiante.esActivo);
console.log("La primera materia es:", estudiante.materias[0]);
console.log("La cantidad d materias:", estudiante.length);

//mostramos el objeto completo
console.log("El estudiante completo es: ", estudiante);
console.table(estudiante);// mostramos en tabla










