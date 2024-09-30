function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20? header.classList.add('active') : header.classList.remove('active');
}
window.addEventListener('scroll', scrollHeader);

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        
        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

// Structures scroll
const pages = document.querySelectorAll('.page');
const structures = document.querySelector('.structures');

function structuresActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop - 100;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight) {
            document.querySelector('.structures_tabs a[href *=' + sectionId + ']').classList.add('current');
        } else {
            document.querySelector('.structures_tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll', structuresActive);

// About us swiper 
let swiper = new Swiper(".aboutus_container", {
    effects: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPreView: 2,
        }
    }
});