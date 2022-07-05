const inputs = document.querySelectorAll(".campo-input"); 
const toggle_btn = document.querySelectorAll(".toggle"); 
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span"); 
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});


function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".container-texto");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

function msg() {
  $("#mensagem").addClass('ver');
  setTimeout(function () { $("#mensagem").removeClass('ver'); }, 2000);
};
function msg1() {
  $("#mensagem1").addClass('ver');
  setTimeout(function () { $("#mensagem1").removeClass('ver'); }, 2000);
};

$('form submit').click(function(event) {
  event.preventDefault();
});






