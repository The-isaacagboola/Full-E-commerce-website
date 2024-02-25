import { cart, wishlist } from "./data/products.js";
import { products, saveToLocal } from "./data/products.js";
import { displayAdded } from "./data/utils.js";

let newWishlist = [...wishlist];
function updateCartWishQuantity() {
  document.querySelector(".js-cart-quantity").innerHTML = cart.length;
  document.querySelector(".js-wishlist-quantity").innerHTML =
    newWishlist.length;
  document.querySelector(".wishlist-number").innerHTML = newWishlist.length;
}
updateCartWishQuantity();

function renderWishList() {
  let wishHTML;
  let itemHtml;
  newWishlist.forEach((item) => {
    itemHtml = `
    <div class="product-item">
        <div class="product-image">
            <div class="flash-sale-number">-45%</div>
            <div class="responsive-icons">
                <div class="delete-icon js-delete-icon" data-productId=${item.id}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
                            stroke="black"
                            stroke-width="1.56"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
            </div>
    </div>
   ${item.image}
   <div class="added-message"><span>√</span> Added</div>
    <button class="add-in-delete js-add-to-cart" data-objectId=${item.id}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.75 3.75H5.75L8 16.5H20"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Add To Cart
    </button>
  </div>
  <p class="product-name">${item.name}</p>
  <p>
    <span class="present-price">$${item.presentPrice}</span>
  </p>
  <img src="Images/rating/Five star.png" alt="five-star rating" />
  <span class="rating-count">(65)</span>
</div>
    `;
    wishHTML += itemHtml;
    wishHTML = wishHTML.split("undefined").join("");
  });
  document.querySelector(".js-wishlist-container").innerHTML = wishHTML;
  addToCart();
}
renderWishList();

let justForYouObjects = [
  {
    id: "p3",
    category: "general",
    image: ` <img
        src="Images/products/ideapad-gaming-3i-01-500x500 1.png"
        alt="laptop"
      />`,
    name: "ASUS FHD Gaming Laptop",
    presentPrice: 700,
    rating: {
      stars: 5,
      count: 325,
    },
  },
  {
    id: "f3",
    category: "flashsale",
    flashsaleNumber: 45,
    image: ` <img
            src="Images/products/g27cq4-500x500 1.png"
            alt="flat screen tv"
          />`,
    name: "IPS LCD Gaming Monitor",
    presentPrice: 370,
    formerPrice: 400,
    rating: {
      stars: 5,
      count: 99,
    },
  },
  {
    id: "f1",
    category: "flashsale",
    flashsaleNumber: 45,
    image: `<img src="Images/products/g92-2-500x500 1.png" alt="game-pad" />`,
    name: "HAVIT HV-G92 Gamepad",
    presentPrice: 120,
    formerPrice: 160,
    rating: {
      stars: 5,
      count: 88,
    },
  },
  {
    id: "f2",
    category: "flashsale",
    flashsaleNumber: 35,
    image: `<img src="Images/products/ak-900-01-500x500 1.png" alt="keyboard" />`,
    name: "AK-900 Wired keyboard",
    presentPrice: 960,
    formerPrice: 1160,
    rating: {
      stars: 4,
      count: 75,
    },
  },
];

let justHTML;
justForYouObjects.forEach((object) => {
  let objectHtml = `
    <div class="product-item">
    <div class="product-image">
        <div class="flash-sale-number">-45%</div>
          <div class="responsive-icons">
        <div class="quickview-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.2565 10.962C21.7305 11.582 21.7305 12.419 21.2565 13.038C19.7635 14.987 16.1815 19 11.9995 19C7.81752 19 4.23552 14.987 2.74252 13.038C2.51191 12.7411 2.38672 12.3759 2.38672 12C2.38672 11.6241 2.51191 11.2589 2.74252 10.962C4.23552 9.013 7.81752 5 11.9995 5C16.1815 5 19.7635 9.013 21.2565 10.962V10.962Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
   ${object.image}
   <div class="added-message"><span>√</span> Added</div>
    <button class="add-in-delete js-add-to-cart" data-objectId=${object.id}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.75 3.75H5.75L8 16.5H20"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Add To Cart
    </button>
  </div>
  <p class="product-name">${object.name}</p>
  <p>
    <span class="present-price">$${object.presentPrice}</span>
    <span class="former-price">$${object.formerPrice}</span>
  </p>
  <img src="Images/rating/Five star.png" alt="five-star rating" />
  <span class="rating-count">(${object.rating.count})</span>
</div>`;
  justHTML += objectHtml;
  let newJustHTML;
  newJustHTML = justHTML.split("undefined").join("");
  document.querySelector(".js-just-foryou").innerHTML = newJustHTML;
});

function addToCart() {
  const addToCartButtons = document.querySelectorAll(".js-add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let itemId;
      itemId = button.dataset.objectid;

      let targetItem;
      products.forEach((product) => {
        if (product.id === itemId) {
          targetItem = product;
        }
      });

      if (!cart.some((product) => product.id === targetItem.id)) {
        cart.push(targetItem);
        updateCartWishQuantity();
        saveToLocal();
      }
      displayAdded(button);
    });
  });
}

document.querySelectorAll(".js-delete-icon").forEach((button) => {
  button.addEventListener("click", () => {
    removeItemUpdateWishlist(button);
  });
});
function removeItemUpdateWishlist(button) {
  let buttonId = button.dataset.productid;
  const updatedWishlist = newWishlist.filter(
    (product) => product.id !== buttonId
  );
  newWishlist = [...updatedWishlist];
  localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  console.log(newWishlist);
  renderWishList();
  updateCartWishQuantity();

  document.querySelectorAll(".js-delete-icon").forEach((button) => {
    button.addEventListener("click", () => {
      removeItemUpdateWishlist(button);
    });
  });
}
