// Fecha del concierto: 21 de Octubre de 2026, 19:00 KST
// (Mes 9 representa Octubre, ya que los meses en JavaScript van de 0 a 11)
const concertDate = new Date(2026, 9, 21, 19, 0, 0).getTime();

const updateTimer = () => {
  const now = new Date().getTime();
  const difference = concertDate - now;
  const sectionTitle = document.querySelector(".sub-title");
  const countdownSection = document.querySelector(".countdown-section");

  if (difference > 0) {
    // ANTES DEL CONCIERTO: Cuenta regresiva
    sectionTitle.innerText = "WORLD TOUR REMINDER";
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  } else {
    // DESPUÉS DEL CONCIERTO: Días transcurridos
    const timePassed = Math.abs(difference);
    const daysPassed = Math.floor(timePassed / (1000 * 60 * 60 * 24));

    sectionTitle.innerText = "MEMORIES OF THE TOUR";

    // Reemplaza el contador por el mensaje
    countdownSection.innerHTML = `
      <div class="timer-box" style="width: 100%; border-color: var(--gold-accent); padding: 20px;">
        <span style="font-size: 1.4rem; color: var(--paper-cream); font-weight: normal;">
          Hace <strong style="color: var(--gold-accent); font-size: 2.2rem;">${daysPassed}</strong> días de lo que vivimos
        </span>
      </div>
    `;

    // Cambia el texto del botón al finalizar
    const btn = document.querySelector(".btn-reminder");
    if (btn) {
      btn.innerText = "Revivir momentos";
      btn.onclick = () => alert("¡Gracias por compartir este recuerdo con BTS!");
    }
  }
};

setInterval(updateTimer, 1000);
updateTimer();
