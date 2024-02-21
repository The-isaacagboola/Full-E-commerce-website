let flashsaleHTML = "";
export function handleFlashsale(product) {
  let flashHtml;
  flashHtml = `
  <div class="product-item">
    <div class="product-image">
      <div class="flash-sale-number">-${product.flashsaleNumber}%</div>
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
      <button class="add-to-cart-btn js-add-to-cart" data-productId=${product.id}>Add To Cart</button>
    </div>
    <p class="product-name">${product.name}</p>
    <p>
      <span class="present-price">$${product.presentPrice}</span>
      <span class="former-price">$${product.formerPrice}</span>
    </p>
    <img src="Images/rating/Five star.png" alt="five-star rating" />
    <span class="rating-count">(${product.rating.count})</span>
  </div>
  `;
  flashsaleHTML += flashHtml;
  document.querySelector(".js-flashsale-container").innerHTML = flashsaleHTML;
}
