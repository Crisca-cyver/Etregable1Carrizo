// Definición de un array con tipos de seguros
const tiposDeSeguros = ["Salud", "Auto", "Vida", "Hogar"];

// Función para mostrar opciones de seguros
function mostrarOpciones() {
    let opciones = "Seleccione un tipo de seguro:\n";
    for (let i = 0; i < tiposDeSeguros.length; i++) {
        opciones += `${i + 1}. ${tiposDeSeguros[i]}\n`;
    }
    return opciones;
}

// Función para obtener datos del usuario
function obtenerDatos() {
    const seleccion = prompt(mostrarOpciones());
    console.log(`Selección del usuario: ${seleccion}`); // Depuración
    const tipoSeleccionado = tiposDeSeguros[seleccion - 1];

    if (!tipoSeleccionado) {
        alert("Selección no válida. Intenta de nuevo.");
        return null;
    }

    let monto = parseFloat(prompt("Ingrese el monto a asegurar:"));
    console.log(`Monto ingresado: ${monto}`); // Depuración
    if (isNaN(monto) || monto <= 0) {
        alert("Monto no válido. Intenta de nuevo.");
        return null;
    }

    return { tipoSeguro: tipoSeleccionado.toLowerCase(), monto };
}

// Función para procesar los datos y calcular la cotización
function procesarDatos(datos) {
    console.log(`Datos recibidos para procesamiento: ${JSON.stringify(datos)}`); // Depuración
    let cotizacion;
    switch (datos.tipoSeguro) {
        case 'salud':
            cotizacion = datos.monto * 0.05;
            break;
        case 'auto':
            cotizacion = datos.monto * 0.07;
            break;
        case 'hogar':
            cotizacion = datos.monto * 0.03;
            break;
        case 'vida':
            cotizacion = datos.monto * 0.04;
            break;
        default:
            cotizacion = 0;
            alert("Tipo de seguro no válido.");
    }2
    return cotizacion;
}

// Función para mostrar el resultado en un alert
function mostrarResultado(cotizacion) {
    console.log(`Cotización calculada: ${cotizacion}`); // Depuración
    if (cotizacion > 0) {
        alert(`La cotización es: $${cotizacion.toFixed(2)}`);
    } else {
        alert("No se pudo calcular la cotización.");
    }
}

// Función principal del simulador
function iniciarSimulador() {
    const datos = obtenerDatos();
    if (datos) {
        const cotizacion = procesarDatos(datos);
        mostrarResultado(cotizacion);
    }
}

// Iniciar el simulador al cargar la página
iniciarSimulador();
