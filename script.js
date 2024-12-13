// Ejemplo de entradas predefinidas que se agregarían directamente al código
const entriesIntegrante1 = [
    { 
        date: "2024-11-08", 
        text: "Hoy dediqué el tiempo a investigar y comparar los motores gráficos Unreal Engine y Unity mediante documentación y varios videos explicativos, Analicé en detalle las capacidades de cada motor, desde gráficos y rendimiento hasta facilidad de uso y opciones de programación, enfocándome en sus aplicaciones en proyectos de realidad aumentada y en dispositivos móviles. Posteriormente, participé en la elaboración del documento \"Motor Gráfico\", donde expuse una comparativa con los puntos clave de ambos motores, destacando sus ventajas y aplicaciones según el tipo de proyecto."
    },
    { 
        date: "2024-11-08", 
        text: "A través de este análisis detecté que para unos gráficos bien detallados es mejor Unreal, pero para nuestro caso, donde tratamos interfaces 3D con mayor versatilidad y gráficos no tan detallados, podemos usar plantillas determinadas de Unity y empezar el proyecto con más facilidad."
    },
    { 
        date: "2024-11-09", 
        text: "Hoy comencé con la instalación de Unity Hub para gestionar proyectos. Luego, descargué la plantilla AR Mobile para comenzar con el desarrollo de mi aplicación de realidad aumentada. Tras ello, redacté el documento \"Paso por Paso del Proyecto\" entero que describe el proceso completo de implementación del proyecto, incluyendo la instalación en el móvil. Finalmente, implementé el algoritmo para la interacción de objetos 3D en AR y probé la instalación en mi dispositivo móvil Xiaomi, asegurándome de que todo estuviera correctamente configurado para la ejecución."
    },
    { 
        date: "2024-11-12", 
        text: "Hoy definimos el nuevo rumbo del proyecto, lo cual nos llevó a reiniciarlo para ajustarlo mejor a nuestros objetivos. Comencé un nuevo proyecto en Unity con una nueva versión y añadí Vuforia para la implementación de realidad aumentada descargando e implementando los archivos. He creado una cuenta Vuforia para MAIVER, obtenido la licencia para poder usarla con Unity y creado una BD para el proyecto llamada MAIVER. También he creado dos archivos explicativos del nuevo proyecto con Vuforia y el documento para gestionar la BD de Vuforia: \"3 - Projecte Encaminat amb Vuforia\" y \"4 - Alta Vuforia\"."
    },
    { 
        date: "2024-11-15", 
        text: "Hoy comencé a trabajar en el documento \"5 - Unity con Vuforia\", que detalla los pasos necesarios para acabar la Alpha del proyecto. Paralelamente, avancé con la versión alpha del proyecto. Sin embargo, al intentar compilarlo, nos encontramos con un error que impidió que la aplicación funcionara correctamente. Tras analizar el problema, creemos que está relacionado con el dibujo utilizado como Image Target, ya que parece no ser reconocido adecuadamente por Vuforia."
    },
    { 
        date: "2024-11-17", 
        text: "Hoy finalicé el documento \"5 - Unity con Vuforia\", completando los pasos necesarios para configurar correctamente la herramienta. También logré terminar la versión alpha del proyecto, solucionando el problema de las imágenes. Descubrí que las imágenes utilizadas como Image Targets deben tener una puntuación mínima de 4 estrellas en Vuforia para que puedan ser detectadas correctamente. Este ajuste permitió que la aplicación funcionara como esperaba. Además, descargué e instalé Blender para modelar el objeto \"Bertrand\" basado en la marca para la que trabajamos. Trabajé en su diseño y exporté el modelo en los formatos .obj y .mlt para importarlo a Unity. Finalmente, preparé mi parte de la presentación del proyecto para la semana que viene."
    },
    { 
        date: "2024-11-17", 
        text: "Hoy implementé la funcionalidad para mover los modelos 3D arrastrándolos sobre la imagen 2D en Vuforia. Creé un script llamado \"ModelInteraction.cs\" que permite seleccionar y mover el modelo dentro del área delimitada por el Image Target."
    },
    { 
        date: "2024-11-17", 
        text: "Aseguré que el modelo no saliera de los límites del Image Target utilizando coordenadas locales y globales para mantener el modelo en su posición correcta dentro de la escena de AR."
    },
    { 
        date: "2024-11-17", 
        text: "Redacté un documento llamado \"6 - Movimiento y Rotación\", donde expliqué los pasos para implementar el movimiento de los modelos. Incluí detalles sobre el script utilizado, el cálculo de offsets y cómo manejar las interacciones táctiles para mover el modelo correctamente dentro de la escena de realidad aumentada."
    },
    { 
        date: "2024-11-23", 
        text: "Hoy, tras la exposición del 22/11 decidimos cambiar un poco el rumbo del proyecto. Implementé dos scripts clave para la interacción con los modelos 3D en Unity. El primero, llamado ModelDragController.cs, permite que los usuarios arrastren los modelos dentro de la escena, asegurando un movimiento fluido. Además, creé un segundo script llamado ManualRotationController.cs, que añade la capacidad de rotar los objetos mediante una Scrollbar en la interfaz de usuario de Unity, que permite al usuario controlar la rotación del modelo en un rango de 0° a 360°."
    },
    { 
        date: "2024-11-24", 
        text: "Hoy incorporé 9 modelos 3D en Unity, 4 volantes y 4 modelos “realistas” de coches, a los cuales les implementé todos los scripts que desarrollamos previamente, asegurando que cada modelo pueda ser arrastrado rotado y escalado correctamente pero previamente seleccionado dentro de la escena. Además, utilizando Blender, diseñé dos modelos personalizados: uno de ellos es un volante con el nombre Bertrand grabado y el logotipo de la marca. También realicé la integración de las imágenes de estos modelos en la base de datos de Vuforia, asegurándome de que fueran reconocidos correctamente por la aplicación."
    },
    { 
        date: "2024-11-26", 
        text: "Dediqué el día a documentar todo el proceso en dos documentos esenciales para el proyecto. El primero, llamado \"6 - Scripts y Interfaz\", detalla cómo se desarrollaron e implementaron los scripts de movimiento rotación, escalada, selección… explicando cada componente y su integración con la interfaz de usuario. El segundo documento, \"7 - Modelos 3D en Unity\", se centra en la creación de los modelos, tanto los importados como los diseñados en Blender, y su configuración dentro del entorno de Unity."
    },
    { 
        date: "2024-11-27", 
        text: "Hoy dediqué un rato a crear el documento “CATALOGO APP”, dónde se gestionan los modelos para verse de manera correcta a través de la aplicación. Es un documento con todas las imágenes de la BD de Vuforia."
    },
    { 
        date: "2024-12-01", 
        text: "Hoy dediqué el día a buscar el modelo 3D separado por partes poner todos sus materiales (24) y hacer las dos nuevas implementaciones pedidas, por el profesor, tanto la funcionalidad de cambio de color a través del script CarColorChange.cs como las animaciones de las puertas a través del script DoorPilotInteraction.cs. A la vez, de hacer los scripts documenté el trabajo en un documento llamado “8 - Modelo por partes - animaciones y cambios de color”."
    },
    { 
        date: "2024-12-03", 
        text: "Hoy implementé un botón de información en la app, añadiendo tres paneles para mostrar las instrucciones de uso con mayor claridad, incluyendo imágenes ilustrativas. Utilicé el script InfoPopUpController.cs para gestionar la funcionalidad, asegurándome de que todos los botones estén correctamente conectados."
    },
    { 
        date: "2024-12-04", 
        text: "Hoy implementé un botón de POV (Point of View) que permite visualizar el vehículo desde su interior de forma más fácil y directa. Utilicé el script POVController.cs para gestionar esta funcionalidad, enfocándome en mejorar la experiencia del usuario."
    },
    { 
        date: "2024-12-06", 
        text: "Hoy implementé un botón lateral que despliega las funcionalidades de información, POV y cambio de colores según el modelo seleccionado. Utilicé el script ModelType para determinar qué botones se muestran en función del tipo de modelo y el script MenuController.cs para gestionar la visibilidad dinámica de estos botones. Además, reemplacé el botón de reset por uno más estético, mejorando la interfaz de usuario en general."
    },
    { 
        date: "2024-12-10", 
        text: "Hoy modifiqué el catálogo según la solicitud del profesor, de manera que los modelos de los coches ahora se muestran de forma individual en lugar de aparecer en conjunto. Además, actualicé el PowerPoint del proyecto para reflejar todas las nuevas implementaciones realizadas hasta el momento."
    },
    { 
        date: "2024-12-11", 
        text: "Hoy dediqué un tiempo a cambiar el logo de la APP de manera que sea más atractivo, también a redactar el documento “9 - Barra Lateral y sus funcionalidades”. Además de corregir algún detalle como los textos del botón de información."
    }
];

