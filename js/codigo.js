  /*  1 es piedra, 2 papel, 3 es tijera */
       
  function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
};

function eleccion(jugada){
    let resultado = ""
    if(jugada== 1){
        resultado ="piedra 🥌"
    } else if(jugada== 2){
        resultado ="papel 🧻"
    } else if (jugada == 3){
        resultado = "tijera ✂"
    } else {
        resultado ="No elegiste nada! 🙄"
    }
    return resultado
}

let jugador = 0;
let pc = 0
let triunfos = 0
let perdidas = 0
let empate = 0

while(triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3);     
    jugador = prompt("Elige: 1 para piedra , 2 para papel o 3 para tijera");

    /* Eleccion del Jugador */

    alert("PC elige: " + eleccion(pc))
    alert("Vos elegiste: " + eleccion(jugador))

    //COMBATE

    if(pc == jugador){
        alert("EMPATE 😅")
        empate = empate + 1
    }else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
        alert("GANASTEEEE😁")
        triunfos = triunfos + 1
    }else{
        alert("PERDISTE 😭")
        perdidas = perdidas + 1
    };
}

alert("Ganaste " + triunfos + " veces. Empataste " + empate + " veces. Perdiste " + perdidas + " veces")