export function displayAdded(button) {
  const container = button.closest(".product-image");
  container.querySelector(".added-message").classList.add("active");
  setTimeout(() => {
    container.querySelector(".added-message").classList.remove("active");
  }, 2000);
}
