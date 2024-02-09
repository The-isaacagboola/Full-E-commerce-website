const productImages = document.querySelectorAll(".product-image");
const addToCart = document.querySelectorAll(".add-to-cart-btn");

console.log(productImages);

productImages.forEach((product) => {
  let activeProduct;
  product.addEventListener("click", (event) => {
    activeProduct = product;
    activeProduct.classList.toggle("active");

    productImages.forEach((product) => {
      if (product != activeProduct) {
        product.classList.remove("active");
      }
    });
  });
});

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    else dropdown.classList.remove("active");
  });
});
