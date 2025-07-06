let formEl = document.getElementById("form-login");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  // username password check
  if (!username || !password) {
    alert("write username and password.");
    return;
  }

  // Username regex
  if (!/^[a-zA-Z0-9_]{3,}$/.test(username)) {
    alert(
      "Username should be at least 3 signs and only letter,number or underscore."
    );
    return;
  }

  // Password regex
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/.test(
      password
    )
  ) {
    alert(
      "password should be 8-20 signs, uppercase and lowercase letters, numbers and special sign."
    );
    return;
  }

  // Username  Cookies
  let checkbox = document.getElementById("save");
  if (checkbox.checked) {
    Cookies.set("saved_username", username);
  } else {
    Cookies.remove("saved_username");
  }

  window.location.href = "./home.html";
});

// Show/hide password
document
  .getElementById("togglePassword")
  .addEventListener("change", function () {
    let passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
  });

// Username cookie auto fill
let savedUsername = Cookies.get("saved_username");
if (savedUsername) {
  document.getElementById("username").value = savedUsername;
  document.getElementById("save").checked = true;
}
