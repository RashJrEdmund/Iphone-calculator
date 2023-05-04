import { resHolder } from "./script";

const evaluate = (firstVal, currentVal, operator) => {
  switch (operator) {
    case "+":
      resHolder.answer = firstVal + currentVal;
      break;
    case "-":
      resHolder.answer = firstVal - currentVal;
      break;
    case "*":
      resHolder.answer = firstVal * currentVal;
      break;
    case "/":
      resHolder.answer = firstVal / currentVal;
      break;
    default:
        console.log('evaluate ended')
      break;
  }
  showAns.innerHTML = resHolder.answer;
};

export default evaluate;
