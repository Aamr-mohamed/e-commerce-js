const navbar = document.createElement("nav");
let user = JSON.parse(localStorage.getItem("user"));

navbar.classList.add(
  "bg-transparent",
  "w-full",
  "flex",
  "justify-between",
  "items-center",
  "py-3",
  "pr-20",
  "pl-10"
);
navbar.innerHTML = `
      <a href="home.html">
      <h1 class="text-2xl font-bold text-[#e66576]" style="font-family: cinzel">
        Elite Ensemble
      </h1>
      </a>
      <div
        id="search-container"
        class="relative w-[500px] rounded border- focus:ring-gray-200 focus:ring-1 flex flex-col items-center space-x-5"
      >
        <input
          id="search-bar"
          class="w-full bg-gray-50 py-2 px-5 font-semibold placeholder-gray-500 text-black"
          type="text"
          placeholder="Search items..."
          autocomplete="off"
          aria-label="Search"
        />
        <button
          class="search fa-solid fa-magnifying-glass text-gray-500 absolute top-3 right-0 px-3"
        ></button>
        <div id="result-container" class="absolute top-10 z-20 bg-white w-[500px] mt-2 rounded px-4"></div>
        <p class="absolute top-10 z-20" id="item-unavailable-txt"></p>
      </div>

     
      <div class="flex items-center">
        <ul class="flex space-x-10">
          <li>
          <button class="theme fa-solid fa-moon fa-lg" title="Theme"></button>
          </li>

          <li>
            <a href="products.html"><i class="fa-solid fa-bag-shopping fa-lg" title="products"></i></a>
          </li>

          <li>
          <a href="cart.html"><i class="fa-solid fa-cart-shopping fa-lg" title="shoppingCart"></i></a>
          </li>
          
          
        <div class="relative">
          <span class="sr-only">Open user menu</span>
          <button id="user-menu-button" class="fa-solid fa-user fa-lg flex justify-center"></button>

        <div id="user-menu-dropdown" class="hidden absolute z-20 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Welcome ${
            user ? user.username : "user"
          }</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">About Coming Soon</a>
          <a href="login.html" id="auth-link" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">${
            user ? "Sign out" : "Login"
          }</a>
        </div>
      </div>
      
        </ul>
      </div>`;

document.body.appendChild(navbar);

const userMenuButton = document.getElementById("user-menu-button");
const userMenuDropdown = document.getElementById("user-menu-dropdown");

userMenuButton.addEventListener("click", (event) => {
  userMenuDropdown.classList.toggle("hidden");
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("#user-menu")) {
    userMenuDropdown.classList.add("hidden");
  }
});

document.querySelector(".theme").addEventListener("click", function () {
  if (user) {
    user.theme = user.theme === "light" ? "dark" : "light";

    localStorage.setItem("user", JSON.stringify(user));
  }
});
