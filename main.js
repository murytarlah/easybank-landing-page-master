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