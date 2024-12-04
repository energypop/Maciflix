let i = 0;
let text = "Iniciar sesión";

function Effect() {
  while (i < text.length) {
    document.getElementById("login-typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(Effect, 100);
  }
}

Effect();
