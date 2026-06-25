function ampliarImagen(tarjeta) {
    const imagenOriginal = tarjeta.querySelector('img');
    const modal = document.getElementById('modal-foto');
    const fotoGrande = document.getElementById('foto-grande');
    fotoGrande.src = imagenOriginal.src;
    modal.showModal();
}
function cerrarImagen() {
    const modal = document.getElementById('modal-foto');
    modal.close();
}

let indiceHistoria = 0;

function deslizarFotosInternas() {
    const historiaActiva = document.querySelector('.slide.active');
    if (!historiaActiva) return;
    const subFotos = historiaActiva.querySelectorAll('.sub-foto');
    if (subFotos.length <= 1) return; 
    let fotoActivaIndex = Array.from(subFotos).findIndex(foto => foto.classList.contains('active'));
    subFotos[fotoActivaIndex].classList.remove('active');
    let siguienteFotoIndex = (fotoActivaIndex + 1) % subFotos.length;
    subFotos[siguienteFotoIndex].classList.add('active');
}

function cambiarHistoria(direccion) {
    const historias = document.querySelectorAll('.slide');
    if (historias.length === 0) return;
    historias[indiceHistoria].classList.remove('active');
    indiceHistoria += direccion;
    if (indiceHistoria >= historias.length) { indiceHistoria = 0; }
    if (indiceHistoria < 0) { indiceHistoria = historias.length - 1; }
    historias[indiceHistoria].classList.add('active');
    const nuevasSubFotos = historias[indiceHistoria].querySelectorAll('.sub-foto');
    nuevasSubFotos.forEach(foto => foto.classList.remove('active'));
    if (nuevasSubFotos.length > 0) {
        nuevasSubFotos[0].classList.add('active');
    }
}
setInterval(deslizarFotosInternas, 3000);


