 const btn = document.querySelector(".read");
 
 btn.addEventListener("click",()=> {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("moreText");

  const isHidden = window.getComputedStyle(moreText).display === "none"

  if (isHidden) {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
});

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});
//navbar
const bar = document.querySelector('.bar');
const options = document.querySelector('.options');

bar.addEventListener('click', () => {
  options.classList.toggle('show');
});
