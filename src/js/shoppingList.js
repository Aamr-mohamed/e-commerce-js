import { addToCart } from "./utils/shoppingCart.js";
import { toast } from "./utils/toasts.js";

const products = JSON.parse(localStorage.getItem("products"));
// console.log(products[0]);
const product = document.getElementById("products");
// const category = document.getElementsByClassName("ctgry");
// console.log(category);

document.querySelectorAll(".ctgry").forEach((item) => {
  item.addEventListener("click", function () {
    const category = this.getAttribute("data-value");

    document
      .querySelectorAll(".ctgry")
      .forEach((ctgry) =>
        ctgry.classList.remove("border-b-2", "border-blue-600", "text-blue-600")
      );
    this.classList.add("border-b-2", "border-blue-600", "text-blue-600");

    let filteredProducts;
    if (category === "All") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(
        (product) => product.category === category
      );
    }
    displayProducts(filteredProducts);
  });
});

document.getElementById("All").click();

function displayProducts(filteredProducts) {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";

  filteredProducts.forEach((product) => {
    let item = document.createElement("div");
    item.classList.add("product-item");
    item.setAttribute("data-title", encodeURIComponent(product.title));
    item.innerHTML = `<div class="group relative cursor-pointer" id="item">
                         <img
                         src="${product.image}"
                         alt="product picture"
                         class="picture h-[350px]"
                         />
                         <div
                         class="hidden group-hover:block absolute bottom-[28%] left-0 w-full px-[5%]"
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
    item.querySelector(".plus").addEventListener("click", function () {
      let quantityP = this.previousElementSibling;
      let quantity = parseInt(quantityP.innerText);
      quantityP.innerText = quantity + 1;
    });

    item.querySelector(".picture").addEventListener("click", function (e) {
      const productItem = e.target.closest(".product-item");
      if (productItem) {
        const title = decodeURIComponent(
          productItem.getAttribute("data-title")
        );
        window.location.href = `item.html?title=${title}`;
      }
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
        console.log(user.cart);

        localStorage.setItem("user", JSON.stringify(user));

        toast(true, "Added to Cart Successfully");
      }
    });
  });
}
