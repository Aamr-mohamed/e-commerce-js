document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const itemTitle = urlParams.get("title");

  const decodedTitle = decodeURIComponent(itemTitle);

  const products = JSON.parse(localStorage.getItem("products"));
  let product = products.find((item) => (item.title = decodedTitle));
  console.log(product);
  const div = document.createElement("div");

  div.innerHTML = `
  
  `;
});
