// Slider JavaScript
var slideIndex = 0;

function nextSlide(n) {

}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Projects");
    if (n > slides.length) {
        slideIndex = -1;
    }
}