// JavaScript to insert the hamburger icon and handle click events
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav--container');

    // Create the hamburger icon element
    const hamburgerIcon = document.createElement('div');
    hamburgerIcon.id = 'hamburger-icon';
    hamburgerIcon.textContent = '☰'; // Unicode character for hamburger icon

    // Append the icon to the container
    hamburger.appendChild(hamburgerIcon);

    // Add click event listener to toggle between hamburger and X
    hamburgerIcon.addEventListener('click', function () {
        if (hamburgerIcon.textContent === '☰') {
            hamburgerIcon.textContent = '✖'; // Unicode character for 'X'
            navContainer.style.display = "flex";
        } else {
            hamburgerIcon.textContent = '☰';
            navContainer.style.display = "none";
        }
    });
});
