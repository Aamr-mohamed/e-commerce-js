export function toast(type, message, location) {
  const toastElement2 = document.createElement("div");
  toastElement2.innerHTML = type
    ? `<i class="fa-solid fa-circle-check text-green-600"></i>${message}`
    : `<i class="fa-regular fa-circle-xmark text-red-600"></i> ${message}`;

  let toastConfig = {
    node: toastElement2,
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "#fff",
      color: "black",
    },
  };

  if (location !== undefined) {
    toastConfig.callback = () => (window.location.href = location);
  }

  Toastify(toastConfig).showToast();
}
