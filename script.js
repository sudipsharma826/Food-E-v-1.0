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
  /*Dynamic JS */
  const orderNowButtons = document.querySelectorAll('.order-btn');
        const orderForm = document.querySelector('.order-form');
        const orderOverlay = document.querySelector('.order-overlay');
        const orderIdElement = document.getElementById('order-id');
        const orderItemsContainer = document.getElementById('order-items');
        const totalAmountElement = document.getElementById('total-amount');
        const addMoreItemsButton = document.getElementById('add-more-items');
        const placeOrderButton = document.getElementById('place-order');
        const cancelOrderButton = document.getElementById('cancel-order');

        let totalAmount = 0;

        orderNowButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemName = button.getAttribute('data-item');
                const itemPrice = parseFloat(button.getAttribute('data-price'));

                addItemToOrder(itemName, itemPrice);
                openOrderForm();
            });
        });

        addMoreItemsButton.addEventListener('click', () => {
            orderForm.style.display = 'none';
            orderOverlay.style.display = 'none';
        });

        placeOrderButton.addEventListener('click', () => {
            alert('Order placed successfully!');
            resetOrderForm();
        });

        cancelOrderButton.addEventListener('click', () => {
            resetOrderForm();
        });

        function openOrderForm() {
            orderIdElement.textContent = generateOrderId();
            orderForm.style.display = 'block';
            orderOverlay.style.display = 'block';
        }

        function addItemToOrder(itemName, itemPrice) {
            const orderItem = document.createElement('div');
            orderItem.classList.add('order-item');
            orderItem.innerHTML = `
                <p>${itemName} - $${itemPrice}</p>
                <input type="hidden" name="item-name" value="${itemName}">
                <input type="hidden" name="item-price" value="${itemPrice}">
                <button type="button" class="decrease-quantity">-</button>
                <span class="quantity">1</span>
                <button type="button" class="increase-quantity">+</button>
            `;
            orderItemsContainer.appendChild(orderItem);

            const decreaseQuantityButton = orderItem.querySelector('.decrease-quantity');
            const increaseQuantityButton = orderItem.querySelector('.increase-quantity');
            const quantityElement = orderItem.querySelector('.quantity');

            decreaseQuantityButton.addEventListener('click', () => {
                let quantity = parseInt(quantityElement.textContent);
                if (quantity > 1) {
                    quantity--;
                    quantityElement.textContent = quantity;
                    updateTotalAmount(-itemPrice);
                }
            });

            increaseQuantityButton.addEventListener('click', () => {
                let quantity = parseInt(quantityElement.textContent);
                quantity++;
                quantityElement.textContent = quantity;
                updateTotalAmount(itemPrice);
            });

            updateTotalAmount(itemPrice);
        }

        function updateTotalAmount(amount) {
            totalAmount += amount;
            totalAmountElement.textContent = totalAmount.toFixed(2);
        }

        function generateOrderId() {
            return 'ORD-' + Math.floor(Math.random() * 100000);
        }

        function resetOrderForm() {
            orderItemsContainer.innerHTML = '';
            totalAmount = 0;
            totalAmountElement.textContent = totalAmount.toFixed(2);
            orderForm.style.display = 'none';
            orderOverlay.style.display = 'none';
        }
 /*Dynamic  book table JS */
 document.addEventListener('DOMContentLoaded', function() {
  const bookTableBtns = document.querySelectorAll('.book-table');
  const reservationForm = document.querySelector('.table-reservation-form');
  const confirmReservationBtn = document.getElementById('confirm-reservation');
  const cancelReservationBtn = document.getElementById('cancel-reservation');
  const confirmationIdSpan = document.getElementById('confirmation-id');

  bookTableBtns.forEach(btn => {
      btn.addEventListener('click', function(event) {
          // Display form in center of the screen
          reservationForm.style.display = 'block';
          generateConfirmationId();
      });
  });

  confirmReservationBtn.addEventListener('click', function() {
      // Handle form submission here (e.g., send data to server)
      alert('Reservation confirmed!Thank You');
      reservationForm.style.display = 'none';
  });

  cancelReservationBtn.addEventListener('click', function() {
      reservationForm.style.display = 'none';
  });

  function generateConfirmationId() {
      // Generate a random confirmation ID for demonstration purposes
      const confirmationId = Math.floor(Math.random() * 1000000);
      confirmationIdSpan.textContent = confirmationId;
  }
});
