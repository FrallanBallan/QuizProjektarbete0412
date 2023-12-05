let mousePos = document.documentElement;
mousePos.addEventListener("mousemove", (e) => {
  mousePos.style.setProperty("--x", e.clientX + "px");
  mousePos.style.setProperty("--y", e.clientY + "px");
});
