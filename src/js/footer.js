const footer = document.createElement("footer");
footer.setAttribute("class", "mt-[70px] p-[40px] bg-[#f5f5f5]");

footer.innerHTML = `
    <div
        class="w-[80%] m-auto flex justify-between flex-wrap g-row-[30px]"
        style="column-gap: clamp(20px, 30px, 40px)"
      >
        <div style="width: clamp(20%, 30%, 40%)">
          <h4 class="font-bold mb-[30px] text-[#e66576]">Elite Ensemble</h4>
          <p>
            Elite Ensemble offers a curated selection of luxury fashion and
            accessories, blending quality with style. Discover timeless elegance
            and the latest trends, all underpinned by our commitment to
            exceptional service. Elevate your wardrobe with Elite Ensemble,
            where every piece is a statement of sophistication.
          </p>
        </div>

        <div>
          <h4 class="font-bold mb-[30px] text-gray-700">About Us</h4>
          <p class="mb-[30px]">Careers</p>
          <p class="mb-[30px]">Our Stores</p>
          <p class="mb-[30px]">Terms & Conditions</p>
          <p class="mb-[30px]">Privacy Policy</p>
        </div>

        <div>
          <h4 class="font-bold mb-[30px] text-gray-700">Customer Care</h4>
          <p class="mb-[30px]">Help Center</p>
          <p class="mb-[30px]">Track Your Order</p>
          <p class="mb-[30px]">Corporate & Bulk Purchasing</p>
          <p class="mb-[30px]">Returns & refunds</p>
        </div>

        <div>
          <h4 class="font-bold mb-[30px] text-gray-700">Contact Us</h4>
          <p class="mb-[30px]">50 north street of clothes</p>
          <p class="mb-[30px]">Email: ELiteENsemble@clothes.com</p>
          <p class="mb-[30px]">+02 0123 456 7890</p>
        </div>
    </div>`;

document.body.appendChild(footer);
