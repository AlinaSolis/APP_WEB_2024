alert("Holaaa")
document.getElementById('figura').addEventListener('change', function() {
    const figura = this.value;
    if (figura === 'rectangulo') {
        document.getElementById('alto-div').style.display = 'block';
    } else {
        document.getElementById('alto-div').style.display = 'none';
    }
});

function operaciones() {
    const figura = document.getElementById('figura').value;
    const ancho = document.getElementById('ancho').value;
    let area;
    if (figura === 'rectangulo') {
        const alto = document.getElementById('alto').value;
        area = ancho * alto;
        
    } else {
        area = ancho * ancho;
    }
    document.getElementById('resultado').innerText = 'El área es: ' + area;
    
}



