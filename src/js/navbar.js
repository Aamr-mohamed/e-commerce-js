const navbar = document.createElement("nav");
navbar.classList.add(
  "bg-transparent",
  "w-full",
  "flex",
  "justify-between",
  "items-center",
  "py-3",
  "px-20"
);
navbar.innerHTML = `
      <h1 class="text-2xl font-bold text-[#e66576]" style="font-family: cinzel">
        Elite Ensemble
      </h1>
      <div
        class="relative w-[500px] rounded border- focus:ring-gray-200 focus:ring-1 flex items-center space-x-5"
      >
        <input
          class="w-full bg-gray-50 py-2 px-5 font-semibold placeholder-gray-500 text-black"
          type="text"
          placeholder="Search ..."
          autocomplete="off"
          aria-label="Search"
        />
        <button
          class="fa-solid fa-magnifying-glass text-gray-500 absolute right-0 px-3"
        ></button>
      </div>
      <div class="flex items-center">
        <ul class="flex space-x-10">
          <li>
            <div>
             <a href="#"><i class="fa-solid fa-user"></i></a>
            </div>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-bars"></i></a>
          </li>
        </ul>
      </div>`;
document.body.appendChild(navbar);
