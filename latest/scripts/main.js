import { products } from "./data/products.js";
import { handleFlashsale } from "./data/flashsales.js";
import { handleBestselling } from "./data/bestsellingProducts.js";
import { cart, saveToLocal, wishlist } from "./data/products.js";
import { displayAdded } from "./data/utils.js";

function updateCartWishQuantity() {
  document.querySelector(".js-cart-quantity").innerHTML = cart.length;
  document.querySelector(".js-wishlist-quantity").innerHTML = wishlist.length;
}
updateCartWishQuantity();

let generalProductHTML = "";
function handleGeneralProduct(product) {
  let html;
  html = `<div class="product-item">
  <div class="product-image">
    <div class="responsive-icons">
      <div class="wishlist-icon js-wishlist-icon" data-productId=${product.id}>
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
  </div>`;
  generalProductHTML += html;
  document.querySelector(".js-general-container").innerHTML =
    generalProductHTML;
}

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

addtoCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let productId;

    productId = button.dataset.productid;

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
    document.querySelector(".js-cart-quantity").innerHTML = cart.length;
    displayAdded(button);
  });
});

function markWishedItems() {
  wishlist.forEach((item) => {
    const wishIcons = document.querySelectorAll(".js-wishlist-icon");
    wishIcons.forEach((icon) => {
      let iconId = icon.dataset.productid;
      if (iconId === item.id) {
        icon.classList.add("active");
      }
    });
  });
}
markWishedItems();

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.closest(".js-wishlist-icon") !== null) {
    let container = e.target.closest(".js-wishlist-icon");
    container.classList.toggle("active");

    const activeContainers = document.querySelectorAll(
      ".js-wishlist-icon.active"
    );

    activeContainers.forEach((container) => {
      const activeId = container.dataset.productid;
      products.forEach((product) => {
        if (
          product.id === activeId &&
          !wishlist.some((product) => product.id === activeId)
        ) {
          wishlist.push(product);
          localStorage.setItem("wishlist", JSON.stringify(wishlist));
          updateCartWishQuantity();
        }
      });
    });
  }
});
