// Función para iniciar y mostrar el primer ejercicio
function inicio() {
    document.getElementById('formulario').style.display = 'block'; // Muestra el formulario
    document.getElementById('lista de tareas').style.display = 'none'; // Oculta la lista de tareas
    document.getElementById('buscar en tablas').style.display = 'none'; // Oculta la búsqueda en tablas
}

// Función para mostrar el ejercicio correspondiente
function mostrarEjercicio(numero) {
    // Oculta todos los ejercicios
    document.getElementById('ejercicio1').style.display = 'none';
    document.getElementById('ejercicio2').style.display = 'none';
    document.getElementById('ejercicio3').style.display = 'none';

    // Muestra el ejercicio correspondiente
    document.getElementById(`ejercicio${numero}`).style.display = 'block';
}

// Función para validar el formulario de registro
function validarFormularioRegistro() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensaje = document.getElementById('mensaje-registro');

    mensaje.textContent = ''; // Limpiar el mensaje previo
  
    if (nombre === '' || email === '' || password === '') {
        mensaje.textContent = 'Por favor, complete todos los campos.';
        mensaje.style.color = 'red';
        return; // Validación simple
    }
 
    mensaje.textContent = 'Registro exitoso!';
    mensaje.style.color = 'green'; // Aquí puedes agregar más validaciones
}

// Función para limpiar los campos del formulario
function btn_limpiar_campos() {
    document.getElementById('formulario-registro').reset(); // Reinicia el formulario
    document.getElementById('mensaje-registro').textContent = ''; // Limpia el mensaje
}

// Función para manejar la lista de tareas
function manejarListaTareas() {
    const nuevaTarea = document.getElementById('nueva-tarea').value;
    const listaTareas = document.getElementById('lista-tareas');
    
    if (nuevaTarea !== '') {
        const li = document.createElement('li');
        li.textContent = nuevaTarea;
        
        const btnCompletar = document.createElement('button');
        btnCompletar.textContent = 'Completar';
        btnCompletar.onclick = function() {
            li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        };
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = function() {
            listaTareas.removeChild(li);
        };
        
        li.appendChild(btnCompletar);
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
        document.getElementById('nueva-tarea').value = '';
    }
}

// Función para buscar en la tabla
function buscarEnTabla() {
    const termino = document.getElementById('termino-busqueda').value.toLowerCase();
    const tabla = document.getElementById('tabla-diccionario');
    const filas = tabla.getElementsByTagName('tr');
    let resultadoEncontrado = false;

    // Limpia resultados previos
    document.getElementById('resultado-busqueda').innerHTML = '';

    for (let i = 1; i < filas.length; i++) {
        const celdaPalabra = filas[i].getElementsByTagName('td')[0];
        const celdaDefinicion = filas[i].getElementsByTagName('td')[1];

        if (celdaPalabra.textContent.toLowerCase().includes(termino)) {
            resultadoEncontrado = true;
            document.getElementById('resultado-busqueda').innerHTML += `<p><strong>${celdaPalabra.textContent}</strong>: ${celdaDefinicion.textContent}</p>`;
        }
    }

    if (!resultadoEncontrado) {
        document.getElementById('resultado-busqueda').innerHTML = '<p>No se encontraron resultados.</p>';
    }
}

// Función para limpiar la búsqueda
function limpiarBusqueda() {
    document.getElementById('termino-busqueda').value = '';
    document.getElementById('resultado-busqueda').innerHTML = '';
}
