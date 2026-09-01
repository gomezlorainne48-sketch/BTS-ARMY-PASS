// ==============================
// COUNTDOWN
// ==============================

const concertDate =
    new Date("October 21, 2026 20:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        concertDate - now;

    if (difference <= 0) {

        document.getElementById("days").innerText = "00";

        document.getElementById("hours").innerText = "00";

        document.getElementById("minutes").innerText = "00";

        document.getElementById("seconds").innerText = "00";

        return;
    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}

setInterval(updateCountdown, 1000);

updateCountdown();

// ==============================
// MENSAJE SORPRESA
// ==============================

function openMessage() {

    document.getElementById("message").style.display =
        "flex";

}

function closeMessage() {

    document.getElementById("message").style.display =
        "none";

}
