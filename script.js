const preguntas = [
    {
        Number: 1,
        pregunta: "¿Dónde originaron los juegos olímpicos?",
        opciones: ["Grecia", "Francia", "China", "Estados Unidos"],
        respuesta: "Grecia"
    },
    {
        Number: 2,
        pregunta: "¿Cuál es el deporte más popular en el mundo?",
        opciones: ["Fútbol", "Baloncesto", "Beisbol", "Tenis"],
        respuesta: "Fútbol"
    },
    {
        Number: 3,
        pregunta: "¿Cuál es el océano más grande?",
        opciones: ["Oceano Atlántico", "Oceano Pacífico", "Océano Índico", "Oceano Antártico"],
        respuesta: "Oceano Pacífico"
    },
    {
        Number: 4,
        pregunta: "¿En qué se especializa la cartografía?",
        opciones: ["Estudia los planeta", "Estudia las rocas", "Estudia las cartas", "Estudia los mapas"],
        respuesta: "Estudia los mapas"
    },
    {
        Number: 5,
        pregunta: "¿En qué año comenzó la II Guerra Mundial?",
        opciones: ["1089", "1939", "1036", "1942"],
        respuesta: "1939"
    },
    {
        Number: 6,
        pregunta: "¿Qué país tiene forma de bota?",
        opciones: ["Noruega","Roma", "España", "Italia"],
        respuesta: "Italia"
    },
    {
        Number: 7,
        pregunta: "¿Cuál es la moneda del Reino Unido?",
        opciones: ["Euro", "Libra", "Dolar", "Sol"],
        respuesta: "Libra"
    },
    {
        Number: 8,
        pregunta: "¿Cuál es la ciudad de los rascacielos?",
        opciones: ["Sao Paulo", "Dubai", "New York", "Shangai"],
        respuesta: "New York"
    },
    {
        Number: 9,
        pregunta: "¿En qué país se encuentra el famoso monumento Taj Mahal?",
        opciones: ["Thailandia", "Singapur", "India", "China"],
        respuesta: "India"
    },
    {
        Number: 10,
        pregunta: "¿De qué país es originario el café?",
        opciones: ["Etiopia", "Brasil", "Vietnam", "Colombia"],
        respuesta: "Etiopia"
    }
        


];

//Selecting elements

const startButton = document.querySelector(".Login .submit");
const intrucciones = document.getElementById("intrucciones");
const exitButton = document.querySelector(".botones .quit");
const restartButton = document.querySelector(".botones .restart");
const nextButton = document.querySelector(".botones .continue");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".scorebox");
const option_list = document.querySelector(".options");





let preguntaActual = 0;
const preguntaTexto = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const mensaje = document.getElementById("mensaje");

let score = 0;

let timeleft = 15;
let timer;
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");





function cargarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaTexto.textContent = pregunta.pregunta;
    opcionesDiv.innerHTML = "";
    mensaje.textContent = "";

    pregunta.opciones.forEach((opcion) => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.onclick = () => verificarRespuesta(button, opcion, pregunta.respuesta);
        opcionesDiv.appendChild(button);
    });
}

function verificarRespuesta(boton, seleccion, respuestaCorrecta) {
    if (seleccion === respuestaCorrecta) {
        boton.classList.add("correcto");
        mensaje.textContent = "✅ ¡Respuesta correcta!";
        mensaje.style.color = "green";
    } else {
        boton.classList.add("incorrecto");
        mensaje.textContent = "❌ Respuesta incorrecta. Inténtalo de nuevo.";
        mensaje.style.color = "red";
    }
}

function puntaje(itsCorrect) {
    score++;
    if (itsCorrect) {
        score += 30;
    }
}


    
    
cargarPregunta();
