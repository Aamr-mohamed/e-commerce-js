localStorage.removeItem("user");

const form = document

  .getElementById("form-login")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));

    let user = {};
    const formData = new FormData(this);

    formData.forEach((value, key) => {
      user[key] = value;
    });

    console.log(user);
    let email = user.email;
    let password = user.password;

    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      if (userExists.password === password) {
        localStorage.setItem("user", JSON.stringify(user));
        const toastElement2 = document.createElement("div");
        toastElement2.innerHTML = `<i class="fa-solid fa-circle-check text-green-600"></i> Logged In Successfully.`;

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
            window.location.href = "home.html";
          },
          style: {
            background: "#fff",
            color: "black",
          },
        }).showToast();
      } else {
        const toastElement = document.createElement("div");
        toastElement.innerHTML = `<i class="fa-regular fa-circle-xmark text-red-600"></i> Wrong Password.`;

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
      }
    } else {
      const toastElement = document.createElement("div");
      toastElement.innerHTML = `<i class="fa-regular fa-circle-xmark text-red-600"></i> User not found`;

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
    }
  });
