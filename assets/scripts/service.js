import { resHolder } from './script.js'
const showAns = document.querySelector('[data-show-ans]')

const evaluate = (firstVal, currentVal, operator) => {
  switch (operator) {
    case '+':
      resHolder.answer = firstVal + currentVal
      console.log('this plus', firstVal + currentVal)
      break
    case '-':
      resHolder.answer = firstVal - currentVal
      console.log('this minus', firstVal - currentVal)
      break
    case '*':
      resHolder.answer = firstVal * currentVal
      console.log('this times', firstVal * currentVal)
      break
    case '÷':
      resHolder.answer = firstVal / currentVal
      console.log('this div', firstVal / currentVal)
      break
    case '%':
      resHolder.answer = (firstVal / 100) * currentVal
      console.log('this div', firstVal / currentVal)
      break
    default:
      console.log('evaluate ended')
      break
  }

  if (resHolder.answer === 0) {
    resHolder.answer = null
    showAns.innerHTML = 0
  } else showAns.innerHTML = resHolder.answer
}

export default evaluate
