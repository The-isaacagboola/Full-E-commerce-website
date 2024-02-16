import { cart } from "./data/products.js";
import { updateCartQuantity } from "./data/utils.js";
let cartHTML = "";
export function updateCart() {
  cart.forEach((item) => {
    let html;
    html = `
    <div class="cart-item">
  <div class="image-name-container">
    <div class="cart-item-image">
      <button data-productId=${item.id}>
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
  <p class="present-price">$${item.presentPrice}</p>
  <input type="number" name="item-quantity" value="01" />
  <p class="Subtotal">$${item.presentPrice}</p>
</div>
    `;
    cartHTML += html;
    document.querySelector(".js-cart-item-container").innerHTML = cartHTML;
  });
  updateCartQuantity();
}
updateCart();
