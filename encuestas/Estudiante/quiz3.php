<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/encuesta.css">
    <link rel="stylesheet" href="../../css/btn.css">
    <title>Quiz Video 3</title>
</head>

<body>
    <h1>QUIZ VIDEO 3</h1>
    <!-- Pantalla inicial -->
    <div id="pantalla-inicial">
        <p class="subtitulo">Responde las preguntas</p>
        <button class="btn btn-comenzar" onclick="comenzarJuego()">COMENZAR QUIZ</button>
    </div>
    <!-- Pantalla juego -->
    <div class="pantalla-juego" id="pantalla-juego" style="display: none;">
        <h2 id="pregunta"></h2>
        <div class="opciones">
            <div class="opcion" onclick="comprobarRespuesta(0)">
                <div class="boton" id="op0">A</div>
                <div class="resp" id="n0"></div>
            </div>
            <div class="opcion" onclick="comprobarRespuesta(1)">
                <div class="boton" id="op1">B</div>
                <div class="resp" id="n1"></div>
            </div>
            <div class="opcion" onclick="comprobarRespuesta(2)">
                <div class="boton" id="op2">C</div>
                <div class="resp" id="n2"></div>
            </div>
            <div class="opcion" onclick="comprobarRespuesta(3)">
                <div class="boton" id="op3">D</div>
                <div class="resp" id="n3"></div>
            </div>
            <div class="opcion" onclick="comprobarRespuesta(4)">
                <div class="boton" id="op4">E</div>
                <div class="resp" id="n4"></div>
            </div>
            <div class="opcion" onclick="comprobarRespuesta(5)">
                <div class="boton" id="op5">F</div>
                <div class="resp" id="n5"></div>
            </div>
        </div>
    </div>
    </div>
    <!-- Pantalla final -->
    <div id="pantalla-final" style="display: none;">
        <h2>CORRECTAS: <span id="numCorrectas">0</span></h2>
        <h2>INCORRECTAS: <span id="numIncorrectas">0</span></h2>
    </div>
    <button class="btn-inicio" onclick="window.location.href='../../inicio/inicio_Es.php'">Volver a la Pantalla Inicial</button>
    <script src="script3.js"></script>
</body>

</html>