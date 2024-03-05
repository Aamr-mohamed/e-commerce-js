import { toast } from "./utils/toasts.js";

let existingUsers = JSON.parse(localStorage.getItem("users"));

localStorage.removeItem("user");

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
      toast(false, "User already exists.");
    } else {
      user.cart = [];
      existingUsers.push(user);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      toast(true, "Registered Successfully.", "login.html");
    }
  });
