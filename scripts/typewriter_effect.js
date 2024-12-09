let i = 0;
let text = "Iniciar sesión";

function Effect() {
  if (i <= text.length) {
    document.getElementById("login-typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(Effect, 80);
  }
}

document.addEventListener("DOMContentLoaded", Effect());
