// Defina a data do evento
var eventDate = new Date("Oct 05, 2024 09:00:00").getTime();

// Atualize a contagem regressiva a cada 1 segundo
var countdownFunction = setInterval(function () {
   // Obtenha a data e hora atuais
   var now = new Date().getTime();

   // Calcule a distância entre agora e a data do evento
   var distance = eventDate - now;

   // Cálculo de tempo para dias, horas, minutos e segundos
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Exibe os resultados nos elementos com os respectivos IDs
   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

   // Se a contagem regressiva terminar, exiba uma mensagem
   if (distance < 0) {
      clearInterval(countdownFunction);
      document.querySelector(".timer").innerHTML = "O casamento já começou!";
   }
}, 1000);


let currentIndex = 0;

function moveCarousel(step) {
   const items = document.querySelectorAll('.carousel-item');
   const totalItems = items.length;
   currentIndex += step;

   if (currentIndex >= totalItems) {
      currentIndex = 0;
   } else if (currentIndex < 0) {
      currentIndex = totalItems - 1;
   }

   const offset = -currentIndex * 100;
   document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}


function copiarTexto() {
   /*
   // Obtém o elemento que contém o texto
   var texto = document.getElementById("texto").innerText;

   // Cria um elemento temporário para selecionar o texto
   var tempInput = document.createElement("input");
   document.body.appendChild(tempInput);
   tempInput.value = texto;
   tempInput.select();
   document.execCommand("copy");
   document.body.removeChild(tempInput);
   */

   // Mensagem opcional para o usuário
   alert("Pix DESATIVADO!");
}