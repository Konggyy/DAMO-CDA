formateo

// Función para generar el array de entradas a partir del texto plano
function generateEntriesFromText(text) {
    const entries = [];
    const lines = text.split('\n');  // Divide el texto en líneas

    lines.forEach(line => {
        const match = line.match(/^(\d{4}-\d{2}-\d{2})\s+(.*)$/);  // Regular expression para buscar la fecha y el texto
        if (match) {
            const date = match[1];  // Fecha
            const text = match[2];   // Texto de la entrada
            entries.push({ date, text });
        }
    });

    return entries;
}

// Función para imprimir el array en el formato adecuado para pegarlo en el código
function printFormattedEntries(entries) {
    const formattedEntries = JSON.stringify(entries, null, 4); // Genera el array formateado
    console.log(formattedEntries);  // Muestra el resultado en la consola para copiarlo
}

// Ejemplo de texto plano (puedes reemplazarlo por el texto que quieras)
const textoPlano = `
2024-11-12 Hoy trabajé en la estructura del proyecto web.
2024-11-13 Revisé el diseño de la interfaz y corregí algunos errores.
2024-11-14 Agregué la funcionalidad de filtrado por fecha.
2024-11-15 Realicé pruebas de la interfaz y corregí errores.
2024-11-16 Actualicé el diseño del formulario para entradas.
`;

// Genera el array y lo imprime en la consola
const entries = generateEntriesFromText(textoPlano);
printFormattedEntries(entries);
