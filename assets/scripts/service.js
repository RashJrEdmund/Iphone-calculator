
const evaluate = (firstVal, currentVal, operator) => {
  switch (operator) {
    case '+':
      resHolder.answer = firstVal + currentVal
      break
    case '-':
      resHolder.answer = firstVal - currentVal
      break
    case 'x':
      resHolder.answer = firstVal * currentVal
      break
    case '÷':
      resHolder.answer = firstVal / currentVal
      break
    case '%':
      resHolder.answer = (firstVal / 100) * currentVal
      break
    default:
      break
  }

  showAns.innerHTML = resHolder.answer
}

export default evaluate
