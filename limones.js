let canvas = document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const Altura_Suelo=40;
const Altura_Personaje=60;
const Ancho_Personaje=40;

const Ancho_Limon=20;
const Altura_Limon=20;

let personajeX=canvas.width/2;
let personajeY=canvas.height-(Altura_Suelo+Altura_Personaje);
let limonX=canvas.width/2;
let limonY=5;


function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}
function dibujarSuelo(){
    ctx.fillStyle="#442165";
    ctx.fillRect(0,canvas.height-Altura_Suelo,canvas.width,Altura_Suelo);
}
function dibujarPersonaje(){
    ctx.fillStyle="#1900ff";
    ctx.fillRect(personajeX,personajeY,Ancho_Personaje,Altura_Personaje);
}
function moverIzquierda(){
    personajeX=personajeX-=10;
    actualizarPantalla();
    detectarColision();
}
function moverDerecha(){
    personajeX=personajeX+=10;
    actualizarPantalla();
    detectarColision();
}
function actualizarPantalla(){
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}
function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function dibujarLimon(){
    ctx.fillStyle="#94ca16";
    ctx.fillRect(limonX,limonY,Ancho_Limon,Altura_Limon);
}
function bajarLimon(){
    limonY=limonY+=10;
    actualizarPantalla();
}
function detectarColision(){
    if(limonX+Ancho_Limon>personajeX && limonX<personajeX+Ancho_Personaje && limonY+Altura_Limon>personajeY && limonY<personajeY+Altura_Personaje){
        alert("¡Has atrapado el limón!");
        
    }
}