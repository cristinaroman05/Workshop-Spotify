
const list = [
    {
        id: 0,
        author: "C.Tangana",
        title: "Me Maten",
        cover: "tangana_cover.png",
        duration: 10
    },
    {
        id: 1,
        author: "Rosalía",
        title: "Despechá",
        cover: "rosalia_cover.png",
        duration: 5
    },
    {
        id: 2,
        author: "Shakira",
        title: "Te felicito",
        cover: "shakira_cover.png",
        duration: 8
    },
    {
        id: 3,
        author: "Quevedo",
        title: "Quédate",
        cover: "quevedo_cover.png",
        duration: 12
    },
    {
        id: 4,
        author: "Bad Bunny",
        title: "Tití me preguntó",
        cover: "bad_cover.png",
        duration: 20
    }
];

let element = document.querySelectorAll('.tarjeta');

let orden = 0;

// Pasa los segundos a minutos
const getMinutes = (s) => {
    const minutes = (Math.floor(s / 60) < 10) ? '0' + Math.floor(s / 60) : Math.floor(s / 60);
    const seconds = (Math.floor(s % 60) < 10) ? '0' + Math.floor(s % 60) : Math.floor(s % 60);
    return minutes + ':' + seconds;
}
let progress = () => {
    elementStartTime++;
    elementProgresoBarra.setAttribute("style",)
};

let pintarCancion = (id) => {
    elementCancion.textContent = list[id].title;
    elementCantante.textContent = list[id].author;
    element.src = './assets/'+ list[id].cover;
    elementEndTime.textContent = getMinutes(list[id].duration);

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
};

let reproductorControles = (arg) => {
    switch (arg) {
        case 'play':
            break;
        case 'backward':
            orden = (orden === 0) ? list.length - 1 : orden -1;
            pintarCancion(orden);
            break;
        case 'next':
            orden = (orden === list.length -1 ) ? 0: orden + 1;
            pintarCancion(orden);
            break;

        case 'shuffle':
            orden = getRandomIntInclusive(0,list.length - 1);
            pintarCancion(orden);
            break;
        case 'repeat':
            pintarCancion(orden);
            break;
    }
};

elementReproduccion.addEventListener("click", () => reproductorControles('play'));
elementBackward.addEventListener("click", () => reproductorControles('backward'));
elementNext.addEventListener("click", () => reproductorControles('next'));
elementShuffle.addEventListener("click", () => reproductorControles('shuffle'));
elementRepeat.addEventListener("click", () => reproductorControles('repeat'));

pintarCancion(0);
progress();

