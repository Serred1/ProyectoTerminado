let preguntas = [
    "Todos los fármacos prohibidos en el embarazo son tóxicos en la Lactancia materna",
    "Para que un fármaco pueda ser tomado por la madre y éste sea seguro para la lactancia ¿Cuál es el porcentaje máximo que puede pasar de la sangre a la leche?",
  ];
  
  let correcta = [1, 1];
  
  let opciones = [
    ["Verdadero", "Falso"],
    ["Entre 10 y 25%", "Menor del 10%", "Mayor del 25%", "0%"],
  ];
  
  let posActual = 0;
  let cantidadAcertadas = 0;
  
  function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPregunta();
  }
  
  function cargarPregunta() {
    if (preguntas.length <= posActual) {
      terminarJuego();
    } else {
      limpiarOpciones();
      document.getElementById("pregunta").innerHTML = preguntas[posActual];
      if (posActual === 0) { // Verificar si es la primera pregunta
        document.getElementById("op0").innerHTML = "A";
        document.getElementById("op1").innerHTML = "B";
        document.getElementById("op2").style.display = "none";
        document.getElementById("op3").style.display = "none";
      } else {
        document.getElementById("op0").innerHTML = "A";
        document.getElementById("op1").innerHTML = "B";
        document.getElementById("op2").style.display = "block";
        document.getElementById("op3").style.display = "block";
    }
    // Mostrar opciones correspondientes
    for (let i = 0; i < opciones[posActual].length; i++) {
      document.getElementById("n" + i).innerHTML = opciones[posActual][i];
  }
    }
  }
  function limpiarOpciones(){
    document.getElementById("op0").className = "boton";
    document.getElementById("op1").className = "boton";
    document.getElementById("op2").className = "boton";
    document.getElementById("op3").className = "boton";

    document.getElementById("n0").className = "resp";
    document.getElementById("n1").className = "resp";
    document.getElementById("n2").className = "resp";
    document.getElementById("n3").className = "resp";
}
  
  function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
      document.getElementById("op" + opElegida).className = "boton botonAcertada";
      document.getElementById("n" + opElegida).className = "resp respAcertada";
      cantidadAcertadas++;
    }else{
      document.getElementById("op" + opElegida).className = "boton botonNoAcertada";
      document.getElementById("n" + opElegida).className = "resp respNoAcertada";

      document.getElementById("op" + correcta[posActual]).className = "boton botonAcertada";
      document.getElementById("n" + correcta[posActual]).className = "resp respAcertada";
    }
    posActual++;
    setTimeout(cargarPregunta, 1000);
}

function terminarJuego() {
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "block";
  document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
  document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}