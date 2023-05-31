let preguntas = [
  "¿Cuál es el mayor aporte de la leche materna versus la formula láctea para el recién nacido?",
   "Liquido de color amarillento segregado por la glándula mamaria los primeros días post parto", 
];
    let correcta = [1, 3];
    
    let opciones = [
      ["-El aporte de agua","-El aporte de proteínas para su sistema inmunológico","-El aporte de Vitamina K","-El aporte de azúcar","Ninguna de las anteriores"],
      ["-Leche Maternizada","-Leche de Cabra","-Leche de Almendras","-Calostro","-Leche de transición"]
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
        
        if (preguntas[posActual].length > 4) {
          document.getElementById("n4").innerHTML = opciones[posActual][4];
        } else {
          document.getElementById("n4").innerHTML = opciones[posActual][4];
        }
      }
    }
    function limpiarOpciones(){
      document.getElementById("op0").className = "boton";
      document.getElementById("op1").className = "boton";
      document.getElementById("op2").className = "boton";
      document.getElementById("op3").className = "boton";
      document.getElementById("op4").className = "boton";
  
      document.getElementById("n0").className = "resp";
      document.getElementById("n1").className = "resp";
      document.getElementById("n2").className = "resp";
      document.getElementById("n3").className = "resp";
      document.getElementById("n4").className = "resp";
  }
    
  function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
      document.getElementById("op" + opElegida).className = "boton botonAcertada";
      document.getElementById("n" + opElegida).className = "resp respAcertada";
      cantidadAcertadas++;
    } else {
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