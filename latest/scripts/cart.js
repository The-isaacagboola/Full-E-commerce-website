import { cart, wishlist } from "./data/products.js";
import { checklist } from "./data/products.js";
let newCart = [...cart];
let newChecklist = [...checklist];

let cartHTML = "";
function updateCart() {
  newCart.forEach((item) => {
    let html;
    html = `
    <div class="cart-item js-cart-item" data-productId=${item.id}>
  <div class="image-name-container">
    <div class="cart-item-image">
      <button class="js-cart-item-delete" data-productId=${item.id}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9" fill="#DB4444" />
          <path
            d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
     ${item.image}
    </div>
    <p class="product-name">${item.name}</p>
  </div>
  <p class="js-present-price">$${item.presentPrice}</p>
  <input class="js-input-quantity" type="number" name="item-quantity" value="01" />
  <p class="js-subtotal">$${item.presentPrice}</p>
</div>
    `;
    cartHTML += html;
    document.querySelector(".js-cart-item-container").innerHTML = cartHTML;
    updateCartQuantity();
    if (cartHTML === "") {
      const imageBox = document.querySelector(".empty-cart-image");
      imageBox.classList.add("display");
    }
  });
}
updateCart();
function checkIfEmpty() {
  if (newCart.length === 0) {
    const imageBox = document.querySelector(".empty-cart-image");
    imageBox.classList.add("display");
  }
}
checkIfEmpty();

addSubtotals();

export function updateCartQuantity() {
  document.querySelector(".js-cart-quantity").innerHTML = newCart.length;
  document.querySelector(".js-wishlist-quantity").innerHTML = wishlist.length;
}

function updateSubtotal() {
  const items = document.querySelectorAll(".js-cart-item");

  items.forEach((item) => {
    const itemId = item.dataset.productid;
    let matchingItem;
    newCart.forEach((product) => {
      if (product.id === itemId) {
        matchingItem = product;
      }
    });

    if (Number(item.querySelector(".js-input-quantity").value) < 1) {
      item.querySelector(".js-input-quantity").value = 1;
    }

    item.querySelector(".js-subtotal").innerHTML = `$${
      matchingItem.presentPrice *
      Number(item.querySelector(".js-input-quantity").value)
    }`;

    const inputs = document.querySelectorAll(".js-input-quantity");

    inputs.forEach((input) => {
      let value = parseFloat(input.value);
      input.value = value.toFixed(0).padStart(2, "0");
    });
  });
}

document.querySelectorAll(".js-input-quantity").forEach((input) => {
  input.addEventListener("input", () => {
    updateSubtotal();
    addSubtotals();
  });
});

function addSubtotals() {
  const prices = document.querySelectorAll(".js-subtotal");

  let subtotalAccumulator = 0;

  prices.forEach((price) => {
    subtotalAccumulator += Number(price.innerHTML.split("$").join(""));
  });

  const subTotalAmount = (document.querySelector(
    ".js-subtotal-price"
  ).innerHTML = `$${subtotalAccumulator.toLocaleString()}`);

  if (document.querySelector(".js-shipping-fee").innerHTML === "Free") {
    document.querySelector(".js-sumtotal").innerHTML = subTotalAmount;
  } else {
    let shippingFee = Number(
      document.querySelector(".js-shipping-fee").innerHTML.split("$").join("")
    );

    document.querySelector(".js-sumtotal").innerHTML = `
      $${(subtotalAccumulator + shippingFee).toLocaleString()}`;
  }
}

const cartDeleteButtons = document.querySelectorAll(".js-cart-item-delete");
cartDeleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    removeFromCart(button);
  });
});

function removeFromCart(button) {
  let buttonId = button.dataset.productid;
  newCart = newCart.filter((product) => product.id !== buttonId);
  console.log(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
  const buttonContainer = button.closest(".js-cart-item");
  buttonContainer.remove();
  updateCartQuantity();
  checkIfEmpty();
}

function updateChecklist() {
  newChecklist = [];
  const cartContainers = document.querySelectorAll(".js-cart-item");

  cartContainers.forEach((container) => {
    let itemId = container.dataset.productid;
    newChecklist.push({
      id: itemId,
      Amount: Number(
        container.querySelector(".js-subtotal").innerHTML.split("$").join("")
      ),
    });
    localStorage.setItem("checklist", JSON.stringify(newChecklist));
  });
  console.log(newChecklist);
}
const checkoutButton = document.querySelector(".js-checkout-button");
checkoutButton.addEventListener("click", () => {
  updateChecklist();
});
