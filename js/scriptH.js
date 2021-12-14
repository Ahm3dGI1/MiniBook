/*nav*/
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle')
    });

}

navSlide();



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//شآبيب
let SHABs = document.querySelector("#SHAB");
SHABs.addEventListener('click', function () {
    localStorage.clear();
    localStorage.setItem('Book1', true);
    localStorage.setItem('Book2', false);
    localStorage.setItem('Book3', false);

});
//1919
let LOCs = document.querySelector("#Morad");
LOCs.addEventListener('click', function () {
    localStorage.clear();
    localStorage.setItem('Book1', false);
    localStorage.setItem('Book2', true);
    localStorage.setItem('Book3', false);
});
//لوكاندة بير الوطاويط
let BEERs = document.querySelector("#LOC");
BEERs.addEventListener('click', function () {
    localStorage.clear();
    localStorage.setItem('Book1', false);
    localStorage.setItem('Book2', false);
    localStorage.setItem('Book3', true);
});
