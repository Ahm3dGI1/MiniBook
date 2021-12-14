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
//شآبيب
let SHAB = document.querySelector("#SHAB");
SHAB.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Book1', true);
    localStorage.setItem('Book2', false);
    localStorage.setItem('Book3', false);
    window.document.location = './book-summary.html';
    
});
//1919
let LOC = document.querySelector("#Morad");
LOC.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Book1', false);
    localStorage.setItem('Book2', true);
    localStorage.setItem('Book3', false);
    window.document.location = './book-summary.html';
});
//لوكاندة بير الوطاويط
let BEER = document.querySelector("#LOC");
BEER.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('Book1', false);
    localStorage.setItem('Book2', false);
    localStorage.setItem('Book3', true);
    window.document.location = './book-summary.html';
});

navSlide();