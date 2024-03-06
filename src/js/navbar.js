const navbar = document.createElement("nav");
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
             <a href="#"><i class="fa-solid fa-user" title="Account"></i></a>
          </li>
          <li>
            <a href="products.html"><i class="fa-solid fa-bag-shopping" title="products"></i></a>
          </li>
          <li>
          <a href="cart.html"><i class="fa-solid fa-cart-shopping" title="shoppingCart"></i></a>
          </li>
          
          <li>
            <a href="#"><i class="fa-solid fa-bars"></i></a>
          </li>
        </ul>
      </div>`;

document.body.appendChild(navbar);
