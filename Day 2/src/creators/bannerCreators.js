import Typed from 'typed.js';


const heroName = document.querySelector('.hero-content h1')

export const bindBannerPart = (fullname, professions) => {
    heroName.textContent = fullname

    const typed = new Typed('.typed', {
        strings: professions,
        loop: true,
        typeSpeed: 150
    })
}