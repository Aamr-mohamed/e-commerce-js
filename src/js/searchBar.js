const searchBar = document.getElementById("search-bar");
const resultsContainer = document.getElementById("result-container");
const itemUnavailableTxt = document.getElementById("item-unavailable-txt");
let itemList = JSON.parse(localStorage.getItem("products")) || [];
let searchValue;
let itemsReturnedOnsearch;

const renderItems = (items) => {
  if (items.length > 0) {
    resultsContainer.innerHTML = "";
    itemUnavailableTxt.style.display = "none";

    itemsReturnedOnsearch = [];

    items.forEach((item) => {
      item.name;
      resultsContainer.innerHTML += `
      <div class="item-cards flex justify-start border-b-2 border-gray-200 cursor-pointer">
         <img src="${item.image}" alt="item image" class="item-image h-10" /> 
          <h6 class="title ml-[20px]">${item.title}</h6>
      </div> 
    `;
    });
  } else {
    resultsContainer.innerHTML = "";
    itemUnavailableTxt.style.display = "block";
    itemUnavailableTxt.textContent = "No items match your search.";
  }
};

console.log(itemList);

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
    .filter((item) => item.title.toLowerCase().includes(searchValue))
    .slice(0, 5);
  console.log(filteredItems);
  // console.log(searchValue);
  renderItems(filteredItems);
});

searchBar.addEventListener("focus", (event) => {
  if (searchBar.value.trim() !== "") {
    resultsContainer.style.display = "block";
    if (itemsReturnedOnsearch.length === 0) {
      itemUnavailableTxt.style.display = "block";
    }
  }
});

searchBar.addEventListener("focusout", (event) => {
  setTimeout(() => {
    resultsContainer.style.display = "none";
    itemUnavailableTxt.style.display = "none";
  }, 100);
});
