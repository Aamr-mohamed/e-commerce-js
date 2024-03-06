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
          <p class="mb-3">Quantity From 1 to 10</p>
          <select
            name="quantity"
            id="quantity"
            class="quantity w-[25%] rounded bg-stone-100 p-1" 
          >
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          </div>
            
            <div>
              <button
             type="submit"
             class="bg-zinc-700 hover:bg-zinc-800 float-right text-white font-bold py-2 px-4 rounded-full w-[40%] mt-5"
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

        shopCart.title = product.title;
        shopCart.quantity = parseInt(document.getElementById("quantity").value);

        addToCart(shopCart, user.cart);

        localStorage.setItem("user", JSON.stringify(user));

        toast(true, "Added to Cart Successfully.");
      }
    });
});
