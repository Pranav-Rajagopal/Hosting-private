const text = "Hey, I'm Pranav 👋";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 90);
  }
}

window.onload = typeWriter;
