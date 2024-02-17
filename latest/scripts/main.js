import { products } from "./data/products.js";
import { handleFlashsale } from "./data/flashsales.js";
import { handleBestselling } from "./data/bestsellingProducts.js";
import { cart, saveToLocal } from "./data/products.js";
import { displayAdded, updateCartQuantity } from "./data/utils.js";

let generalProductHTML = "";
function handleGeneralProduct(product) {
  let html;

  html = `
  <div class="product-item">
  <div class="product-image">
    <div class="responsive-icons">
      <div class="wishlist-icon">
        <img src="Images/icons/icon love.png" alt="add-to-wishlist" />
      </div>

      <div class="seen-icon">
        <img src="Images/icons/icon Quick View.png" alt="seen" />
      </div>
    </div>
    ${product.image}
    <div class="added-message"><span>√</span> Added</div>
    <button class="add-to-cart-btn js-add-to-cart " data-productId=${product.id}>Add To Cart</button>
  </div>
  <p class="product-name">${product.name}</p>
  <div class="adjusted-product-detail">
    <p class="present-price">$${product.presentPrice}</p>
    <img src="Images/rating/Five star.png" alt="five-star rating" />
    <span class="rating-count">(${product.rating.count})</span>
  </div>
</div>
  `;
  generalProductHTML += html;
  document.querySelector(".js-general-container").innerHTML =
    generalProductHTML;
}
updateCartQuantity();
products.forEach((product) => {
  let generalProduct;
  let flashsaleProduct;
  let bestsellingProduct;
  if (product.category === "general") {
    generalProduct = product;
    handleGeneralProduct(generalProduct);
  } else if (product.category === "flashsale") {
    flashsaleProduct = product;
    handleFlashsale(flashsaleProduct);
  } else if (product.category === "best-selling") {
    bestsellingProduct = product;
    handleBestselling(bestsellingProduct);
  }
});

const addtoCartButtons = document.querySelectorAll(".js-add-to-cart");
console.log(addtoCartButtons);

addtoCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let productId;
    console.log(button.dataset);
    productId = button.dataset.productid;
    console.log(productId);

    let activeProduct;
    products.forEach((product) => {
      if (product.id === productId) {
        activeProduct = product;
      }
    });

    if (!cart.some((product) => product.id === activeProduct.id)) {
      cart.push(activeProduct);
    }

    saveToLocal();
    updateCartQuantity();

    displayAdded(button);
  });
});
