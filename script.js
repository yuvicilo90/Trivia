const preguntas = [
    {
        pregunta: "Aquí va la pregunta",
        opciones: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
        respuesta: 0 // Índice de la respuesta correcta
    }
];

let preguntaActual = 0;
const preguntaTexto = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");

function cargarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaTexto.textContent = pregunta.pregunta;
    opcionesDiv.innerHTML = "";
    pregunta.opciones.forEach((opcion, index) => {
        const button = document.createElement("button");
        button.textContent = opcion;
        opcionesDiv.appendChild(button);
    });
}

cargarPregunta();
