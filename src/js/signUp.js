let existingUsers = JSON.parse(localStorage.getItem("users"));

if (!existingUsers) {
  localStorage.setItem("users", JSON.stringify([]));
  existingUsers = [];
}
// localStorage.removeItem("users");
const form = document
  .getElementById("signUp-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let user = {};
    const formData = new FormData(this);

    formData.forEach((value, key) => {
      user[key] = value;
    });

    let userName = user.username;
    let email = user.email;

    const userExists = existingUsers.some((existingUser) => {
      return existingUser.username === userName || existingUser.email === email;
    });
    if (userExists) {
      const toastElement = document.createElement("div");
      toastElement.innerHTML = `<i class="fa-regular fa-circle-xmark text-red-600"></i> User already exists.`;

      Toastify({
        node: toastElement,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#fff",
          color: "black",
        },
      }).showToast();
    } else {
      existingUsers.push(user);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      const toastElement2 = document.createElement("div");
      toastElement2.innerHTML = `<i class="fa-solid fa-circle-check text-green-600"></i> Registered Successfully.`;

      Toastify({
        node: toastElement2,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        callback: () => {
          window.location.href = "login.html";
        },
        style: {
          background: "#fff",
          color: "black",
        },
      }).showToast();
    }
  });
