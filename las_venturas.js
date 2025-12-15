/*zwykle zrobienie ze jak klikne misje to sie rozwija w danej postaci jaka jest misja */
document.querySelectorAll(".mission-title").forEach(title=>{
  title.addEventListener("click",()=>{
    title.nextElementSibling.classList.toggle("show");
  });
});
