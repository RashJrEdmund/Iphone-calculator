
const numberButtons = document.querySelectorAll('[data-number')
const operatorButtons = document.querySelectorAll('[data-operator]')

const equalsBtn = document.querySelector('[data-equals]')
const backBtn = document.querySelector('[data-back]')
const acButton = document.querySelector('[data-ac]')
const showAns = document.querySelector('[data-show-ans]')
const showWorking = document.querySelector('[data-show-working]')

export const resHolder = {
  answer: 0,
  firstValue: '',
  secondValue: '',
  currOperator: ''
}

const blinkShowWorking = () => {
  showWorking.style.backgroundColor = 'gold'
  setTimeout(() => {
    showWorking.style.backgroundColor = '#000'
  }, 50)
}

equalsBtn.addEventListener('click', () => {
  resHolder.firstValue = resHolder.answer
  resHolder.secondValue = ''
  showAns.innerHTML = resHolder.answer
  showWorking.innerHTML = resHolder.answer
  blinkShowWorking()
})

acButton.addEventListener('click', () => {
  showWorking.innerHTML = 0
  showAns.innerHTML = 0
  document.getElementById('.').disabled = false
  resHolder.answer = 0
  resHolder.currOperator = null
})

backBtn.addEventListener('click', () => {
  const text = showWorking.innerHTML

  if (isNaN(text.slice(-1))) document.getElementById('.').disabled = false

  if (!text.includes('.')) document.getElementById('.').disabled = false

  if (isNaN(text.slice(-2).slice(0, 1))) document.getElementById('.').disabled = true

  showWorking.innerHTML = text.slice(0, -1) || 0

  if (resHolder.currOperator) {
    const vals = showWorking.textContent.split(resHolder.currOperator)
    evaluate(+vals[0], +vals[1] || 0, resHolder.currOperator)
  }
})

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (+showWorking.innerHTML === 0 && showWorking.innerHTML.length <= 1) {
      if (button.id === '.') {
        showWorking.innerHTML = '0' + button.id
        button.disabled = true
        return
      }

      showWorking.innerHTML = +button.id
      return
    }

    showWorking.textContent += button.id
    if (button.id === '.') button.disabled = true

    if (resHolder.currOperator) {
      console.log('operator found', resHolder.currOperator)
      const regex = /\d[-+÷x%]/ // exmaple: to match "3-" in "-3-40"
      const match = showWorking.textContent.match(regex)[0]
      const vals = showWorking.textContent.split(match)
      vals[0] += match.slice(0, -1)
      // const operator = match.slice(-1);

      evaluate(+vals[0], +vals[1] || 0, resHolder.currOperator)
    }
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (showWorking.innerHTML.length <= 0) return

    if (resHolder.answer.toString() && resHolder.currOperator) {
      // checking for ".toString()" bcs at some point resHolder.answer will be zero
      // and will cause this condition to fail cause the truthiness of zero is false.
      showWorking.textContent = resHolder.answer
    }

    showWorking.textContent += button.id

    resHolder.currOperator = button.id

    blinkShowWorking()
    document.getElementById('.').disabled = false
  })
})
