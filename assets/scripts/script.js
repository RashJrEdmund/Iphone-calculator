// import evaluate from "./service";

const numberButtons = document.querySelectorAll("[data-number");
const operatorButtons = document.querySelectorAll("[data-operator]");

const equalsBtn = document.querySelector("[data-equals]");
const backBtn = document.querySelector("[data-back]");
const acButton = document.querySelector("[data-ac]");
const showAns = document.querySelector("[data-show-ans]");
const showWorking = document.querySelector("[data-show-working]");

export const resHolder = {
  answer: 0,
  currOperator: "",
  work: false,
};

acButton.addEventListener("click", () => {
  showWorking.innerHTML = 0;
  document.getElementById(".").disabled = false;
  resHolder.answer = 0;
});

backBtn.addEventListener("click", () => {
  let text = showWorking.innerHTML;
  text = text.slice(0, -1);

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

    showWorking.textContent += button.id;
    if (button.id === ".") button.disabled = true;

    if (resHolder.currOperator) {
      const vals = showWorking.textContent.split(resHolder.currOperator);
      evaluate(+vals[0], +vals[1], resHolder.currOperator);
    }
  });
});

// const evaluate = (firstVal, currentVal, operator) => {
//   switch (operator) {
//     case "+":
//       resHolder.answer = firstVal + currentVal;
//       break;
//     case "-":
//       resHolder.answer = firstVal - currentVal;
//       break;
//     case "*":
//       resHolder.answer = firstVal * currentVal;
//       break;
//     case "/":
//       resHolder.answer = firstVal / currentVal;
//       break;
//     default:
//       break;
//   }
//   showAns.innerHTML = resHolder.answer;
// };

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (showWorking.innerHTML.length <= 0) return;

    showWorking.textContent += button.id;

    resHolder.currOperator = button.id;
    // showWorking.innerHTML = 0;
  });
});
