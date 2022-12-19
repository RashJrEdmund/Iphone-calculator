class Calculator {
  constructor(showWorking, showAns) {
    this.showAns = showAns
    this.showWorking = showWorking
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
  }

  appendNumber(number) {
    this.currentOperand += number.
  }

  chooseOperation(operation) {
  }

  compute() {

  }

  updateDisplay() {
    this.showWorking.innerText = this.currentOperand
  }
}


const numberButtons = document.querySelectorAll('[data-number')
console.log(numberButtons)

const operatorButtons = document.querySelectorAll('[data-operator]')
const equalButtons = document.querySelector('[data-equals]')
const acButtons = document.querySelector('[data-ac]')
const showAns = document.querySelector('[data-show-ans]')
const showWorking = document.querySelector('[data-show-working]')
document.write('hello')

const calculator = new Calculator(showWorking, showAns)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
