// Array para almacenar las notas de los alumnos
let notas = [];

// Función para agregar una nota al array de notas
function agregarNota() {
    const notaInput = document.getElementById('nota');
    const nota = parseFloat(notaInput.value);
    
    // Validar que la nota sea un número y esté entre 0 y 10
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert('Por favor, ingrese una nota válida (entre 0 y 10).');
    } else {
        notas.push(nota);
        console.log(`Nota ${nota} agregada.`);
        notaInput.value = ''; // Limpiar el campo de entrada
        actualizarListaNotas();
    }
}

// Función para calcular el promedio de las notas
function calcularPromedio() {
    if (notas.length === 0) {
        alert('No hay notas ingresadas.');
        return;
    }
    
    let suma = 0;
    for (let nota of notas) {
        suma += nota;
    }
    
    const promedio = suma / notas.length;
    mostrarResultado(`El promedio de las notas es: ${promedio.toFixed(2)}`);
}

// Función para mostrar el resultado en el HTML
function mostrarResultado(mensaje) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = mensaje;
}

// Función para actualizar la lista de notas en el HTML
function actualizarListaNotas() {
    const notasList = document.getElementById('notasList');
    notasList.innerHTML = '';
    for (let nota of notas) {
        const li = document.createElement('li');
        li.innerText = nota;
        notasList.appendChild(li);
    }
}

// Función para limpiar el array de notas y el mensaje de resultado
function limpiarNotas() {
    notas = [];
    mostrarResultado('');
    actualizarListaNotas();
    console.log('Notas y resultado limpiados.');
}

// Event listeners para los botones
document.getElementById('agregarNotaButton').addEventListener('click', agregarNota);
document.getElementById('calcularPromedioButton').addEventListener('click', calcularPromedio);
document.getElementById('limpiarButton').addEventListener('click', limpiarNotas);
