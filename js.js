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
    dotMenuBtn.addEventListener("click", () => dotDropdown.classList.toggle("show"));
  }

  /* TOGGLE SEKCJE */
  document.querySelectorAll(".toggle-title").forEach(title => {
    title.addEventListener("click", () => title.parentElement.classList.toggle("open"));
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

/* ===== SECRET KONAMI / LOGO / MOBILE ===== */
const secretCode = ["ArrowUp","ArrowUp","ArrowUp","ArrowLeft","ArrowRight"];
let input = [];
const overlay = document.getElementById("secretVideoOverlay");
const iframe = document.getElementById("secretIframe");
const videoURL = "https://www.youtube.com/embed/KSPxHniCtmw?autoplay=1";

// PC - klawiatura
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.style.display === "flex") { closeSecretVideo(); return; }
  input.push(e.key);
  if (input.length > secretCode.length) input.shift();
  if (input.join() === secretCode.join()) openSecretVideo();
});

// overlay functions
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
  if (e.target === overlay) closeSecretVideo();
});

// LOGO HINT / EASTER EGG
const logo = document.querySelector(".logo");
const logoHint = document.getElementById("logoHint");

if (logo && logoHint) {
  // hint po kliknięciu
  logo.addEventListener("click", () => {
    logoHint.style.display = "block";
    setTimeout(() => { logoHint.style.display = "none"; }, 4000);
  });

  // easter egg 3x kliknięcie
  let clickCount = 0;
  logo.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 3) { openSecretVideo(); clickCount = 0; }
    setTimeout(() => { clickCount = 0; }, 3000);
  });

  // long press (telefon)
  let pressTimer;
  logo.addEventListener("touchstart", () => {
    pressTimer = setTimeout(() => { openSecretVideo(); }, 1000);
  });
  logo.addEventListener("touchend", () => { clearTimeout(pressTimer); });
}
