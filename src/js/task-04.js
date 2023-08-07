const decrementButton = document.querySelector('[data-action="decrement"]');

const incrementButton = document.querySelector('[data-action="increment"]');

const valueElement = document.querySelector("#value");

let counterValue = 0;

function updateCounter() {
  valueElement.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});
