import { resHolder } from "./script.js";
const showAns = document.querySelector("[data-show-ans]");

const evaluate = (firstVal, currentVal, operator) => {
  console.log(currentVal)
  switch (operator) {
    case "+":
      resHolder.answer = firstVal + currentVal;
      console.log('this plus', firstVal + currentVal)
      break;
    case "-":
      resHolder.answer = firstVal - currentVal;
      console.log('this minus', firstVal - currentVal)
      break;
    case "*":
      resHolder.answer = firstVal * currentVal;
      console.log('this times', firstVal * currentVal)
      break;
    case "÷":
      resHolder.answer = firstVal / currentVal;
      console.log('this div', firstVal / currentVal)
      break;
    default:
      console.log("evaluate ended");
      break;
  }
  showAns.innerHTML = resHolder.answer;
};

export default evaluate;
