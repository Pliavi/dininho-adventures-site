(function() {
  /** @type [HTMLMediaElement] */
  const $playerWrappers = document.getElementsByClassName("video-player");

  for (const $playerWrapper of $playerWrappers) {
    const $player = $playerWrapper.querySelector("video");
    $playerWrapper.addEventListener("click", () => {
      if ($player.paused) {
        $player.play();
        $playerWrapper.classList.add("--playing");
        return;
      }

      $player.pause();
      $playerWrapper.classList.remove("--playing");
    });
  }
})();
