let preguntas = [
  "El Fuero Maternal corresponde a:",
    ];
    
    let correcta = [1];
    
    let opciones = [
      ["El permiso para salir 1 hora antes del trabajo por 2 años",
  
       "El derecho de toda mujer a no ser desvinculada de su trabajo durante todo el embarazo y hasta 1 año con 84 días post parto.",
    
       "El derecho a no realizar trabajos en los que tengan que realizar fuerza",
        
       "Un permiso que puede ser traspasado al padre trabajador."],
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