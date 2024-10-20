// Mobile menu toggle
console.log("Hello World"); // Add this to make sure your JS is connected

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbarBasicExample');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');  // Toggle the 'is-active' class to open/close the menu
});
