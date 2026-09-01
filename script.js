```javascript
/* =========================================================
   ARIRANG — MEMORY EXPERIENCE
   JAVASCRIPT
========================================================= */


/* =========================================================
   CONCERTDATE
========================================================= */

/*
   21 OCTOBER 2026
   8:00 PM

   Esta fecha controla el cambio de:

   COUNTDOWN

   a

   MEMORY MODE
*/

const concertDate =
    new Date("October 21, 2026 20:00:00").getTime();



/* =========================================================
   PHOTOS
========================================================= */

const photos = [

    "images/concert-01.jpg",

    "images/concert-02.jpg",

    "images/concert-03.jpg",

    "images/concert-04.jpg",

    "images/concert-05.jpg",

    "images/concert-06.jpg"

];


let currentPhoto = 0;



/* =========================================================
   ENTER EXPERIENCE
========================================================= */

function enterExperience() {

    const intro =
        document.getElementById("intro");

    const mainExperience =
        document.getElementById("mainExperience");


    intro.style.opacity = "0";

    intro.style.transition =
        "opacity 1s ease";


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
   COUNTDOWN
========================================================= */

function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        concertDate - now;


    const beforeConcert =
        document.getElementById(
            "beforeConcert"
        );


    const afterConcert =
        document.getElementById(
            "afterConcert"
        );


    const memoryGallery =
        document.getElementById(
            "memoryGallery"
        );


    /*
       BEFORE CONCERT
    */

    if (difference > 0) {

        beforeConcert.classList.remove(
            "hidden"
        );

        afterConcert.classList.add(
            "hidden"
        );

        memoryGallery.classList.add(
            "hidden"
        );


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


        document.getElementById(
            "days"
        ).textContent =
            String(days).padStart(2, "0");


        document.getElementById(
            "hours"
        ).textContent =
            String(hours).padStart(2, "0");


        document.getElementById(
            "minutes"
        ).textContent =
            String(minutes).padStart(2, "0");


        document.getElementById(
            "seconds"
        ).textContent =
            String(seconds).padStart(2, "0");

    }


    /*
       AFTER CONCERT
    */

    else {

        beforeConcert.classList.add(
            "hidden"
        );

        afterConcert.classList.remove(
            "hidden"
        );

        memoryGallery.classList.remove(
            "hidden"
        );


        updateMemory();

        updateSecretMessage();

    }

}



/* =========================================================
   MEMORY COUNTER
========================================================= */

function updateMemory() {

  const concertDate = 
  new Date("August 20, 2026 
  20:00:00").getTime();


    const now =
        new Date();


    const difference =
        now.getTime() -
        concert.getTime();


    const daysSinceConcert =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const memoryTitle =
        document.getElementById(
            "memoryTitle"
        );


    /*
       SAME DAY
    */

    if (daysSinceConcert <= 0) {

        memoryTitle.innerHTML =
            "Hoy vivimos<br>esto.";

        return;

    }


    /*
       ONE DAY
    */

    if (daysSinceConcert === 1) {

        memoryTitle.innerHTML =
            "Hace 1 día<br>vivimos esto.";

        return;

    }


    /*
       LESS THAN ONE MONTH
    */

    if (daysSinceConcert < 30) {

        memoryTitle.innerHTML =
            `Hace ${daysSinceConcert} días<br>vivimos esto.`;

        return;

    }


    /*
       MONTHS
    */

    const monthsSinceConcert =
        Math.floor(
            daysSinceConcert / 30
        );


    if (monthsSinceConcert === 1) {

        memoryTitle.innerHTML =
            "Hace 1 mes<br>vivimos esto.";

        return;

    }


    if (monthsSinceConcert < 12) {

        memoryTitle.innerHTML =
            `Hace ${monthsSinceConcert} meses<br>vivimos esto.`;

        return;

    }


    /*
       YEARS
    */

    const yearsSinceConcert =
        Math.floor(
            monthsSinceConcert / 12
        );


    if (yearsSinceConcert === 1) {

        memoryTitle.innerHTML =
            "Hace 1 año<br>vivimos esto.";

        return;

    }


    memoryTitle.innerHTML =
        `Hace ${yearsSinceConcert} años<br>vivimos esto.`;

}



/* =========================================================
   SECRET MESSAGE
========================================================= */

function updateSecretMessage() {

    const secretTitle =
        document.getElementById(
            "secretTitle"
        );


    const secretButton =
        document.getElementById(
            "secretButton"
        );


    secretTitle.innerHTML =
        "There is something<br><em>you'll never forget.</em>";


    secretButton.textContent =
        "OPEN THE MEMORY";


    const modalTitle =
        document.getElementById(
            "modalTitle"
        );


    const modalText =
        document.getElementById(
            "modalText"
        );


    modalTitle.textContent =
        "You were there.";


    modalText.textContent =
        "Y ahora este momento forma parte de tu historia. " +
        "Una noche, una ciudad, siete voces y un recuerdo " +
        "que podrás llevar contigo para siempre.";

}



/* =========================================================
   OPEN SECRET MESSAGE
========================================================= */

function openMessage() {

    const modal =
        document.getElementById(
            "messageModal"
        );


    modal.classList.remove(
        "hidden"
    );

}


function closeMessage() {

    const modal =
        document.getElementById(
            "messageModal"
        );


    modal.classList.add(
        "hidden"
    );

}



/* =========================================================
   PHOTO VIEWER
========================================================= */

function openPhoto(index) {

    currentPhoto = index;


    const viewer =
        document.getElementById(
            "photoViewer"
        );


    viewer.classList.remove(
        "hidden"
    );


    updateViewer();


    document.body.style.overflow =
        "hidden";

}



function closePhoto() {

    const viewer =
        document.getElementById(
            "photoViewer"
        );


    viewer.classList.add(
        "hidden"
    );


    document.body.style.overflow =
        "";

}



function updateViewer() {

    const image =
        document.getElementById(
            "viewerImage"
        );


    const number =
        document.getElementById(
            "viewerNumber"
        );


    image.src =
        photos[currentPhoto];


    number.textContent =
        String(currentPhoto + 1)
        .padStart(2, "0");

}



/* =========================================================
   NEXT PHOTO
========================================================= */

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    updateViewer();

}



/* =========================================================
   PREVIOUS PHOTO
========================================================= */

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto =
            photos.length - 1;

    }

    updateViewer();

}



/* =========================================================
   KEYBOARD PHOTO NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {


        if (event.key === "Escape") {

            closePhoto();

            closeMessage();

        }


        if (event.key === "ArrowRight") {

            const viewer =
                document.getElementById(
                    "photoViewer"
                );


            if (
                !viewer.classList.contains(
                    "hidden"
                )
            ) {

                nextPhoto();

            }

        }


        if (event.key === "ArrowLeft") {

            const viewer =
                document.getElementById(
                    "photoViewer"
                );


            if (
                !viewer.classList.contains(
                    "hidden"
                )
            ) {

                previousPhoto();

            }

        }

    }
);



/* =========================================================
   CLICK OUTSIDE PHOTO
========================================================= */

document.getElementById(
    "photoViewer"
).addEventListener(
    "click",
    function(event) {

        if (
            event.target === this
        ) {

            closePhoto();

        }

    }
);



/* =========================================================
   CLICK OUTSIDE MESSAGE
========================================================= */

document.getElementById(
    "messageModal"
).addEventListener(
    "click",
    function(event) {

        if (
            event.target === this
        ) {

            closeMessage();

        }

    }
);



/* =========================================================
   START
========================================================= */

updateCountdown();


/*
   Actualizar cada segundo
*/

setInterval(
    updateCountdown,
    1000
);
```
