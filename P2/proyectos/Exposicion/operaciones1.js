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
        name: 'Productos',
        data: []
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
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 1
    },
    grid: {
        borderColor: '#55596e',
        yaxis: {
            lines: {
                show: true
            }
        },
        xaxis: {
            lines: {
                show: true
            }
        }
    },
    legend: {
        labels: {
            colors: '#f5f7ff'
        },
        show: true,
        position: 'top'
    },
    stroke: {
        colors: ['transparent'],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark'
    },
    xaxis: {
        categories: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        title: {
            style: {
                color: '#f5f7ff'
            }
        },
        axisBorder: {
            show: true,
            color: '#55596e'
        },
        axisTicks: {
            show: true,
            color: '#55596e'
        },
        labels: {
            style: {
                colors: '#f5f7ff'
            }
        }
    },
    yaxis: {
        title: {
            text: 'Reporte',
            style: {
                color: '#f5f7ff'
            }
        },
        axisBorder: {
            color: '#55596e',
            show: true
        },
        axisTicks: {
            color: '#55596e',
            show: true
        },
        labels: {
            style: {
                colors: '#f5f7ff'
            }
        }
    }
};

const barChart = new ApexCharts(document.querySelector('#bar-chart'), barChartOptions);
barChart.render();

// Event Listener para la fecha
document.getElementById('mes').addEventListener('change', function() {
    const selectedDate = this.value;
    updateChartAndReport(selectedDate);
});

function updateChartAndReport(date) {
    fetch(`/api/ventas?fecha=${date}`)
        .then(response => response.json())
        .then(data => {
            // Actualizar gráfica
            barChart.updateSeries([{
                name: 'Productos',
                data: data.ventas // Asumiendo que la respuesta tiene una propiedad 'ventas' con los datos
            }]);

            // Actualizar reporte
            const reportContent = document.getElementById('report-content');
            reportContent.innerText = `Reporte para la semana del ${date}\nVentas: ${data.ventas.join(', ')}`;
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });

        
}
