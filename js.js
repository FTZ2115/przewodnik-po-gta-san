/*wczytuje kod js na samym koncu az sie strona zaladuje */
document.addEventListener("DOMContentLoaded", () => {

  /* DARK / LIGHT MODE */
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
    });
  }

  /* MENU */
  const dotMenuBtn = document.getElementById("dotMenuBtn");
  const dotDropdown = document.getElementById("dotDropdown");

  if (dotMenuBtn && dotDropdown) {
    dotMenuBtn.addEventListener("click", () => {
      dotDropdown.classList.toggle("show");
    });
  }

  /* TOGGLE SEKCJE (wszystko co ma toggle-title dostaje opcje rozwijania i chowania czyli(faq, mapa i linki))*/ 
  document.querySelectorAll(".toggle-title").forEach(title => {
    title.addEventListener("click", () => {
      title.parentElement.classList.toggle("open");
    });
  });

  /* LICZNIK */
  const counter = document.getElementById("counter");
  if (counter) {
    let visits = localStorage.getItem("visits");
    visits = visits ? Number(visits) + 1 : 1;
    localStorage.setItem("visits", visits);
    counter.textContent = visits;
  }

});

/* ciekawostka */
/* ===== SECRET KONAMI STYLE ===== */
const secretCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];

let input = [];
const overlay = document.getElementById("secretVideoOverlay");
const iframe = document.getElementById("secretIframe");
const videoURL = "https://www.youtube.com/embed/KSPxHniCtmw?autoplay=1";

document.addEventListener("keydown", (e) => {

  // ESC zamyka film
  if (e.key === "Escape" && overlay.style.display === "flex") {
    closeSecretVideo();
    return;
  }

  input.push(e.key);

  if (input.length > secretCode.length) {
    input.shift();
  }

  if (input.join() === secretCode.join()) {
    openSecretVideo();
  }
});

function openSecretVideo() {
  iframe.src = videoURL;
  overlay.style.display = "flex";
}

function closeSecretVideo() {
  overlay.style.display = "none";
  iframe.src = "";
  input = [];
}

// klik w tło
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeSecretVideo();
  }
});

/* ===== LOGO CIEKAWOSTKA ===== */
const logo = document.querySelector(".header-left");
const logoHint = document.getElementById("logoHint");

if (logo && logoHint) {
  logo.addEventListener("click", () => {
    logoHint.style.display = "block";

    setTimeout(() => {
      logoHint.style.display = "none";
    }, 4000);
  });
}

/* ===== MOBILE GESTURE SECRET ===== */

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].screenX;
  const endY = e.changedTouches[0].screenY;

  const diffX = endX - touchStartX;
  const diffY = endY - touchStartY;

  const absX = Math.abs(diffX);
  const absY = Math.abs(diffY);

  let direction = null;

  if (Math.max(absX, absY) > 50) { // minimalny ruch
    if (absY > absX && diffY < 0) direction = "ArrowUp";
    else if (absX > absY && diffX < 0) direction = "ArrowLeft";
    else if (absX > absY && diffX > 0) direction = "ArrowRight";
  }

  if (direction) {
    input.push(direction);

    if (input.length > secretCode.length) {
      input.shift();
    }

    if (input.join() === secretCode.join()) {
      openSecretVideo();
    }
  }
});

