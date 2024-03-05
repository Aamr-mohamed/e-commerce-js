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
    item.innerHTML = `<div class="group relative cursor-pointer" id="item">
                         <img
                         src="${product.image}"
                         alt="product picture"
                         class=" h-[350px]"
                         />
                         <div
                         class="hidden group-hover:block absolute bottom-[28%] left-0 w-full px-[5%]"
                         >
                             <div class="flex justify-between">
                                 <div
                                 class="flex text-center items-center bg-neutral-100 border-r-[3px]"
                                 >
                                     <button class="minus fa-solid fa-minus px-2"></button>
                                     <p class="text-gray-600 quantity">1</p>
                                     <button class="plus fa-solid fa-plus px-2"></button>
                                 </div>

                                 <button class="bg-neutral-600 text-white rounded p-2 float-end">
                                 Add to Cart
                                 </button>
                             </div>
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

    const div = document
      .getElementById("item")
      .addEventListener("click", function () {
        console.log("clicked");
        window.location.href = "item.html";
      });

    item.querySelector(".minus").addEventListener("click", function () {
      let quantityP = this.nextElementSibling;
      let quantity = parseInt(quantityP.innerText);
      if (quantity > 1) {
        quantityP.innerText = quantity - 1;
      }
    });
  });
}
