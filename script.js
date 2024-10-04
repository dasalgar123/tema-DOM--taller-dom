


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
        return;    // Validación simple
    }
 
   mensaje.textContent = 'Registro exitoso!';
    mensaje.style.color = 'green'; // Aquí puedes agregar más validaciones, como el formato del email, etc.
   
}

// Función para limpiar los campos del formulario
function btn_limpiar_campos() {
    document.getElementById('formulario-registro').reset(); // Reinicia el formulario
    document.getElementById('mensaje-registro').textContent = ''; // Limpia el mensaje
}


function validarFormularioRegistro() {
const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const mensajeDiv = document.getElementById('mensaje-registro');  // Función para validar el formulario de registro

if (nombre === '' || email === '' || password === '') {
    mensajeDiv.textContent = 'Error: Todos los campos son obligatorios.';
    mensajeDiv.style.color = 'red';
} else if (password.length < 6) {
    mensajeDiv.textContent = 'Error: La contraseña debe tener al menos 6 caracteres.';
    mensajeDiv.style.color = 'red';
} else {
    mensajeDiv.textContent = 'Registro exitoso!';
    mensajeDiv.style.color = 'green';
    console.log('Nombre:', nombre, 'Email:', email, 'Password:', password);
}
    document.getElementById('mi-imagen').style.display = 'none'; //   no Muestra la imagen

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
    let conteo = 0;

    for (let i = 1; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        let coincide = false;
        for (let j = 0; j < celdas.length; j++) {
            if (celdas[j].textContent.toLowerCase().includes(termino)) { coincide = true; conteo++;}
        }
        filas[i].style.display = coincide ? '' : 'none';}
    document.getElementById('resultado-busqueda').textContent = `Se encontraron ${conteo} coincidencias.`;}



// Función para mostrar el ejercicio seleccionado
function mostrarEjercicio(numero) {
    const ejercicios = document.getElementsByClassName('ejercicio');
    for (let i = 0; i < ejercicios.length; i++) {
        ejercicios[i].style.display = 'none';
    }
    document.getElementById(`ejercicio${numero}`).style.display = 'block';
}

// Función para limpiar todos los campos de entrada y el mensaje
function btn_limpiar_campos() { // Limpiar campos de entrada
document.getElementById('nombre').value = ''; // Limpiar campo de nombre
document.getElementById('email').value = '';  // Limpiar campo de email
document.getElementById('password').value = ''; // Limpiar campo de contraseña

// Borrar el mensaje de registro
const mensajeDiv = document.getElementById('mensaje-registro');
mensajeDiv.textContent = ''; // Borrar mensaje
}


// Función para limpiar el campo de búsqueda, el mensaje de búsqueda y restaurar la tabla
function limpiarBusqueda() {
 
    const campoBusqueda = document.getElementById('termino-busqueda');    // Limpiar el campo de búsqueda
    campoBusqueda.value = '';  // Borra el texto dentro del input
    const resultadoBusqueda = document.getElementById('resultado-busqueda');  // Borrar el mensaje de búsqueda
    resultadoBusqueda.textContent = '';  // Limpia el mensaje de búsqueda
    const tabla = document.getElementById('tabla-diccionario'); // Restaurar la tabla mostrando todas las filas
    const filas = tabla.getElementsByTagName('tr');  // Restaurar la tabla mostrando todas las filas
    
    for (let i = 1; i < filas.length; i++) {  // Comenzar desde 1 para no ocultar el encabezado
        filas[i].style.display = '';  // Mostrar todas las filas nuevamente
    }
}
    // Inicialización
        document.addEventListener('DOMContentLoaded', function() {
            mostrarEjercicio(1);  // Mostrar el primer ejercicio por defecto
});