const entriesIntegrante2 = [
    { 
        date: "2024-11-08", 
        text: "Hasta ahora, durante la semana de exámenes, solo repartimos las responsabilidades y comenzamos a crear tareas de investigación para adentrarnos de forma más específica a las tecnologías a trabajar. Una vez acabada la reunión, me ha tocado explorar las ventajas de Unity vs Unreal Engine, ampliando mis conocimientos sobre Unity, para valorar cuál de los dos encaja más con las diferentes implementaciones de nuestra posible aplicación. Además, como coordinador, he creado el repositorio de GitHub donde vamos a trabajar el código."
    },
    { 
        date: "2024-11-10", 
        text: "He instalado Unity Hub y he empezado a mirar las diferentes plantillas. También he configurado el repositorio de GitHub."
    },
    { 
        date: "2024-11-12", 
        text: "He instalado la nueva versión que vamos a usar de Unity (la instalación anterior no era compatible con Vuforia, que es la nueva herramienta que vamos a usar con Unity para la virtualización). Además, he estado trabajando en la web de la CDA, ajustando aspectos visuales y de filtrado para hacerla más útil y visual."
    },
    { 
        date: "2024-11-15", 
        text: "Después de la reunión presencial en clase, nos hemos puesto a planificar la presentación de la aplicación, en la que me va a tocar plantear las tecnologías."
    },
    {
        date: "2024-11-20",
        text: "Despues de acabar el powerpoint, he preparado mi parte de la presentacion, para ser la primera version de la app y la priemra presentacion, creo que el resultado será bueno, intentare conseguir el feedback posible como corrdiandor, para mejorar las siguientes siempre que sae necesario"
    },
    { 
        date: "2024-11-24", 
        text: "Tal y como hemos repartido los scripts, me ha tocado hacer los script relacionados con la selección de los elementos, la rotación inicial que marcará que son elementos seleccionables y el botón de reset, para evitar acumulacion de modelos y otros problemas parecidos, para ello, he tenido que implementar un modelo vacío “empty model”, que aunque a pruebas futuras, quizás hay que reemplazar este modelo."
    },
    { 
        date: "2024-11-26", 
        text: "He acabado los scripts de rotación, y he comenzado a mirar cómo puedo generar y encontrar modelos de asientos. He encontrado una web, de la que obtendremos diferentes modelos. He seleccionado un asiento completo, y he generado variantes de este."
    },
    {
        date: "2024-12-04",
        text: "Hoy he modificado el script que escala los modelos, para poder usar dos dedos, además, tal y como hemos quedado, al escalar, se mostrará el icono correspondiente en la parte superior izquierda."
    },
    {
        date: "2024-12-06",
        text: "He acabado el script de escala, pues aun no se sentia muy usable con dos dedos, ahora creo que el resultado es muy semejante al esperado."
    },
    {
        date: "2024-12-07",
        text: "El script de selección al final no ha sido como la primera idea que tuvimos, hemos cambiado la idea de que una “malla” envuelva al objeto, sino que vamos a dejar que el objeto deje de girar y se modifica el icono de arriba a la izquierda."
    },
    {
        date: "2024-12-10",
        text: "Hoy he acabado el script que usará el botón de POV, escalando el coche a la medida necesaria para proporcionar una sensación de primera persona e interior del vehículo, después de un rato probando con diferentes coches, creo que el modelo más completo ha quedado bien, pero al parecer ese modelo escala diferente al resto, la mayoría escalan en 15, el modelo especial escala en 1.5, suponemos que es por los tamaños originales."
    },
    {
        date: "2024-12-11",
        text: "Hemos acabado el PowerPoint, tanto la versión original, como la reducida, según el formato de Bertrand."
    }
];


