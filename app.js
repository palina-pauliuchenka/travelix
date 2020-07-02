const selectElement = component => {
    return document.getElementById(component);
};

//Selectors
const header = selectElement('header');
const hamburgerMenu = selectElement('hamburger-menu');

window.addEventListener('scroll', () => {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active',  windowPosition);
});

hamburgerMenu.addEventListener('click', () => {
    header.classList.toggle('show-menu');
});