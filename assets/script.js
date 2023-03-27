var inputEmail = document.querySelector('#email');
var yourName = document.querySelector('#u-name');
var inputPassword = document.querySelector('#password');
var msgDiv = document.querySelector('#msg');
var card = document.querySelectorAll('.card');
var signUp = document.querySelector('#sign-up');
var useMail = document.querySelector('#user-email');
var useUser = document.querySelector('#user-name');
var usePw = document.querySelector('#user-password');

lastUserRender();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function lastUserRender() {
  var email = localStorage.getItem('email');
  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');

  if (!email || !username || !password) {
    return;
  }

  useMail.textContent = email;
  useUser.textContent = username;
  usePw.textContent = password;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var username = document.querySelector('#u-name').value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (username === "") {
    displayMessage("error, Username cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    lastUserRender();
  }
});