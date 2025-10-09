document.getElementById("sort-select").addEventListener("change", function() {
  const value = this.value;
  const productsContainer = document.getElementById("products");
  const products = Array.from(productsContainer.getElementsByClassName("product-card"));

  // Chuyển giá sang dạng số để sắp xếp
  const parsePrice = (priceText) => Number(priceText.replace(/[₫,.]/g, ""));

  switch (value) {
    case "price-asc":
      products.sort((a, b) => parsePrice(a.querySelector(".price").textContent) - parsePrice(b.querySelector(".price").textContent));
      break;

    case "price-desc":
      products.sort((a, b) => parsePrice(b.querySelector(".price").textContent) - parsePrice(a.querySelector(".price").textContent));
      break;

    case "newest":
      // Giả sử sản phẩm mới nhất nằm ở cuối, ta đảo ngược danh sách
      products.reverse();
      break;

    default:
      // Trở lại mặc định (theo thứ tự HTML ban đầu)
      products.sort((a, b) => 0);
  }

  // Cập nhật lại HTML
  productsContainer.innerHTML = "";
  products.forEach(p => productsContainer.appendChild(p));
});

// Chuyển giữa 2 chế độ xem: lưới & danh sách
function setView(type) {
  const products = document.getElementById("products");
  if (type === "list") {
    products.classList.remove("detail-view");
    products.classList.add("list-view");
  } else {
    products.classList.remove("list-view");
    products.classList.add("detail-view");
  }
}