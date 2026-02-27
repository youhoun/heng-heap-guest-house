// LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1200);

});
const images = ["./photo1.jpg","./photo3.jpg","./photo5.jpg","./photo6.jpg"];
let currentSlide = 0;
const slider = document.getElementById("slider");

function nextSlide(){
    slider.style.opacity = 0;

    setTimeout(()=>{
        currentSlide = (currentSlide + 1) % images.length;
        slider.src = images[currentSlide];
        slider.style.opacity = 1;
    }, 500);
}

setInterval(nextSlide, 4000);
