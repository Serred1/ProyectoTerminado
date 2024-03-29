<?php
session_start();

if ($_SESSION === null) {
  header("videos_e.php");
}

?>

<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>SB Admin 2 - Dashboard</title>

  <!-- Custom fonts for this template-->
  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="../css/bebe.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="../css/sb-admin-2.min.css" rel="stylesheet">

  <!--datables CSS básico-->
  <link rel="stylesheet" type="text/css" href="../vendor/datatables/datatables.min.css" />
  <!--datables estilo bootstrap 4 CSS-->
  <link rel="stylesheet" type="text/css" href="../vendor/datatables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css">

</head>

<body id="page-top">

  <?php
  // Hacer la consulta a la base de datos para obtener los datos del último usuario registrado
  include("../controlador/conexion.php");
  $sql = "SELECT nombre, apellido FROM usuarios ORDER BY id DESC LIMIT 1";
  $resultado = $conexion->query($sql);

  // Verificar si la consulta fue exitosa y mostrar los datos del usuario
  if ($resultado->num_rows > 0) {
    $fila = $resultado->fetch_assoc();
    $nombre = $fila["nombre"];
    $apellido = $fila["apellido"];
  } else {
    echo "No se encontraron registros";
  }
  ?>

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="../inicio/inicio_Es.php">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-baby-carriage"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Lactancia Materna</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <a class="nav-link" href="../inicio/inicio_Es.php">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Informacion Importante</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Interface
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <i class="fas fa-fw fa-cog"></i>
          <span>Aprender</span>
        </a>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Multimedia</h6>
            <a class="collapse-item" href="videos_e.php">Videos</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Test</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Aprendizaje</h6>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 1</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 2</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 3</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 4</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 5</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 6</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 7</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 8</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 9</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 10</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 11</a>
            <a class="collapse-item" href="../encuestas/Estudiante/quiz1.php">Quiz Video 12</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Aprendizaje</h6>
            <a class="collapse-item" href="../adminuser/aduser.php">Usuarios</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
          <i class="fas fa-fw fa-cog"></i>
          <span>Inicio</span>
        </a>
        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Datos</h6>
            <a class="collapse-item" href="../inicio/estudiante/foro.php">Inicio</a>
          </div>
        </div>
      </li>
      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>



          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <!-- Nav Item - Alerts -->
            <!-- Nav Item - Messages -->
            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                  <?php echo $_SESSION["nombre"] . " " . $_SESSION["apellido"]; ?></span>
                <img class="img-profile rounded-circle" src="../img/programador.png">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Cerrar Sesión
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->
</body>
</html>