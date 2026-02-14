const btn = document.getElementById('loveBtn');

const audio = new Audio('1.mp3');
audio.loop = true;
let isPlaying = false;

btn.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
        }).catch(error => {
            console.log("Error al reproducir audio:", error);
            // Opcional: alert("Por favor, asegúrate de tener un archivo llamado 'cancion.mp3' en la carpeta.");
        });
    }

    // Lanzar muchas fotos al hacer clic
    const interval = setInterval(createFloatingPhoto, 100);

    // Detener la creación después de 3 segundos
    setTimeout(() => {
        clearInterval(interval);
    }, 3000);
});

function createFloatingPhoto() {
    const photo = document.createElement('img');
    photo.classList.add('floating-photo');

    // ---------------------------------------------------------
    // ¡AQUÍ ESTÁN LOS ENLACES!
    // IMPORTANTE: Por seguridad, los navegadores no permiten leer una carpeta entera automáticamente.
    // Tienes que poner el nombre de cada foto aquí.
    //
    // TE RECOMIENDO:
    // 1. Crea una carpeta llamada "fotos" junto a este archivo index.html
    // 2. Mete tus fotos ahí.
    // 3. Escribe los nombres aquí abajo así: 'nombre_de_tu_foto.jpg'
    // ---------------------------------------------------------
    const images = [
        'fotos/1.jpg',
        'fotos/2.jpg',
        'fotos/3.jpg',
        'fotos/4.jpg',
        'fotos/5.jpg',
        'fotos/6.jpg',
        'fotos/7.jpg',
        'fotos/8.jpg',
        'fotos/9.jpg',
        'fotos/10.jpg',
        'fotos/11.jpg',
        'fotos/12.jpg',
        'fotos/13.jpg',
        'fotos/14.jpg',
        'fotos/15.jpg',
        'fotos/16.jpg',
        'fotos/17.jpg',
        'fotos/18.jpg',
        'fotos/19.jpg',
        'fotos/20.jpg',
        'fotos/21.jpg',
        'fotos/22.jpg',
        'fotos/23.jpg',
        'fotos/24.jpg',
        'fotos/25.jpg',
        'fotos/26.jpg',
        'fotos/27.jpg',
        'fotos/28.jpg'

    ];

    photo.src = images[Math.floor(Math.random() * images.length)];

    // Posición aleatoria horizontal
    photo.style.left = Math.random() * 100 + 'vw';

    // Duración aleatoria
    const duration = Math.random() * 2 + 3; // entre 3 y 5 segundos
    photo.style.animationDuration = duration + 's';

    // Tamaño aleatorio para variar un poco
    const size = Math.random() * 40 + 40; // entre 40px y 80px
    photo.style.width = size + 'px';
    photo.style.height = size + 'px'; // Mantener proporción cuadrada si se usa border-radius

    document.body.appendChild(photo);

    // Eliminar la foto del DOM después de que termine la animación
    setTimeout(() => {
        photo.remove();
    }, duration * 1000);
}
