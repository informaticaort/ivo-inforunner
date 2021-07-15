const url = 'https://739erc48wj.execute-api.us-east-1.amazonaws.com/prod/puntajes';

async function listarPuntajes() {
    const listadoPtos = document.getElementById('listaPuntos');
    try {
        const response = await axios.get(url);
        let pts = response.data.body;
        pts.sort((a, b) => parseFloat(b.Puntaje) - parseFloat(a.Puntaje));
        pts.forEach(element => listadoPtos.innerHTML += `<li>"${element.Nickname.toUpperCase()}":${element.Puntaje} PTS</li>`);
        calcularTiempo(50, pts.length);
    } catch (error) {
        console.error(error);
    }
}

function calcularTiempo(velocidad, cantElementos) {
    // Tiempo   = Distancia/Velocidad
    const puntaje = document.querySelector('li');
    const tiempo = /*puntaje.offsetHeight*/135 / velocidad * cantElementos;
    const marquee = document.querySelector('.marquee ul')
    marquee.style.animationDuration = tiempo + "s";
}