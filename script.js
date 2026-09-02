// ========================================
// CONFIGURACIÓN
// ========================================

// Fecha del concierto
const concertDate = new Date("October 21, 2026 20:00:00").getTime();


// ========================================
// COUNTDOWN
// ========================================

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = concertDate - now;


    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("concert-message").innerHTML =
            "The night we waited for has arrived. 💜";

        unlockGallery();

        return;
    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}, 1000);


// ========================================
// MENSAJES PARA ARMY
// ========================================

const messages = [

    "No matter how far the road takes us, there will always be a place where our memories meet.",

    "We found each other through music, and somehow became home.",

    "Seven voices. Millions of hearts. One unforgettable journey.",

    "ARMY is not just a fandom. It is a collection of memories.",

    "Some nights become memories. Some memories become forever.",

    "Wherever BTS goes, a little piece of ARMY goes with them.",

    "The lights may turn off, but this memory will stay.",

    "We were young, we were here, and we lived this moment together.",

    "Until the next chapter, let's keep walking together."
];


let currentMessage = 0;

const messageButton =
    document.getElementById("new-message");

const messageText =
    document.getElementById("army-message");


messageButton.addEventListener("click", function () {

    currentMessage++;

    if (currentMessage >= messages.length) {
        currentMessage = 0;
    }

    messageText.style.opacity = "0";

    setTimeout(function () {

        messageText.textContent =
            `"${messages[currentMessage]}"`;

        messageText.style.opacity = "1";

    }, 250);

});


// ========================================
// GALERÍA
// ========================================

function unlockGallery() {

    document
        .getElementById("before-concert")
        .classList.add("hidden");

    document
        .getElementById("after-concert")
        .classList.remove("hidden");

}


// ========================================
// SUBIR MEMORIA
// ========================================

const submitButton =
    document.getElementById("submit-memory");


submitButton.addEventListener("click", function () {

    const file =
        document.getElementById("photo").files[0];

    const name =
        document.getElementById("army-name").value;

    const memory =
        document.getElementById("memory").value;


    if (!file) {

        alert("Please choose a photo.");

        return;
    }


    if (!name) {

        alert("Please enter your ARMY name.");

        return;
    }


    const reader = new FileReader();


    reader.onload = function (event) {

        const gallery =
            document.getElementById("gallery");


        const memoryCard =
            document.createElement("div");

        memoryCard.className = "memory";


        memoryCard.innerHTML = `

            <img
                src="${event.target.result}"
                alt="ARMY concert memory"
            >

            <p>
                <strong>${escapeHTML(name)}</strong>
            </p>

            <p>
                ${escapeHTML(memory)}
            </p>

        `;


        gallery.prepend(memoryCard);


        document.getElementById("photo").value = "";

        document.getElementById("army-name").value = "";

        document.getElementById("memory").value = "";

    };


    reader.readAsDataURL(file);

});


// ========================================
// SEGURIDAD BÁSICA
// ========================================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


// ========================================
// PRUEBA AUTOMÁTICA DE GALERÍA
// ========================================

// Cuando llegue la fecha del concierto,
// la galería se desbloqueará automáticamente.

const currentTime = new Date().getTime();

if (currentTime >= concertDate) {

    unlockGallery();

}
