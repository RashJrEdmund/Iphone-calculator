const numberButtons = document.querySelectorAll("[data-number");
const operatorButtons = document.querySelectorAll("[data-operator]");

const equalsBtn = document.querySelector("[data-equals]");
const backBtn = document.querySelector("[data-back]");
const acButton = document.querySelector("[data-ac]");
const showAns = document.querySelector("[data-show-ans]");
const showWorking = document.querySelector("[data-show-working]");

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
      console.log("inner check entered", showWorking.innerHTML.length);
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

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (+showWorking.innerHTML === 0) {
      showWorking.innerHTML = button.id;
      return;
    }

    showWorking.append(button.id);
    if (button.id === ".") button.disabled = true;
  });
});
