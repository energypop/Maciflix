let i = 0;
let text = "Iniciar sesión";
const TARGET = document.getElementById("login-typewriter");

function Write() {
  if (i <= text.length) {
    document.getElementById(TARGET).innerHTML += text.charAt(i);
    i++;
    setTimeout(Effect, 80);
  }
}
document.addEventListener("DOMContentLoaded", Write());
