let preguntas = [
  "Respecto a los mecanismos que favorecen la liberación de Oxitocina",
   "¿Qué factores influyen positivamente en la liberación de oxitocina?", 
];
    let correcta = [5, 5];
    
    let opciones = [
      ["El instinto materno, mala técnica de lactancia","Ansiedad, cansancio, llanto del bebé.","Succión eficiente, llenado de ductos de la mama, llanto del bebé, recuerdos del bebé.","Agotamiento, congestión mamaria.","Ninguna de las anteriores","A,B y D"],
      ["Estrés, preocupación, agotamiento excesivo, congestión mamaria, estímulos físicos o psicológicos negativos repentinos.","Lograr tiempos de descanso materno","Tomar malta con huevo, más de 2 litros de agua diarios","Estar en estrecho contacto con el bebé o sus recuerdos","Mantener un buen acople y una adecuada succión a través de lactancia materna a libre demanda","B,D y E"]
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