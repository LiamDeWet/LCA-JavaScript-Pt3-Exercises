const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const spellArea = document.getElementById("spellArea");
const ingredients = document.querySelectorAll("#ingredientsList li");

//generate random colour
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

//for task 3, 4, 5
generateButton.addEventListener("click", () => {
  let countdown = 3;

  spellArea.textContent = countdown;

  const timer = setInterval(() => {
    countdown--;

    if (countdown > 0) {
      spellArea.textContent = countdown;
    } else {
      clearInterval(timer);

      const randomIndex = Math.floor(Math.random() * ingredients.length);

      const spell = ingredients[randomIndex].textContent;
      spellArea.textContent = `Your Spell Is: ${spell} `;

      spellArea.style.backgroundColor = getRandomColor();
    }
  }, 1000);
});

//task 6
resetButton.addEventListener("click", () => {
  spellArea.textContent = "Your spell will appear here...";
  spellArea.style.backgroundColor = "lightgray";
});
