import { addToCart, removeItem } from "./utils/shoppingCart.js";
import { toast } from "./utils/toasts.js";

let user = JSON.parse(localStorage.getItem("user"));
let products = JSON.parse(localStorage.getItem("products"));

let shoppingCart = user.cart;
console.log(user);

function getProduct(title, productList) {
  return productList.find(
    (product) =>
      title.trim().toLowerCase() === product.title.trim().toLowerCase()
  );
}

function renderCart() {
  shoppingCart.forEach((element) => {
    const product = getProduct(element.title, products);
    const div = document.querySelector(".cart");
    console.log(element.quantity);
    // console.log(div);
    // console.log(product);

    const item = document.createElement("div");
    item.classList.add(
      "product-item",
      "w-[80%]",
      "h-[20%]",
      "flex",
      "flex-row",
      "mb-5",
      "border-b-2",
      "border-gray-300"
    );
    item.setAttribute("data-title", encodeURIComponent(product.title));

    item.innerHTML = `<div class="w-[15%] h-[30%]">
          <img
            class="w-full h-full"
            src="${product.image}"
            alt=""
          />
        </div>
        <div class="w-[100%] ml-10 mt-5">
          <h3 class="mb-3"><b>${product.title}</b></h3>
          <h4 class="mb-3"><b>${product.category}</b></h4>
          <p class="mb-2">
           ${product.description} 
          </p>

          <p class="mb-3"><b>Quantity: ${element.quantity}</b></p>
          <h4 class="mb-2"><b>Price: ${product.price}$</b></h4>
          <h4 class="mb-5"><b>Total: </b><b class="dynamic-price">${
            product.price * element.quantity
          }</b><b>$</b></h4>
          <form class="cart-form mb-5 flex justify-between">
          <div class="flex flex-col">
            <p class="mb-3">Add Quantity From 1 to 10</p>
            <select
              name="quantity"
              id="add-quantity"
              class="quantity w-[100%] rounded bg-stone-100 p-1"
              data-initial-price="${product.price}"
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

            <div class="flex flex-col">
            <p class="mb-3">Remove Quantity From 1 to 10</p>
            <select
              name="quantity"
              id="rm-quantity"
              class="quantity w-[100%] rounded bg-stone-100 p-1"
              data-initial-price="${product.price}"
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

        <div class="flex justify-end gap-4">
        <button
          type="button"
          class="rmBtn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-full mt-5"
        >
         Remove From Cart 
        </button>
            <button
          type="button"
          class="addBtn bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-8 rounded-full mt-5"
        >
         Add To Cart 
        </button>
        </div>
          </form>
        </div>
        <div class="flex justify-center items-center">
          <button class="remove-btn fa-solid fa-trash-can hover:text-red-500 fa-lg"></button>
        </div>
      </div>

`;
    item.querySelector(".remove-btn").addEventListener("click", function () {
      item.remove();

      const updatedCart = shoppingCart.filter(
        (cartItem) =>
          cartItem.title.trim().toLowerCase() !==
          product.title.trim().toLowerCase()
      );
      user.cart = updatedCart;
      localStorage.setItem("user", JSON.stringify(user));

      updateTotalPrice();
    });

    item.querySelector(".quantity").addEventListener("change", function (e) {
      let quantity = parseInt(e.target.value);
      // console.log(quantity);

      let initialPrice = parseFloat(
        e.target.getAttribute("data-initial-price")
      );
      let totalPrice = (initialPrice * quantity).toFixed(2);
      item.querySelector(".dynamic-price").textContent = totalPrice;
      updateTotalPrice();
    });

    item.querySelector(".cart-form").addEventListener("submit", function (e) {
      e.preventDefault();

      let shopCart = {};
      let addQuantity = parseInt(document.getElementById("add-quantity").value);
      let rmQuantity = parseInt(document.getElementById("rm-quantity").value);

      shopCart.title = product.title;
      shopCart.quantity = addQuantity;

      addToCart(shopCart, user.cart);

      localStorage.setItem("user", JSON.stringify(user));

      toast(true, "Added To Cart Successfully", "cart.html");
    });

    const addBtn = item.querySelector(".addBtn");
    const rmBtn = item.querySelector(".rmBtn");

    addBtn.addEventListener("click", function () {
      addToCart(
        {
          title: product.title,
          quantity: parseInt(
            parseInt(document.getElementById("add-quantity").value)
          ),
        },
        user.cart
      );
      localStorage.setItem("user", JSON.stringify(user));

      toast(true, "Added To Cart Successfully", "cart.html");

      // renderCart();
    });

    rmBtn.addEventListener("click", function () {
      removeItem(
        {
          title: product.title,
          quantity: parseInt(
            parseInt(document.getElementById("rm-quantity").value)
          ),
        },
        user.cart
      );
      localStorage.setItem("user", JSON.stringify(user));

      toast(true, "Removed From Cart Successfully", "cart.html");

      // renderCart();
    });

    div.appendChild(item);
  });
}

function updateTotalPrice() {
  let totalPrice = 0;
  const priceElements = document.querySelectorAll(".dynamic-price"); // All dynamic price elements

  priceElements.forEach((priceElement) => {
    totalPrice += parseFloat(priceElement.textContent); // Sum up all prices
  });

  // Assuming you have an element with the ID 'total-price' where you want to display the total price
  const totalPriceElement = document.getElementById("total-price");
  if (totalPriceElement) {
    totalPriceElement.innerHTML = `<b>Total price: ${totalPrice.toFixed(
      2
    )}$</b>`; // Update the text content with the total price
  }
}
renderCart();
updateTotalPrice();
