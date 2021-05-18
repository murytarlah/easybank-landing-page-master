let navToggle   =   document.querySelector('#nav-toggle-btn');
let navContent  =   document.querySelector('#nav-content');
let headerBg    =   document.querySelector('.backdrop img')

navToggle.addEventListener('click', () => {
   
    if (navContent.classList.contains('hidden')) {
        navContent.classList.add('block');
        navContent.classList.remove('hidden');
        navToggle.firstElementChild.src = 'images/icon-close.svg';
    } else {
        navContent.classList.add('hidden');
        navContent.classList.remove('block');
        navToggle.firstElementChild.src = 'images/icon-hamburger.svg';
    }

});
var revealerpoint = 150;
window.addEventListener('scroll', reveal);
reveal();

function reveal() {
    var revealers = document.querySelectorAll('.card');
    for (var i = 0; i < revealers.length; i++) {
        var windowheight = window.innerHeight;
        console.log(windowheight)
        var revealertop = revealers[i].getBoundingClientRect().top;
        var revealerbottom = revealers[i].getBoundingClientRect().bottom;
        if (revealertop < windowheight - revealerpoint) {
            revealers[i].classList.add('active')
        } else {
            revealers[i].classList.remove('active');
        };
        if (revealerbottom < 0 + revealerpoint) {
            revealers[i].classList.remove('active');
        }
    } 
};