alert("Si ves esto eres kiuti");

let count = 0;

const button = document.getElementById("loveBtn");
const counterText = document.getElementById("counter");

button.addEventListener("click", () => {
  count++;
  counterText.textContent = count;
});
