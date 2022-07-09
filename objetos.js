//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datos = {
    nombre: "Nico",
    apellido: "Radin",
    edad: 26,
    altura: 172,
    eresDesarrollador: true,
}

//Una variable que obtenga tu edad a partir del objeto anterior
const edad = datos.edad;

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const amigos = [
    {
        nombre: "Agustin",
        apellido: "Suarez",
        edad: 25,
        altura: 185,
        eresDesarrollador: false,
    },
    {
        nombre: "Mariano",
        apellido: "Aguilar",
        edad: 24,
        altura: 170,
        eresDesarrollador: false,
    },
]
const lista = [datos,...amigos];
console.log(lista);


//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = lista.sort((a,b) => b.edad - a.edad );
console.log(listaOrdenada);
