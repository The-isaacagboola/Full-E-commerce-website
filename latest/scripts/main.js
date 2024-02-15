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
