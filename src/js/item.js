import { addToCart } from "./utils/shoppingCart.js";
import { toast } from "./utils/toasts.js";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const itemTitle = urlParams.get("title");

  const decodedTitle = decodeURIComponent(itemTitle);
  // console.log(decodedTitle);

  const products = JSON.parse(localStorage.getItem("products"));
  let product = products.find(
    (item) => item.title.trim().toLowerCase() === decodedTitle.toLowerCase()
  );
  // console.log(product);
  const div = document.getElementById("product");

  div.innerHTML = `
      <div class="flex mt-[3%] ml-[20%] mr-[10%] w-[80%] h-[80%]">
        <img
          src="${product.image}"
          alt=""
          class="w-full h-full"
        />
      </div>

      <div class="flex mt-10">
        <div class="flex flex-col">
          <h2><b>${product.title}</b></h2>
          <h3 class="mb-2">Cateogry</h3>
          <h3 class="mb-5"><b>${product.category}</b> </h3>
          <p class="mb-5">
            ${product.description}
          </p>
          <p class="mb-5"><b>Price: ${product.price}$</b></p>
          <form id="product-form">
            <div class="flex flex-col">
              <label for="quantity">Quantity From 1-10</label>
              <input
                min="1"
                max="10"
                value="1"
                name="quantity"
                type="number"
                class="w-[30%] bg-stone-50 border-2 border-gray-300 text-black outline-none"
              />
            </div>
            
            <div>
              <button
             type="submit"
             class="bg-yellow-400 hover:bg-orange-400 float-right text-white font-bold py-2 px-4 rounded-full w-[40%] mt-5"
             >
               Add To Cart
             </button>
            </div>
          </form>
        </div>
      </div>
  `;
  const form = document
    .getElementById("product-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        toast(false, "Please SignIn or Register first.", "login.html");
      } else {
        let shopCart = {};
        const formData = new FormData(this);

        formData.forEach((value, key) => {
          shopCart[key] = value;
        });
        shopCart.title = product.title;
        shopCart.quantity = parseInt(shopCart.quantity);

        addToCart(shopCart, user.cart);

        localStorage.setItem("user", JSON.stringify(user));

        toast(true, "Added to Cart Successfully.");
      }
    });
});
