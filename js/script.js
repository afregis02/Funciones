function calcularArea() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let area = (base * altura) / 2;
    document.getElementById("resultadoArea").innerText = `El área del triángulo es: ${area}`;
}

function imprimir() {
    let nombre = document.getElementById("nombre").value;
    let apellidoPaterno = document.getElementById("apellidoPaterno").value;
    let apellidoMaterno = document.getElementById("apellidoMaterno").value;
    let edad = document.getElementById("edad").value;
    let pelicula = document.getElementById("pelicula").value;
    let mensaje = `Nombre: ${nombre}\nApellido Paterno: ${apellidoPaterno}\nApellido Materno: ${apellidoMaterno}\nEdad: ${edad}\nPelícula Favorita: ${pelicula}`;
    document.getElementById("imprimir").innerText = mensaje;
}

function calcularNomina() {
    let sueldo1 = parseFloat(document.getElementById('trabajador1').value);
    let sueldo2 = parseFloat(document.getElementById('trabajador2').value);
    let sueldo3 = parseFloat(document.getElementById('trabajador3').value);
    let sueldo4 = parseFloat(document.getElementById('trabajador4').value);
    let sueldo5 = parseFloat(document.getElementById('trabajador5').value);

    let totalNomina = sueldo1 + sueldo2 + sueldo3 + sueldo4 + sueldo5;
    document.getElementById('resultadoNomina').innerText = "Total de la nómina a pagar: $" + totalNomina;
}

function promedio(){
    let pri = parseFloat(document.getElementById('primera').value);
    let seg = parseFloat(document.getElementById('segunda').value);
    let ter = parseFloat(document.getElementById('tercera').value);

    let promedioo = (pri + seg + ter) / 3;
    document.getElementById('ResultadoPromedio').innerText = "El promedio es: " + promedioo;
}