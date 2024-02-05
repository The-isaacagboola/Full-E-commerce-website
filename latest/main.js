const products = document.querySelectorAll(".product-item");
console.log(products);

products.forEach((product) => {
  let activeProduct;
  product.addEventListener("click", () => {
    activeProduct = product;
    activeProduct.classList.toggle("active");

    products.forEach((product) => {
      if (product != activeProduct) {
        product.classList.remove("active");
      }
    });
  });
});
