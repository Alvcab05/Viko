// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Dame de tu vida y de tu tiempo", time: 18 },

  { text: "Suficientes para ver\nDentro de tus ojos el momento", time: 23.5 },

  { text: "Que me oblige a renacer\nDame vida y dame aliento", time: 32.5},

  { text: "Que yo ya perdi el conocimiento\nSolo quedate un momento", time: 41 },

  { text: "Hasta evaporarnos en el viento", time: 48.7 },

  { text: "No hay motivos\nPara decirnos adios tan pronto", time: 52.5 },

  { text: "Sigo vivo\nCremelo mi amor no soy tan tonto", time: 62 },

  { text: "Si tu quisieras esta noche ir a bailar", time: 70 },

  { text: "Un cha cha cha\nYo te puedo enamorar", time: 77 },


  { text: "Dame de tu vida y de tu tiempo", time: 92 },

  { text: "Que te quiero conocer\nDejame sentir el movimiento", time: 98 },

  { text: "De tu cuerpo al florecer\nDame vida y dame aliento", time: 106.5 },

  { text: "Que yo ya perdi el conocimiento\nSolo quedate un momento", time: 115 },
  
  { text: "Hasta evaporarnos en el tiempo", time: 122.7 },
  
  { text: "No hay motivos\nPara decirnos adios tan pronto", time: 126.5},
  
  { text: "Sigo vivo\nCremelo mi amor no soy tan tonto", time: 136 },
  
  { text: "Si tu quisieras esta noche ir a bailar", time: 144 },

  { text: "Un cha cha cha\nYo te puedo enamorar", time: 151 },


  { text: "No hay motivos\nPara decirnos adios tan pronto", time: 173.5},
  
  { text: "Sigo vivo\nCremelo mi amor no soy tan tonto", time: 182 },
  
  { text: "Si tu quisieras esta noche ir a bailar", time: 190 },

  { text: "Un cha cha cha\nYo te puedo enamorar", time: 196 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 213000);