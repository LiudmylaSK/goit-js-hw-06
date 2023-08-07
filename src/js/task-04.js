// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

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

updateCounter();
