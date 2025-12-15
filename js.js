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
