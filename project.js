// Select the button by its ID
const colorbutton = document.getElementById('colorbutton');

// Define an array of colors
const colors = ['red', 'blue', 'green', 'orange', 'purple'];
let colorIndex = 0;

// Add a click event listener to change the button color
if (colorbutton) {
    colorbutton.addEventListener('click', () => {
        colorbutton.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Cycle through the colors
    });
}