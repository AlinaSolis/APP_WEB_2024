<?php
session_start();
            if (isset($_SESSION['user'])) {
                
            } else {
                header("Location: ../index.php");
                exit();
            }



////////////////////////////////////////////
if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        //Desactivar las noticias y mostrar los errores
         error_reporting(E_ALL ^ E_NOTICE);
   
         //1.- Conectarse a la BD
         include_once("conexion.php");
         
         //2.- Traer los datos del formulario
         $descripcion=$_POST['descripcion'];
         $puntuacion=$_POST['puntuacion'];
         $cantidad=$_POST['cantidad'];
         $categoria=$_POST['categoria'];
      
         $sql="INSERT INTO `articulos` (`descripcion`, `pu`, `cantidad`, `id_categoria`) VALUES ('$descripcion', '$puntuacion', '$cantidad', '$categoria');";
         //4.- Ejecutar la consulta
      
         $ejecutar_sql=$conexion->query($sql);
    
         if ($ejecutar_sql)
         {
           echo " <script>   
                      alert('... Articulo Agregado Correctamente ... ');
                   </script>";
         }
         else
         {
           echo " <script>   
                    alert('... No fue posible agregar el articulo, verifique por favor... ');
                    </script>";
           $entrar="noinsertar";
         }
    }

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Inicio|PHP Proyecto UTD
    </title>
    <link rel="stylesheet" href="../css/estilos.css" type="text/css">
</head>
<body>
    <header>
        <div id="logotipo">
            <img src="../img/logophp.png" alt="Imagen Django" title="Django">
            <h1>PHP Proyecto Web</h1>
        </div>
    </header>
    <nav>
        <ul>
                <li><a href="../index.php" >Inicio</a></li>
                <li><a href="mision.php">Mision</a></li>
                <li><a href="vision.php">Vision</a></li>
                <li><a href="acercade.php">Acerca de</a></li>
                <li><a href="registrar_articulo.php">Registrar articulos</a></li>
                <li><a href="registrar_articulo.php">Registrar Categoria</a></li>
                <li><a href="mostrar_articulos.php">Articulos</a></li>
                <li><a href="mostrar_categorias.php">Categorias</a></li>
                <li><a href="cerrar_sesion.php">Cerrar sesión</a></li>
        </ul>
    </nav>
    <section id="content">
       <div class="box">
            <h1>Registrar articulo</h1>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
                <table  align="center">
                    <tr>
                        <td><label for="descripcion">Descripcion:</label></td>
                        <td><input type="text" placeholder="descripcion" name="descripcion" autofocus required></td>
                    </tr>
                    <tr>
                        <td><label for="puntuacion">Puntuacion:</label></td>
                        <td><input type="number" name="puntuacion" maxlength="10" required></td>
                    </tr>
                    <tr>
                        <td><label for="cantidad">Cantidad:</label></td>
                        <td><input type="number" name="cantidad" maxlength="10" required></td>
                    </tr>
                    <tr>
                        <td><label for="categoria">Categoria:</label></td>
                        <td>
                            <select name="categoria" id="categoria">
                                <?php
                                include_once('conexion.php');
                                $sql="select * from categorias";
                                $ejecucion_sql=$conexion->query($sql);
                                
                                while ($fila=$ejecucion_sql->fetch_assoc()){
                                    echo '<option value="'.$fila['id'].'">'.$fila['descripcion'].'</option>';  
                                }
                                ?>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" name="enviar" value="Enviar" >
                        </td>
                        <td>
                            <input type="reset" name="lim
                            piar" value="limpiar" >
                        </td>
                    </tr>
                </table>
            </form>
            <hr>
       </div>
    </section>
    <footer>
        <p>Curso de PHP con  Alina Solis &copy; 2024 | Visitado el: 01/10/24</p>
    </footer>
</body>
</html>

