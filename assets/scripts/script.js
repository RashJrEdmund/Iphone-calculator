class Calculator {
    constructor(showAns, showWorking) {
        this.showAns = showAns
        this.showWorking = showWorking
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){
    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }
}


const numberButtons = document.querySelectorAll("[data-number");
console.log(numberButtons);
console.log("code works till here \n")
const operatorButtons = document.querySelectorAll("[data-operator]");
console.log(operatorButtons);
console.log("code works till here \n")
const equalButtons = document.querySelector("[data-equals]");
console.log(equalButtons);
console.log("code works till here \n")
const acButtons = document.querySelector("[data-ac]");
console.log(acButtons);
const showAns = document.querySelector("[data-show-ans]");
console.log(showAns, '\n');
const showWorking = document.querySelector("[data-show-working]");
console.log(showWorking, '\n');
console.log("code works till here \n")
document.write("hello");

const calculator = new calculator(showAns, showWorking)

numberButtons.forEach(button => {
    button.addEventListener('click',)
})