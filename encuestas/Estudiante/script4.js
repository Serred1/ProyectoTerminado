let preguntas = [
    "Son prácticas que contribuyen a una producción adecuada de leche para cada madre",
    "¿Cómo podemos apoyar a una gestante en la lactancia?",
  ];
  
  let correcta = [5, 5];
  
  let opciones = [
    ["Favorecer el contacto piel con piel durante la primera hora de vida y promover la lactancia precoz", "Hacerla entrar en razón, solicitando que le de pecho a su bebe aunque duela", "Administrar Galactogogos a todas las madres", "Llevarse al bebé a otra habitación para favorecer el descanso materno", "Evitar factores estresantes en el entorno de la madre.", "A y D"],
    ["Otorgando información actualizada como equipo de salud", "Invitándole a unirse a un grupo de apoyo a la lactancia materna (GALM)", "Sugiriéndole buscar información actualizada en redes sociales o libros (según sea el caso)", "Acudir a Talleres Prenatales", "Ninguna de las Anteriores", "Todas las Anteriores"],
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
      document.getElementById("n0").innerHTML = opciones[posActual][0];
      document.getElementById("n1").innerHTML = opciones[posActual][1];
      document.getElementById("n2").innerHTML = opciones[posActual][2];
      document.getElementById("n3").innerHTML = opciones[posActual][3];
      document.getElementById("n4").innerHTML = opciones[posActual][4];
      document.getElementById("n5").innerHTML = opciones[posActual][5];
    }
  }
  function limpiarOpciones(){
    document.getElementById("op0").className = "boton";
    document.getElementById("op1").className = "boton";
    document.getElementById("op2").className = "boton";
    document.getElementById("op3").className = "boton";
    document.getElementById("op4").className = "boton";
    document.getElementById("op5").className = "boton";

    document.getElementById("n0").className = "resp";
    document.getElementById("n1").className = "resp";
    document.getElementById("n2").className = "resp";
    document.getElementById("n3").className = "resp";
    document.getElementById("n4").className = "resp";
    document.getElementById("n5").className = "resp";
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