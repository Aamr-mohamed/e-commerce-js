import { addToCart } from "./utils/shoppingCart.js";
import { toast } from "./utils/toasts.js";

const searchMin = document.getElementById("range-min");
const searchMax = document.getElementById("range-max");
const valueMin = document.getElementById("value-min");
const valueMax = document.getElementById("value-max");

const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get("search");

const products = JSON.parse(localStorage.getItem("products"));
// console.log(products);
const defaultFilter = {
  categories: [
    "men's clothing",
    "women's clothing",
    "all",
    "jewelery",
    "electronics",
  ],
  priceRange: {
    min: 0,
    max: 1000,
  },
};
displayProducts(products, defaultFilter);

searchMin.addEventListener("input", function () {
  valueMin.textContent = this.value + "$";
});

searchMax.addEventListener("input", function () {
  valueMax.textContent = this.value + "$";
});

document.getElementById("filter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let filter = {
    categories: [],
    priceRange: { min: 0, max: 0 },
    ascending: false,
    descending: false,
  };

  const formData = new FormData(this);
  formData.forEach((value, key) => {
    if (key !== "range-min" && key !== "range-max") {
      if (value === "on") {
        if (key === "ascending") {
          filter.ascending = true;
        } else if (key === "descending") {
          filter.descending = true;
        } else {
          filter.categories.push(key);
        }
      }
    } else {
      filter.priceRange[key === "range-min" ? "min" : "max"] = parseInt(value);
    }
  });

  if (filter.priceRange.min > filter.priceRange.max) {
    //   console.log("more");
    let temp = filter.priceRange.min;
    filter.priceRange.min = filter.priceRange.max;
    filter.priceRange.max = temp;
  }

  // console.log(filter.priceRange.min);
  // console.log(filter);
  displayProducts(products, filter);
});
// };

function getFilteredProducts(products, filter) {
  const { categories, priceRange, ascending, descending } = filter;

  let filteredProducts = products.filter((product) => {
    const inCategory = categories.includes("all")
      ? true
      : categories.includes(product.category);

    const inPriceRange =
      product.price >= priceRange.min && product.price <= priceRange.max;

    const matchesSearchQuery = searchQuery
      ? product.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return inCategory && inPriceRange && matchesSearchQuery;
  });

  // console.log(filteredProducts);
  if (ascending) {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (descending) {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return filteredProducts;
}

function displayProducts(products, filter) {
  const filteredProducts = getFilteredProducts(products, filter);
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";

  if (filteredProducts.length === 0) {
    const noProductsMessage = document.createElement("div");
    noProductsMessage.classList.add(
      "no-products-message",
      "absolute",
      "top-[18%]",
      "left-[40%]"
    );
    noProductsMessage.innerHTML = `
      <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="" />
      <h4 class="mt-5"><b>No products found matching the filter or search criteria.<b/></h4>
      `;
    productContainer.appendChild(noProductsMessage);
  } else {
    filteredProducts.forEach((product) => {
      let item = document.createElement("div");
      item.classList.add("product-item");
      item.setAttribute("data-title", encodeURIComponent(product.title));
      item.innerHTML = `<div class="group relative cursor-pointer">
                         <img
                         src="${product.image}"
                         alt="product picture"
                         class="lg:w-[350px] lg:h-[400px] md:w-[100px] md:h-[150px] mb-5 picture"
                        />
                         <div
                         class="hidden group-hover:block absolute bottom-[28%] w-full px-[5%]"
                         >
                                <form class="cart-form flex justify-between">
                                <div
                                 class="flex text-center items-center bg-neutral-100 border-r-[3px]"
                                 >
                                     <button type="button" class="minus fa-solid fa-minus px-2"></button>
                                     <p class="text-gray-600 quantity" id="quantity">1</p>
                                     <button type="button" class="plus fa-solid fa-plus px-2"></button>
                                 </div>

                                 <button type="submit" class="bg-neutral-600 text-white rounded p-2 float-end">
                                 Add to Cart
                                 </button>
                                </form>
                         </div>
                         <div class="mt-[3px]">
                             <p class="text-gray-400">${product.category}</p>
                             <p><b>${product.title}</b> </p>
                             <p class="font-bold"><b>${product.price}</b>$</p>
                         </div>
                     </div>`;

      productContainer.appendChild(item);

      item.querySelector(".picture").addEventListener("click", function (e) {
        const productItem = e.target.closest(".product-item");
        if (productItem) {
          const title = decodeURIComponent(
            productItem.getAttribute("data-title")
          );
          window.location.href = `item.html?title=${title}`;
        }
      });
      item.querySelector(".plus").addEventListener("click", function () {
        let quantityP = this.previousElementSibling;
        let quantity = parseInt(quantityP.innerText);
        quantityP.innerText = quantity + 1;
      });
      item.querySelector(".minus").addEventListener("click", function () {
        let quantityP = this.nextElementSibling;
        let quantity = parseInt(quantityP.innerText);
        if (quantity > 1) {
          quantityP.innerText = quantity - 1;
        }
      });
      item.querySelector(".cart-form").addEventListener("submit", function (e) {
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
          toast(false, "Please login or register first");
        } else {
          let shopCart = {};
          let quantity = document.getElementById("quantity").innerText;

          shopCart.title = product.title;
          shopCart.quantity = parseInt(quantity);

          addToCart(shopCart, user.cart);

          localStorage.setItem("user", JSON.stringify(user));

          toast(true, "Added to Cart Successfully");
        }
      });
    });
  }
}
