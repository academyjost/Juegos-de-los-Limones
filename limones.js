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
let puntaje=0;
let vidas=3;
let velocidadCaida=200;
let idIntervalo;

function iniciar(){
    clearInterval(idIntervalo);
    idIntervalo=setInterval(bajarLimon,velocidadCaida);
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}
function dibujarSuelo(){
    ctx.fillStyle = "#1a1a1a"; // Suelo gris muy oscuro
    ctx.fillRect(0, canvas.height - Altura_Suelo, canvas.width, Altura_Suelo);
    
    // Línea decorativa roja en el suelo
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, canvas.height - Altura_Suelo, canvas.width, 1);
}
function dibujarPersonaje(){
    // Cuerpo principal
    ctx.fillStyle = "#000000";
    ctx.fillRect(personajeX, personajeY, Ancho_Personaje, Altura_Personaje);
    
    // Detalle del "ojo ghoul"
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(personajeX + 25, personajeY + 15, 8, 8);
    
    ctx.strokeStyle = "#ffffff";
    ctx.strokeRect(personajeX, personajeY, Ancho_Personaje, Altura_Personaje);
}
function moverIzquierda(){
    personajeX=personajeX-=10;
    actualizarPantalla();
}
function moverDerecha(){
    personajeX=personajeX+=10;
    actualizarPantalla();
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
    // El "limón" ahora es una celda RC roja
    ctx.fillStyle = "#ff0000";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#ff0000";
    ctx.fillRect(limonX, limonY, Ancho_Limon, Altura_Limon);
    ctx.shadowBlur = 0; // Reset para no afectar otros dibujos
}
function bajarLimon(){
    limonY=limonY+=10;
    actualizarPantalla();
    detectarColision();
    detectarPiso();
}
function detectarColision(){
    if(limonX+Ancho_Limon>personajeX && limonX<personajeX+Ancho_Personaje && limonY+Altura_Limon>personajeY && limonY<personajeY+Altura_Personaje){
        //alert("¡Has atrapado el limón!");
        aparecerLimon();
        puntaje=puntaje+1;
        mostrarEnSpan("txtPuntaje",puntaje);
        if (puntaje>=10){
            finalizarJuego("¡GANASTE! Eres un experto atrapando limones.");
        }else{
            velocidadActual -= 15;
            reinicioIntervalo();
            aparecerLimon();
        }
    }
}
function detectarPiso(){
    if(limonY+Altura_Limon>canvas.height-Altura_Suelo){
        //alert("¡Has perdido!");
        vidas-=1;
        mostrarEnSpan("txtVidas",vidas);
        if (vidas<=0){
            finalizarJuego("¡PERDISTE! Has perdido todas tus vidas.");
        }else{
            aparecerLimon();
       }
    }
} 

function reinicioIntervalo() {
    clearInterval(idIntervalo);
    idIntervalo = setInterval(bajarLimon, velocidadActual);
}

function finalizarJuego(mensaje) {
    clearInterval(idIntervalo);
    setTimeout(() => {
        alert(mensaje);
        reiniciar();
    }, 100);
}

function probarAleatorio(){
    let numero=generarAleatorio(10,80);
    console.log(numero);
}
function aparecerLimon(){
    limonX = generarAleatorio(0, canvas.width - Ancho_Limon);
    limonY = 0;
}
function reiniciar(){
    puntaje=0;
    vidas=3;
    mostrarEnSpan("txtPuntaje",puntaje);
    mostrarEnSpan("txtVidas",vidas);
    aparecerLimon();
    iniciar();
}
