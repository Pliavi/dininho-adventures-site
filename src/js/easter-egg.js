(function() {
  let eggCounter = 0;

  document.querySelectorAll(".separator").forEach($egg => {
    $egg.addEventListener("click", checkEggCount);
  });

  function checkEggCount({currentTarget: $egg}) {
    eggCounter += 1
    if (eggCounter > 3) {
      showKey();
    }
    
    $egg.removeEventListener("click", checkEggCount);
  }

  function showKey() {
    const $easterEgg = document.getElementById("easter-egg");
    const $keyMover = document.getElementById("key-mover");

    $easterEgg.classList.add("--playing");
    $keyMover.classList.add("--playing");

    setTimeout(() => {
      $easterEgg.style.display = "none";
    }, 4000); // XXX: this 4s is from 3s delay and 1s animation in css
  }
})();
