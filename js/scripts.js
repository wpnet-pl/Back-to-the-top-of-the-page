(function () {
  function createButton() {
    var button = document.createElement("button");
    button.classList.add("backToTop", "hidden");
    button.textContent = "Powrót do góry";
    document.body.appendChild(button);

    return button;
  }

  var button = createButton();

  function animateScroll() {
    if (window.scrollY > 0) {
      window.scrollBy(0, -5);
      setTimeout(animateScroll, 10);
    }
  }

  button.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();

      animateScroll();
    },
    false
  );

  window.addEventListener(
    "scroll",
    function (e) {
      console.log(window.scrollY);
      if (window.scrollY >= 100) {
        button.classList.remove("hidden");
      } else {
        button.classList.add("hidden");
      }
    },
    false
  );
})();
