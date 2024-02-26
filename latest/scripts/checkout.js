import { cart, checklist, wishlist } from "./data/products.js";

let newCart = [...cart];
let newChecklist = [...checklist];
console.log(newChecklist);

function updateCartWishQuantity() {
  document.querySelector(".js-cart-quantity").innerHTML = newCart.length;
  document.querySelector(".js-wishlist-quantity").innerHTML = wishlist.length;
}
updateCartWishQuantity();
let checkHTML;
function renderProducts() {
  newCart.forEach((item) => {
    let itemHtml;
    itemHtml = `
    <div class="cart-item js-cart-item" data-productId="${item.id}">
  <div class="image-name-container">
    <div class="cart-item-image">
      ${item.image}
    </div>
    <p class="product-name">${item.name}</p>
  </div>
  <p class="Subtotal js-subtotal"></p>
</div> `;
    checkHTML += itemHtml;
    checkHTML = checkHTML.split("undefined").join("");
    document.querySelector(".checkout-item-container").innerHTML = checkHTML;
  });
}
renderProducts();

function applyAmounts() {
  const containers = document.querySelectorAll(".js-cart-item");
  containers.forEach((container) => {
    let productId = container.dataset.productid;
    let matchingItem;
    newChecklist.forEach((item) => {
      if (item.id === productId) {
        matchingItem = item;
      }
    });
    container.querySelector(
      ".js-subtotal"
    ).innerHTML = `$${matchingItem.Amount.toLocaleString()}`;
  });

  const addedSubtotals = document.querySelector(".js-added-subtotals");
  let totalAccumulator = 0;
  newChecklist.forEach((item) => {
    totalAccumulator += item.Amount;
  });
  addedSubtotals.innerHTML = `$${totalAccumulator.toLocaleString()}`;
}
applyAmounts();
