document.querySelectorAll(".mission-title").forEach(title=>{
  title.addEventListener("click",()=>{
    title.nextElementSibling.classList.toggle("show");
  });
});