const entriesIntegrante3 = [
    { 
        date: "2024-10-25", 
        text: "En el día de hoy hemos repartido los roles del proyecto y estoy a cargo de ser el Especialista Documental. El nombre de nuestro grupo se llamará MAIVER y he creado la cuenta de Gmail propia del grupo, que es: maiver.corp@gmail.com."
    },
    { 
        date: "2024-11-08", 
        text: "Debido a la semana de exámenes, no hemos realizado ninguna reunión ni tarea. Hoy he creado todas las carpetas y documentos necesarios para empezar el proyecto, como la carpeta de Aprendizaje Digital donde cada integrante del grupo explicará su trabajo. También he creado carpetas necesarias para el proyecto como Plantillas, Reuniones (para guardar las reuniones realizadas), Prototipos, Presentaciones y Documentación (donde almacenaremos toda la información del proyecto)."
    },
    { 
        date: "2024-11-08", 
        text: "Hemos realizado una reunión del equipo en clase. Durante la reunión, todo el equipo documentó las ventajas y desventajas de Unity y Unreal Engine. Al final, hemos decidido usar Unreal Engine y realizar una investigación sobre qué entorno nos favorece más para nuestro proyecto."
    },
    { 
        date: "2024-11-12", 
        text: "Hemos decidido usar la plantilla Unity(6000.0.26f1)LTS junto con AR Mobile para construir nuestro entorno virtual en Unity. También, para guardar y modificar nuestros propios modelos 3D, usaremos Vuforia, un programa gratuito que permite trabajar con Unity. Sin embargo, hemos encontrado un problema de compatibilidad entre la plantilla de Unity y Vuforia."
    },
    { 
        date: "2024-11-15", 
        text: "Hemos decidido cambiar a la plantilla Unity(2022.3.52f1)LTS junto con 3D(Built-in Render Pipeline) para construir nuestro entorno virtual en Unity. Para guardar los modelos de coches u otros modelos 3D, seguiremos usando Vuforia, que permite guardar e implementar modelos 3D en Unity."
    },
    { 
        date: "2024-11-22", 
        text: "Tras presentar nuestro primer prototipo, hemos decidido seguir usando Vuforia. En comparación con AR Engine, trabajar con Vuforia parece menos óptimo debido a que se precisa de QR o tarjetas para proyectar nuestro modelo. La decisión tomada ha sido debido a que nuestra aplicación está enfocada para un entorno más empresarial/comercial que una de enseñanza. Nuestro objetivo es usar la aplicación en complemento de un catálogo para enseñar los productos de la empresa, por ejemplo tener un catálogo con 4 tipos diferentes de ruedas para un vehículo en una imagen y con la aplicación poder verla encima de la imagen como un modelo 3D."
    },
    { 
        date: "2024-11-24", 
        text: "He encontrado 4 modelos de ruedas de coches para poder incorporarlos en nuestra base de datos de vuforia. En conjunto hemos añadido los modelos encontrados a nuestro proyecto de Unity."
    },
    { 
        date: "2024-11-25", 
        text: "Hemos estado trabajando en el powerpoint dedicado a nuestra presentación del viernes, día 29 para poder enseñar nuestro proyecto a los integrantes de Bertrandt. También hemos integrado los scripts de RotateObject.sh para que al visualizar los modelos giren sobre su propio eje y de forma pausada y también el script ScaleController.sh para aumentar o disminuir el tamaño del modelo seleccionado."
    },
    {
        date: "2024-12-06",
        text: "He acabado el script de ModelDragController.cs, que mueve un modelo mediante el uso de un solo dedo, siempre y cuando el modelo esté seleccionado previamente. Ahora implementaré el otro script para rotar el modelo."
    },
    {
        date: "2024-12-07",
        text: "He acabado el script para rotar el modelo, llamado ManualRotationController.cs. Este script rota el modelo previamente seleccionado sobre el propio eje Y usando un solo dedo. Para diferenciar en qué script tiene que activarse primero al primer movimiento del dedo, hemos decidido que al principio siempre se active primero el script de movimiento del modelo y solo se active el script de rotación si se mantiene pulsado el dedo 2 segundos."
    },
    {
        date: "2024-12-11",
        text: "Hemos tenido que ajustar el PowerPoint para la presentación del día 13 para Bertrandt. Hemos comprimido el contenido existente para ajustarlo al tiempo indicado, entre 3 y 5 minutos."
    }
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
