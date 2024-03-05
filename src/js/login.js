import { toast } from "./utils/toasts.js";

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

    // console.log(user);
    let email = user.email;
    let password = user.password;

    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      if (userExists.password === password) {
        user.cart = userExists.cart;
        localStorage.setItem("user", JSON.stringify(user));

        toast(true, "Logged In Successfully.", "home.html");
      } else {
        toast(false, "Wrong Password.");
      }
    } else {
      toast(false, "User not found");
    }
  });
