import { Stack } from "swing";

document.addEventListener("DOMContentLoaded", function() {
  const stack = new Stack();
  const cards = document.querySelectorAll(".stack li");

  cards.forEach(card => {
    stack.createCard(card);
    card.classList.add("in-deck");
  });

  stack.on("throwout", function(e) {
    console.log(
      e.target.innerText || e.target.textContent,
      "has been thrown out of the stack to the",
      e.throwDirection,
      "direction."
    );

    e.target.classList.remove("in-deck");
  });

  stack.on("throwin", function(e) {
    console.log(
      e.target.innerText || e.target.textContent,
      "has been thrown into the stack from the",
      e.throwDirection,
      "direction."
    );

    e.target.classList.add("in-deck");
  });
});
