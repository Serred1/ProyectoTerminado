<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/quiz-estudiante/style-quiz1.css">
    <script src="script.js"></script>
    <title>Quiz Video 1</title>
</head>

<body>
    <h1>QUIZ VIDEO 1</h1>
    <!-- Pantalla inicial -->
    <div id="pantalla-inicial">
        <p class="subtitulo">Responde la pregunta</p>
        <button class="btn btn-comenzar" onclick="comenzarJuego()">COMENZAR QUIZ</button>
    </div>
    <div class="btn-volver">
        <button class="btn-inicio" onclick="window.location.href='../../inicio/inicio_Es.php'">Volver a la Pantalla Inicial</button>
    </div>
    <!-- Pantalla juego -->
    <div class="pantalla-juego" id="pantalla-juego" style="display: none;">
        <div class="titulo-pregunta">
            <h2 id="pregunta"></h2>
        </div>
        <div class="opciones">
            <div class="opcion" onclick="comprobarRespuesta(0)">
                <div class="boton" id="op0">A</div>
                <div class="resp" id="n0"></div>
            </div>
            <br>
            <div class="opcion" onclick="comprobarRespuesta(1)">
                <div class="boton" id="op1">B</div>
                <div class="resp" id="n1"></div>
            </div>
            <br>
            <div class="opcion" onclick="comprobarRespuesta(2)">
                <div class="boton" id="op2">C</div>
                <div class="resp" id="n2"></div>
            </div>
            <br>
            <div class="opcion" onclick="comprobarRespuesta(3)">
                <div class="boton" id="op3">D</div>
                <div class="resp" id="n3"></div>
            </div>
        </div>
    </div>
    <!-- Pantalla final -->
    <div id="pantalla-final" style="display: none;">
        <h2>CORRECTAS: <span id="numCorrectas">0</span></h2>
        <h2>INCORRECTAS: <span id="numIncorrectas">0</span></h2>
    </div>
</body>

</html>