document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector("#burger");
  const burgerItem = document.querySelector(".burger__list");

  burgerItem.addEventListener("click", toggle);

  function toggle(event) {
    if (event.target.matches("ul")) return;
    burger.checked = !burger.checked;
  }
});
