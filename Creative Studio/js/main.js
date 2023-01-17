// Add the code for the toggle menu
// Find and assign your constant.
const clickButton = document.querySelector('.menu-button');

// Create a click event for it that toggles a CSS class. 
clickButton.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show-nav');
  
  document.querySelector('.search-bar').classList.toggle('show-nav');
});