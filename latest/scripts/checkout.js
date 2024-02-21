import { cart } from "./data/products.js";

let checkHTML;
function renderProducts() {
  cart.forEach((item) => {
    let itemHtml;
    itemHtml = `
    <div class="cart-item">
  <div class="image-name-container">
    <div class="cart-item-image">
      ${item.image}
    </div>
    <p class="product-name">${item.name}</p>
  </div>
  <p class="Subtotal">$650</p>
</div> `;
    checkHTML += itemHtml;
    checkHTML = checkHTML.split("undefined").join("");
    document.querySelector(".checkout-item-container").innerHTML = checkHTML;
  });
}
renderProducts();
