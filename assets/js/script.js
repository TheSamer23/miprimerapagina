// alert("Hola este es mi Javascript");
let nombre = "el Shaman";
let ciudad = "Bo";
let gusto = "piano";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Hola, soy ${nombre}, tengo 25 años de ${ciudad} y soy un estudiante
    apasionado de programación. Mi amor por la lógica y el mundo digital me ha llevado a sumergirme en el estudio
    activo de la programación, donde estoy constantemente aprendiendo y desarrollando nuevas habilidades. Las
    matemáticas son otro de mis intereses más profundos, y disfruto de los desafíos intelectuales que presentan.
    Además, el ${gusto} es otro de mis pasatiempos favoritos; me considero un jugador de nivel intermedio, lo que
    significa que disfruto de la estrategia y el pensamiento lógico que este juego requiere.`
    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);