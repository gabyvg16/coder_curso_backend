// Curso Backend, Desafío 1
class Book {
    constructor(nombre, autor) {
        this.nombre = nombre;
        this.autor = autor;
    }
}

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        // Retorna nombre completo del usuario
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota) {
        // Recibe un nombre de mascota y lo agrega al array de mascotas
        this.mascotas.push(nombreMascota);
    }

    countMascotas() {
        // Retorna la cantidad de mascotas que tiene el usuario
        return this.mascotas.length;
    }

    getMascotas() {
        // Retorna un string con los nombres de las mascotas
        return this.mascotas.join(', ');
    }

    addBook(nombreLibro, autorLibro) {
        // Recibe un nombre de un libro y su autor y agrega objeto { nombre: nombreLibro, autor: autorLibro } al array de libros
        this.libros.push(new Book(nombreLibro, autorLibro));
    }

    getBookNames() {
        // Retorna un array con los nombres del array de libros del usuario
        let nombresLibros = this.libros.map(function (libro) {
            return libro.nombre;
        })
        return nombresLibros;
    }
}

// Nueva instancia
const usuario = new Usuario(
    'Gabriella',
    'Vargas',
    [new Book('Harry Potter', 'J. K. Rowling'), new Book('Rebelion en la granja', 'George Orwell')],
    ['Hannah']
);


// Pruebas
console.log(`${usuario.getFullName()} tiene ${usuario.countMascotas()} mascota(s): ${usuario.getMascotas()}`);

usuario.addMascota('Laila');
console.log('Se utilizó método addMascota');

console.log(`${usuario.getFullName()} ahora tiene ${usuario.countMascotas()} mascota(s): ${usuario.getMascotas()}`);

console.log('Lista de libros: ');
console.log(usuario.getBookNames());

usuario.addBook('Crónicas marcianas', 'Ray Bradbury');
console.log('Se utilizó método addBook');

console.log('Lista de libros: ');
console.log(usuario.getBookNames());