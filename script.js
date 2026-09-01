/* =========================================================
   ARIRANG — BTS WORLD TOUR
   JAVASCRIPT
========================================================= */


/* =========================================================
   INTRO
========================================================= */

function enterExperience() {

    const intro = document.getElementById("intro");

    const mainExperience =
        document.getElementById("mainExperience");


    intro.style.opacity = "0";

    intro.style.transition = "opacity 1s ease";


    setTimeout(() => {

        intro.style.display = "none";

        mainExperience.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1000);

}



/* =========================================================
   CONCERT DATE
========================================================= */

/*
   IMPORTANTE:

   Esta es la fecha y hora que determina
   cuándo termina el countdown.

   21 de octubre de 2026
   8:00 PM
*/

const concertDate =
    new Date("October 21, 2026 20:00:00").getTime();



/* =========================================================
   COUNTDOWN
========================================================= */

function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        concertDate - now;


    const beforeConcert =
        document.getElementById("beforeConcert");

    const afterConcert =
        document.getElementById("afterConcert");


    /*
       SI EL CONCIERTO TODAVÍA NO HA OCURRIDO
    */

    if (difference > 0) {

        beforeConcert.classList.remove("hidden");

        afterConcert.classList.add("hidden");


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (difference %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (difference %
                    (1000 * 60)) /
                1000
            );


        document.getElementById("days")
            .textContent =
            String(days).padStart(2, "0");


        document.getElementById("hours")
            .textContent =
            String(hours).padStart(2, "0");


        document.getElementById("minutes")
            .textContent =
            String(minutes).padStart(2, "0");


        document.getElementById("seconds")
            .textContent =
            String(seconds).padStart(2, "0");

    }


    /*
       SI EL CONCIERTO YA PASÓ
    */

    else {

        beforeConcert.classList.add("hidden");

        afterConcert.classList.remove("hidden");


        updateMemory();

    }

}



/* =========================================================
   MEMORY COUNTER
========================================================= */

function updateMemory() {

    const concert =
        new Date("October 21, 2026 20:00:00");


    const now =
        new Date();


    /*
       Diferencia en milisegundos
    */

    const difference =
        now.getTime() -
        concert.getTime();


    /*
       Convertimos a días
    */

    const daysSinceConcert =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const memoryTitle =
        document.getElementById("memoryTitle");


    /*
       EL MISMO DÍA
    */

    if (daysSinceConcert <= 0) {

        memoryTitle.innerHTML =
            "Hoy vivimos<br>esto.";

        return;

    }


    /*
       UN DÍA
    */

    if (daysSinceConcert === 1) {

        memoryTitle.innerHTML =
            "Hace 1 día<br>vivimos esto.";

        return;

    }


    /*
       MENOS DE UN MES
    */

    if (daysSinceConcert < 30) {

        memoryTitle.innerHTML =
            `Hace ${daysSinceConcert} días<br>vivimos esto.`;

        return;

    }


    /*
       CALCULAMOS MESES APROXIMADOS
    */

    const monthsSinceConcert =
        Math.floor(
            daysSinceConcert / 30
        );


    /*
       UN MES
    */

    if (monthsSinceConcert === 1) {

        memoryTitle.innerHTML =
            "Hace 1 mes<br>vivimos esto.";

        return;

    }


    /*
       MENOS DE UN AÑO
    */

    if (monthsSinceConcert < 12) {

        memoryTitle.innerHTML =
            `Hace ${monthsSinceConcert} meses<br>vivimos esto.`;

        return;

    }


    /*
       CALCULAMOS AÑOS
    */

    const yearsSinceConcert =
        Math.floor(
            monthsSinceConcert / 12
        );


    /*
       UN AÑO
    */

    if (yearsSinceConcert === 1) {

        memoryTitle.innerHTML =
            "Hace 1 año<br>vivimos esto.";

        return;

    }


    /*
       VARIOS AÑOS
    */

    memoryTitle.innerHTML =
        `Hace ${yearsSinceConcert} años<br>vivimos esto.`;

}



/* =========================================================
   SECRET MESSAGE
========================================================= */

function openMessage() {

    const modal =
        document.getElementById("messageModal");


    modal.classList.remove("hidden");

}


function closeMessage() {

    const modal =
        document.getElementById("messageModal");


    modal.classList.add("hidden");

}



/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("messageModal");


        if (event.target === modal) {

            closeMessage();

        }

    }
);



/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeMessage();

        }

    }
);



/* =========================================================
   START COUNTDOWN
========================================================= */

updateCountdown();


/*
   Actualiza cada segundo
*/

setInterval(
    updateCountdown,
    1000
);
