<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reporte Semanal</title>

    <!-- Letra -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Iconos -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="grid-container">
        <div class="navbar">
            <div class="logo">Papelería Angel</div>
            <div class="buttons">
                <button class="menu">Menú</button>
                <button>opciones</button>
                <button>salir</button>
            </div>
        </div>
        <div class="content">
            <h1>Reporte Semanal</h1>
            <div class="filter">
                <label for="mes">Filtrar por semana: mes:</label>
                <input type="date" id="mes" name="mes">
            </div>
        </div>
    </div>

    <div class="charts">
        <div class="charts-card">
            <h2 class="chart-title">Reporte Semanal</h2>
            <div id="bar-chart"></div>
        </div>
    </div>

    <div class="charts">
        <div class="charts-card">
            <h2 class="chart-title">Reporte</h2>
            <div id="report-content"></div>
        </div>
    </div>

    <!-- Script para ApexCharts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.54.0/apexcharts.min.js"></script>
    <!-- Custom JS -->
    <script src="operaciones.js"></script>
</body>
</html>
