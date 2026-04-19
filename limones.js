let canvas = document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const Altura_Suelo=40;
const Altura_Personaje=60;
const Ancho_Personaje=40;

let personajeX=canvas.width/2;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
}
function dibujarSuelo(){
    ctx.fillStyle="#442165";
    ctx.fillRect(0,canvas.height-Altura_Suelo,canvas.width,Altura_Suelo);
}
function dibujarPersonaje(){
    ctx.fillStyle="#1900ff";
    ctx.fillRect(personajeX,canvas.height-(Altura_Suelo+Altura_Personaje),Ancho_Personaje,Altura_Personaje);
}
function moverIzquierda(){
    personajeX=personajeX-=10;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dibujarSuelo();
    ctx.fillStyle="#1900ff";
    ctx.fillRect(personajeX,canvas.height-(Altura_Suelo+Altura_Personaje),Ancho_Personaje,Altura_Personaje);
}
function moverDerecha(){
    personajeX=personajeX+=10;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dibujarSuelo();
    ctx.fillStyle="#1900ff";
    ctx.fillRect(personajeX,canvas.height-(Altura_Suelo+Altura_Personaje),Ancho_Personaje,Altura_Personaje);
}
