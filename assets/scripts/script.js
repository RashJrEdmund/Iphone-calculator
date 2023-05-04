const numberButtons = document.querySelectorAll("[data-number");
const operatorButtons = document.querySelectorAll("[data-operator]");

const equalsBtn = document.querySelector("[data-equals]");
const backBtn = document.querySelector("[data-back]");
const acButton = document.querySelector("[data-ac]");
const showAns = document.querySelector("[data-show-ans]");
const showWorking = document.querySelector("[data-show-working]");

let results = 0;

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
  if (!text.includes(".")) document.getElementById(".").disabled = false;

  showWorking.innerHTML = text || 0;
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (+showWorking.innerHTML === 0 && showWorking.innerHTML.length <= 1) {
      if (button.id === ".") {
        showWorking.innerHTML = "0" + button.id;
        button.disabled = true;
        return;
      }

      showWorking.innerHTML = button.id;
      return;
    }

    showWorking.append(button.id);
    if (button.id === ".") button.disabled = true;
  });
});

const mathOperations = (btn, currentVal) => {
  switch (btn) {
    case "+":
      results += currentVal;
      break;
    case "-":
      results -= currentVal;
      break;
    case "*":
      results *= currentVal;
      break;
    case "/":
      results /= currentVal;
      break;
    default:
      break;
  }
  showAns.innerHTML = results;
};

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (showWorking.innerHTML.length <= 0) return;

    mathOperations(button.id, +showWorking.innerHTML);
    showWorking.innerHTML = 0;
  });
});
