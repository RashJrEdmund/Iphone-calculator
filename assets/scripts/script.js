import evaluate from "./service";

const numberButtons = document.querySelectorAll("[data-number");
const operatorButtons = document.querySelectorAll("[data-operator]");

const equalsBtn = document.querySelector("[data-equals]");
const backBtn = document.querySelector("[data-back]");
const acButton = document.querySelector("[data-ac]");
const showAns = document.querySelector("[data-show-ans]");
const showWorking = document.querySelector("[data-show-working]");

const resHolder = {
  answer: null,
  currOperator: "",
};

const blinkShowWorking = () => {
  showWorking.style.backgroundColor = "gold";
  setTimeout(() => {
    showWorking.style.backgroundColor = "#000";
  }, 50);
};

acButton.addEventListener("click", () => {
  showWorking.innerHTML = 0;
  showAns.innerHTML = 0;
  document.getElementById(".").disabled = false;
  resHolder.answer = 0;
  resHolder.currOperator = null;
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

  if (resHolder.currOperator) {
    const vals = showWorking.textContent.split(resHolder.currOperator);
    evaluate(+vals[0], +vals[1] || 0, resHolder.currOperator);
  }
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
      evaluate(+vals[0], +vals[1] || 0, resHolder.currOperator);
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

//   showAns.innerHTML = Math.round(resHolder.answer) !== resHolder.answer
//     ? resHolder.answer.toFixed(3)
//     : resHolder.answer;
// };

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (showWorking.innerHTML.length <= 0) return;

    if (resHolder.answer && resHolder.currOperator) {
      showWorking.textContent = resHolder.answer;
    }

    showWorking.textContent += button.id;

    resHolder.currOperator = button.id;

    blinkShowWorking();
    document.getElementById(".").disabled = false;

    // if (resHolder.answer) showWorking.innerHTML = "";
  });
});
