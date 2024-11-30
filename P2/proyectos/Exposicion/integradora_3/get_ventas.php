<?php
$servername = "localhost";
$username = "root"; // Cambia esto por tu usuario de MariaDB
$password = ""; // Cambia esto por tu contraseña de MariaDB
$dbname = "inte";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$fecha = $_GET['fecha'];
$inicioSemana = date('Y-m-d', strtotime("last Monday", strtotime($fecha)));
$finSemana = date('Y-m-d', strtotime("next Sunday", strtotime($inicioSemana)));

// Inicializar los datos de la semana
$diasSemana = [
    'Lunes' => 0,
    'Martes' => 0,
    'Miércoles' => 0,
    'Jueves' => 0,
    'Viernes' => 0,
    'Sábado' => 0,
    'Domingo' => 0
];

// Consultar las ventas de la semana
$sql = "SELECT fecha_venta, SUM(total) AS total 
        FROM ventas 
        WHERE fecha_venta BETWEEN '$inicioSemana' AND '$finSemana'
        GROUP BY fecha_venta";
$resultado = $conexion->query($sql);

while ($fila = $resultado->fetch_assoc()) {
    $diaSemana = date('N', strtotime($fila['fecha_venta'])); // 1 para lunes, 7 para domingo
    $nombresDias = array_keys($diasSemana);
    $diasSemana[$nombresDias[$diaSemana - 1]] = (float)$fila['total'];
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode(['ventas' => array_values($diasSemana)]);

// Cerrar conexión
$conexion->close();