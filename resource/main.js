// Get the button element
const findResourceButton = document.getElementById('find-resource');
// Add event listener to the button
findResourceButton.addEventListener('click', () => {
    // Get the selected department and year values
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;

    // Check if the department is 'CS' (Computer Science) and year is '1'
    if (department === 'CS' && year === '1') {
        // Redirect to the new HTML page
        window.location.href = 'cs1.html'; // Replace 'newPage.html' with your desired page URL
    } else if (department === 'AI' && year === '1') {
        window.location.href = 'ai1.html';
    } 
    
    else {
        // Display a message or handle other logic if needed
        alert('Please select the correct department and year.');
    }
});

// const slider = document.querySelector('.slider');
// const boxes = document.querySelectorAll('.slider .box');
// const nextButton = document.getElementById('next');
// const prevButton = document.getElementById('prev');

// let currentIndex = 0;
// const boxesPerView = 4;
// const totalBoxes = boxes.length;

// function updateSliderPosition() {
//     const offset = currentIndex * -100 / boxesPerView;
//     slider.style.transform = `translateX(${offset}%)`;
// }

// nextButton.addEventListener('click', () => {
//     if (currentIndex < Math.ceil(totalBoxes / boxesPerView) - 1) {
//         currentIndex++;
//         updateSliderPosition();
//     }
// });

// prevButton.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateSliderPosition();
//     }
// });
// Retrieve the stored theme mode from localStorage
localStorage.setItem('lightmode', 'false');
let lightmode = localStorage.getItem('lightmode');

// Select the theme toggle button by its ID
const themeSwitch = document.getElementById('theme-switch');

// Function to enable light mode
const enableLightmode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightmode', 'active');
};

// Function to disable light mode (reverting to dark mode)
const disableLightmode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightmode', null);
};

// On initial load, enable light mode if previously active
if (lightmode === "active") {
  enableLightmode();
}

// Add a click event listener to the theme toggle button
themeSwitch.addEventListener("click", () => {
  // Retrieve the current state from localStorage
  lightmode = localStorage.getItem('lightmode');
  // Toggle the theme based on the current state
  lightmode !== "active" ? enableLightmode() : disableLightmode();
});
