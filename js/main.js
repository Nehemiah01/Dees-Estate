
let hamburger = document.querySelector('.hamburger-menu')
let links = document.querySelector('.links')
let getStarted = document.querySelector('.get-started')

console.log(hamburger)


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('cancel')
    links.classList.toggle('display')
    getStarted.classList.toggle('display')
})


document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});
