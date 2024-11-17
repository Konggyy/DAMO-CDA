// Ejemplo de entradas predefinidas que se agregarían directamente al código
const entriesIntegrante1 = [
    { date: "2024-11-12", text: "Hoy trabajé en la estructura del proyecto web." },
    { date: "2024-11-13", text: "Revisé el diseño de la interfaz y corregí algunos errores." },
];

const entriesIntegrante2 = [
    { date: "2024-11-12", text: "Investigación sobre cómo usar localStorage." },
    { date: "2024-11-14", text: "Comencé a escribir el backend para almacenar entradas." },
];

const entriesIntegrante3 = [
    { date: "2024-11-13", text: "Desarrollé la interfaz para el diario. dsdsdasdad adad da sdas" },
    { date: "2024-11-14", text: "Inicié pruebas de filtrado por fecha." },
];

// Función para cargar las entradas desde el código (se encuentran en las variables de arriba)
function loadEntries(tabId) {
    const entriesList = document.getElementById(`entriesList${tabId.slice(-1)}`);
    const select = document.getElementById(`searchSelect${tabId.slice(-1)}`);
    entriesList.innerHTML = "";  // Limpiar lista actual
    select.innerHTML = `<option value="">Seleccione un día</option>`; // Limpiar select y agregar opción por defecto

    // Definir las entradas para cada integrante
    const entries = {
        'Integrante1': entriesIntegrante1,
        'Integrante2': entriesIntegrante2,
        'Integrante3': entriesIntegrante3,
    };

    const storedEntries = entries[tabId] || [];

    // Obtener fechas únicas de las entradas
    const dates = [...new Set(storedEntries.map(entry => entry.date))];

    // Agregar las fechas al select
    dates.forEach(date => {
        const option = document.createElement("option");
        option.value = date;
        option.textContent = date;
        select.appendChild(option);
    });

    // Mostrar las entradas al cargar
    storedEntries.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.className = "entry-item";
        listItem.innerHTML = `<strong>${entry.date}</strong>: ${entry.text}`;
        entriesList.appendChild(listItem);
    });
}

// Función para filtrar las entradas por fecha seleccionada
function filterEntries(tabId) {
    const selectedDate = document.getElementById(`searchSelect${tabId.slice(-1)}`).value;
    const entriesList = document.getElementById(`entriesList${tabId.slice(-1)}`);
    entriesList.innerHTML = "";  // Limpiar lista

    // Definir las entradas para cada integrante
    const entries = {
        'Integrante1': entriesIntegrante1,
        'Integrante2': entriesIntegrante2,
        'Integrante3': entriesIntegrante3,
    };

    const storedEntries = entries[tabId] || [];

    // Filtrar las entradas por fecha seleccionada
    const filteredEntries = storedEntries.filter(entry => entry.date === selectedDate || selectedDate === "");

    // Mostrar las entradas filtradas
    filteredEntries.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.className = "entry-item";
        listItem.innerHTML = `<strong>${entry.date}</strong>: ${entry.text}`;
        entriesList.appendChild(listItem);
    });
}

// Inicializar el contenido de las pestañas
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    loadEntries(tabName);  // Cargar las entradas al abrir la pestaña
}
