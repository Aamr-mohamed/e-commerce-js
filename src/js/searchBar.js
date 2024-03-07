const searchBar = document.getElementById("search-bar");
let resultsContainer = document.getElementById("result-container");
const itemUnavailableTxt = document.getElementById("item-unavailable-txt");
let itemList = JSON.parse(localStorage.getItem("products")) || [];
let searchValue;
let itemsReturnedOnSearch;

const renderItems = (items) => {
  if (items.length > 0) {
    resultsContainer.innerHTML = "";
    itemUnavailableTxt.style.display = "none";

    itemsReturnedOnSearch = [];

    items.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add("product-item");
      div.setAttribute("data-title", encodeURIComponent(item.title));
      div.setAttribute(
        "class",
        "flex justify-start border-b-2 border-gray-200 cursor-pointer"
      );
      div.innerHTML += `
     
         <img src="${item.image}" alt="item image" class="item-image h-10" /> 
          <h6 class="title ml-[20px]">${item.title}</h6>
    `;
      div.addEventListener("click", function () {
        const title = decodeURIComponent(div.getAttribute("data-title"));
        window.location.href = `item.html?title=${title}`;
      });
      resultsContainer.appendChild(div);
    });
  } else {
    resultsContainer.innerHTML = "";
    itemUnavailableTxt.style.display = "block";
    itemUnavailableTxt.textContent = "No items match your search.";
  }
};

// console.log(itemList);

searchBar.addEventListener("input", (event) => {
  searchValue = event.target.value.trim().toLowerCase();
  if (searchValue == "") {
    resultsContainer.style.display = "none";
    itemUnavailableTxt.style.display = "none";
    return;
  }

  resultsContainer.style.display = "block";
  itemUnavailableTxt.style.display = "none";
  const filteredItems = itemList
    .filter((item) => item.title?.toLowerCase().includes(searchValue))
    .slice(0, 5);
  console.log(filteredItems);
  // console.log(searchValue);
  renderItems(filteredItems);
});

document.addEventListener("click", function (event) {
  const isClickInsideSearchBar = searchBar.contains(event.target);
  const isClickInsideResultsContainer = resultsContainer.contains(event.target);

  if (!isClickInsideSearchBar && !isClickInsideResultsContainer) {
    resultsContainer.style.display = "none";
    itemUnavailableTxt.style.display = "none";
  }
});

searchBar.addEventListener("focus", (event) => {
  if (searchBar.value.trim() !== "") {
    resultsContainer.style.display = "block";
    if (itemsReturnedOnSearch.length === 0) {
      itemUnavailableTxt.style.display = "block";
    }
  }
});

const searchButton = document.querySelector(".search");

searchButton.addEventListener("click", function () {
  const searchQuery = searchBar.value.trim().toLowerCase();

  if (searchQuery) {
    const searchURL = `products.html?search=${encodeURIComponent(searchQuery)}`;

    window.location.href = searchURL;
  }
});
