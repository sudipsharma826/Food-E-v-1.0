let dishesBtn = document.querySelector(".dishes-btn");
let startersBtn = document.querySelector(".starters-btn");
let dessertsBtn = document.querySelector(".desserts-btn");
let drinksBtn = document.querySelector(".drinks-btn");

let dishes = document.querySelector(".dishes");
let starters = document.querySelector(".starters");
let desserts = document.querySelector(".desserts");
let drinks = document.querySelector(".drinks");

function setActiveTab(activeButton, activeContent) {
    // Array of all buttons and content sections
    const allButtons = [dishesBtn, startersBtn, dessertsBtn, drinksBtn];
    const allContent = [dishes, starters, desserts, drinks];
    
    // Remove 'active' class from all buttons and add 'hide' class to all content
    allButtons.forEach(button => button.classList.remove('active-btn'));
    allContent.forEach(content => content.classList.add('hide'));
    
    // Add 'active' class to the clicked button and remove 'hide' class from its content
    activeButton.classList.add('active-btn');
    activeContent.classList.remove('hide');
}

// Set initial active tab
setActiveTab(dishesBtn, dishes);

// Add click event listeners to all buttons
dishesBtn.addEventListener('click', () => setActiveTab(dishesBtn, dishes));
startersBtn.addEventListener('click', () => setActiveTab(startersBtn, starters));
dessertsBtn.addEventListener('click', () => setActiveTab(dessertsBtn, desserts));
drinksBtn.addEventListener('click', () => setActiveTab(drinksBtn, drinks));

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const offcanvasNav = document.querySelector('.offcanvas-nav');
    const closeBtn = document.querySelector('.close-btn');
    const offcanvasLinks = document.querySelectorAll('.offcanvas-nav a');
  
    menuIcon.addEventListener('click', function() {
      offcanvasNav.style.right = '0';
    });
  
    closeBtn.addEventListener('click', function() {
      offcanvasNav.style.right = '-250px';
    });
  
    offcanvasLinks.forEach(link => {
      link.addEventListener('click', function() {
        offcanvasNav.style.right = '-250px';
      });
    });
  });