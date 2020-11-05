//beginning slideshow on first slide and displaying it
var slideIndex = 1;
showSlides(slideIndex);

//function for updating slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//function for displaying slides, and allowing us to loop around from 1 back to 4, and from 4 to 1
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length } for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
    slides[slideIndex - 1].style.display = "block";
}

function visibleFunction() {
    console.log("Inside visibility function");
    document.getElementsByClassName("personal-number")[0].style.display = "inline-block";

}