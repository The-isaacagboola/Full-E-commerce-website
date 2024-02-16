import { cart } from "./products.js";

export function updateCartQuantity() {
  document.querySelector(".js-cart-quantity").innerHTML = cart.length;
}
