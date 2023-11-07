const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+?><|\~`-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length >= password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
    updatePasswordStrength(password);
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

let eyeIcon = document.getElementById("eye-icon")

function clickEye() {
    if(passwordBox.type == "password"){
        passwordBox.type = "text";
        eyeIcon.src = "./images/hide.png"
    } else {
        passwordBox.type = "password";
        eyeIcon.src = "./images/eye.png"
    }
}

let msg = document.getElementById("message")
let str = document.getElementById("strength")

function getPasswordStrength(passwordBox) {
    if (passwordBox.length < 5) {
      return "Weak";
    } else if (passwordBox.length < 8) {
      return "Medium";
    } else {
      return "Strong";
    }
  }


function updatePasswordStrength(password) {
  if (password.length > 0) {
      msg.style.display = "block";
      str.textContent = "" + getPasswordStrength(password);
  } else {
      msg.style.display = "none";
  }
}

passwordBox.addEventListener("input", () => {
  updatePasswordStrength(passwordBox.value);
});


