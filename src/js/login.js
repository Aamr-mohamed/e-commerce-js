import { toast } from "./utils/toasts.js";

const user = JSON.parse(localStorage.getItem("user"));
const users = JSON.parse(localStorage.getItem("users"));

if (user && users) {
  const userIndex = users.findIndex((u) => u.username === user.username);
  if (userIndex !== -1) {
    users[userIndex] = user;

    localStorage.setItem("users", JSON.stringify(users));
  }
}

localStorage.removeItem("user");

document.getElementById("form-login").addEventListener("submit", function (e) {
  e.preventDefault();

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
      user.username = userExists.username;
      user.theme = userExists.theme;
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
