// JavaScript to insert the hamburger icon and handle click events
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav--container');
    const body = document.getElementById('body')
    const xIcon = document.getElementById('x-icon')

    // Create the hamburger icon element
    const hamburgerIcon = document.createElement('div');
    hamburgerIcon.id = 'hamburger-icon';
    hamburgerIcon.textContent = '☰'; // Unicode character for hamburger icon

    // Append the icon to the container
    hamburger.appendChild(hamburgerIcon);


    hamburgerIcon.addEventListener('click', function () {
        navContainer.style.display = "flex";
        body.style.backgroundColor = "rgb(82, 81, 81)";


    });
    xIcon.addEventListener("click", function () {
        navContainer.style.display = "none";
        body.style.backgroundColor = "white";
    })
});
