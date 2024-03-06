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

shoppingCart.forEach((element) => {
  const product = getProduct(element.title, products);
  const div = document.querySelector(".cart");
  console.log(div);
  console.log(product);

  const item = document.createElement("div");
  item.classList.add(
    "product-item",
    "w-[80%]",
    "h-[20%]",
    "flex",
    "flex-row",
    "mb-5"
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
          <h4 class="mb-5"><b>Price: ${product.price}$</b></h4>
          <form>
            <p class="mb-3">Quantity From 1 to 10</p>
            <select
              name="quantity"
              id="quantity"
              class="w-[15%] bg-stone-100 p-1"
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
          </form>
        </div>
        <div class="flex justify-center items-center">
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>

`;
  div.appendChild(item);
});
