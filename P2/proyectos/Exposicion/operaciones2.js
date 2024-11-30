let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}

// Configuración de la gráfica
const barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2, 2, 2],
        name: 'Productos'
    }],
    chart: {
        type: 'bar',
        background: 'transparent',
        height: 350,
        toolbar: {
            show: false
        }
    },
    colors: ['#063970', '#fff', '#063970', '#fff', '#063970', '#fff'],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%'
        }
    },}
