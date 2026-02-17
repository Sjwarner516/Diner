const hamburgerElement = document.getElementById("myButton");
const navElement = document.querySelector(".menuLinks");  

hamburgerElement.addEventListener('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');
});
