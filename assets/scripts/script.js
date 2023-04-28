const numberButtons = document.querySelectorAll("[data-number");
console.log(numberButtons);

const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButtons = document.querySelector("[data-equals]");

const backBtn = document.querySelector("[data-back]");
const acButton = document.querySelector("[data-ac]");
const showAns = document.querySelector("[data-show-ans]");
const showWorking = document.querySelector("[data-show-working]");

document.write("hello");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (+showWorking.innerHTML === 0) {
      showWorking.innerHTML = button.id;
      return;
    }

    showWorking.append(button.id);
    if (button.id === ".") button.disabled = true;
  });
});

acButton.addEventListener("click", () => {
  showWorking.innerHTML = 0;
  document.getElementById(".").disabled = false;
});

backBtn.addEventListener("click", () => {
  let text = showWorking.innerHTML;
  text = text.slice(0, text.length - 1);
  if (!/\d/.test(+[...text].pop())) {
    document.getElementById(".").disabled = false;
    text = text.slice(0, text.length - 1);
  }

  showWorking.innerHTML = text || 0;
  // console.log(JSON.parse(showWorking.innerHTML), text);
});
