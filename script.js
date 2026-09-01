document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       CONCERT DATE
       Buenos Aires — October 21, 2026
    ========================================= */

    const concertDate = new Date(
        "2026-10-21T20:00:00-03:00"
    ).getTime();

    /* =========================================
       ELEMENTS
    ========================================= */

    const intro = document.getElementById("intro");
    const mainExperience = document.getElementById("mainExperience");
    const enterButton = document.getElementById("enterButton");

    const beforeConcert = document.getElementById("beforeConcert");
    const afterConcert = document.getElementById("afterConcert");
    const memoryGallery = document.getElementById("memoryGallery");

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    const memoryTitle = document.getElementById("memoryTitle");

    const secretButton = document.getElementById("secretButton");
    const secretTitle = document.getElementById("secretTitle");

    const messageModal = document.getElementById("messageModal");
    const modalClose = document.getElementById("modalClose");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    const photoViewer = document.getElementById("photoViewer");
    const viewerImage = document.getElementById("viewerImage");
    const viewerNumber = document.getElementById("viewerNumber");
    const viewerClose = document.getElementById("viewerClose");
    const viewerPrev = document.getElementById("viewerPrev");
    const viewerNext = document.getElementById("viewerNext");

    /* =========================================
       PHOTOS
    ========================================= */

    const photos = [
        "images/concert-01.jpg",
        "images/concert-02.jpg",
        "images/concert-03.jpg",
        "images/concert-04.jpg",
        "images/concert-05.jpg",
        "images/concert-06.jpg"
    ];

    let currentPhoto = 0;

    /* =========================================
       ENTER THE JOURNEY
    ========================================= */

    enterButton.addEventListener("click", () => {

        intro.classList.add("hidden");
        mainExperience.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    /* =========================================
       COUNTDOWN
    ========================================= */

    function updateCountdown() {

        const now = Date.now();
        const difference = concertDate - now;

        /* BEFORE CONCERT */

        if (difference > 0) {

            beforeConcert.classList.remove("hidden");
            afterConcert.classList.add("hidden");
            memoryGallery.classList.add("hidden");

            const days = Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            );

            const minutes = Math.floor(
                (difference / (1000 * 60)) % 60
            );

            const seconds = Math.floor(
                (difference / 1000) % 60
            );

            daysElement.textContent = String(days).padStart(2, "0");
            hoursElement.textContent = String(hours).padStart(2, "0");
            minutesElement.textContent = String(minutes).padStart(2, "0");
            secondsElement.textContent = String(seconds).padStart(2, "0");

        }

        /* AFTER CONCERT */

        else {

            beforeConcert.classList.add("hidden");
            afterConcert.classList.remove("hidden");
            memoryGallery.classList.remove("hidden");

            updateMemoryMode();
            updateSecretMode();

        }

    }

    /* =========================================
       MEMORY MODE
    ========================================= */

    function updateMemoryMode() {

        const now = new Date();
        const concert = new Date(
            "2026-10-21T20:00:00-03:00"
        );

        const difference = now.getTime() - concert.getTime();

        const daysPassed = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        if (daysPassed <= 0) {

            memoryTitle.innerHTML =
                "Hoy vivimos<br>esto.";

            return;
        }

        if (daysPassed === 1) {

            memoryTitle.innerHTML =
                "Hace 1 día<br>vivimos esto.";

            return;
        }

        if (daysPassed < 30) {

            memoryTitle.innerHTML =
                `Hace ${daysPassed} días<br>vivimos esto.`;

            return;
        }

        const monthsPassed = Math.floor(
            daysPassed / 30
        );

        if (monthsPassed === 1) {

            memoryTitle.innerHTML =
                "Hace 1 mes<br>vivimos esto.";

            return;
        }

        if (monthsPassed < 12) {

            memoryTitle.innerHTML =
                `Hace ${monthsPassed} meses<br>vivimos esto.`;

            return;
        }

        const yearsPassed = Math.floor(
            monthsPassed / 12
        );

        if (yearsPassed === 1) {

            memoryTitle.innerHTML =
                "Hace 1 año<br>vivimos esto.";

            return;
        }

        memoryTitle.innerHTML =
            `Hace ${yearsPassed} años<br>vivimos esto.`;

    }

    /* =========================================
       SECRET AFTER CONCERT
    ========================================= */

    function updateSecretMode() {

        secretTitle.innerHTML =
            "There is something<br><em>you'll never forget.</em>";

        secretButton.textContent =
            "OPEN THE MEMORY";

        modalTitle.textContent =
            "You were there.";

        modalText.textContent =
            "Y ahora este momento forma parte de tu historia. " +
            "Una noche, una ciudad, siete voces y un recuerdo " +
            "que podrás llevar contigo para siempre.";

    }

    /* =========================================
       SECRET MODAL
    ========================================= */

    secretButton.addEventListener("click", () => {

        messageModal.classList.remove("hidden");

    });

    function closeModal() {

        messageModal.classList.add("hidden");

    }

    modalClose.addEventListener("click", closeModal);

    messageModal.addEventListener("click", (event) => {

        if (event.target === messageModal) {
            closeModal();
        }

    });

    /* =========================================
       PHOTO VIEWER
    ========================================= */

    function openPhoto(index) {

        currentPhoto = index;

        updateViewer();

        photoViewer.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    }

    function updateViewer() {

        viewerImage.src = photos[currentPhoto];

        viewerNumber.textContent =
            `${String(currentPhoto + 1).padStart(2, "0")} / 06`;

    }

    function closePhoto() {

        photoViewer.classList.add("hidden");

        document.body.style.overflow = "";

    }

    function nextPhoto() {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        updateViewer();

    }

    function previousPhoto() {

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }

        updateViewer();

    }

    document.querySelectorAll(".gallery-item").forEach((item) => {

        item.addEventListener("click", () => {

            const index = Number(
                item.dataset.photo
            );

            openPhoto(index);

        });

    });

    viewerClose.addEventListener(
        "click",
        closePhoto
    );

    viewerNext.addEventListener(
        "click",
        nextPhoto
    );

    viewerPrev.addEventListener(
        "click",
        previousPhoto
    );

    photoViewer.addEventListener("click", (event) => {

        if (event.target === photoViewer) {
            closePhoto();
        }

    });

    /* =========================================
       KEYBOARD CONTROLS
    ========================================= */

    document.addEventListener("keydown", (event) => {

        if (
            photoViewer.classList.contains("hidden") === false
        ) {

            if (event.key === "ArrowRight") {
                nextPhoto();
            }

            if (event.key === "ArrowLeft") {
                previousPhoto();
            }

            if (event.key === "Escape") {
                closePhoto();
            }

        }

        if (
            messageModal.classList.contains("hidden") === false &&
            event.key === "Escape"
        ) {

            closeModal();

        }

    });

    /* =========================================
       START
    ========================================= */

    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );

});
