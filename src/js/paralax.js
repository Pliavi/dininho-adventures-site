(function() {
  const $paralax = document.getElementById("paralax");

  $paralax.style.setProperty("--paralax-move-x", "0px");
  $paralax.style.setProperty("--paralax-move-y", "0px");
  $paralax.addEventListener("mousemove", e => {
    $paralax.style.setProperty("--paralax-move-x", `${e.clientX * 0.025}px`);
    $paralax.style.setProperty("--paralax-move-y", `${e.clientY * 0.025}px`);
  });
})();
