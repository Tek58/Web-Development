class Calculator {
    constructor(prevTextElement, currTextElement) {
      this.prevTextElement = prevTextElement
      this.currTextElement = currTextElement
      this.clear()
    }
  
    clear() {
      this.current = ''
      this.previous = ''
      this.operator = undefined
    }
  
    appendNumber(number) {
      if (number === '.' && this.current.includes('.')) return
      this.current = this.current.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.current === '') return
      if (this.previous !== '') {
        this.compute()
      }
      this.operator = operation
      this.previous = this.current
      this.current = ''
    }
  
    compute() {
      let computation
      const prevv = parseFloat(this.previous)
      const curr = parseFloat(this.current)
      if (isNaN(prevv) || isNaN(curr)) return
      switch (this.operator) {
        case '+':
          computation = prevv + curr
          break
        case '-':
          computation = prevv - curr
          break
        case '*':
          computation = prevv * curr
          break
        case 'MAX':
          computation = Math.max(prevv,curr)
          break
        case 'MIN':
          computation = Math.min(prevv,curr)
          break
        case 'POW':
          computation = Math.pow(prevv,curr)
          break
        case '÷':
          if (curr == 0){
            computation =  'invalid input'
          }
          else{
            computation = prevv / curr
          }
          break
        default:
          return
      }
      this.current = computation
      this.operator = undefined
      this.previous = ''
    }
  
    // getDisplayNumber(number) {
      // const stringNumber = number.toString()
      // const integerDigits = parseFloat(stringNumber.split('.')[0])
      // const decimalDigits = stringNumber.split('.')[1]
      // let integerDisplay
      // if (isNaN(integerDigits)) {
      //   integerDisplay = ''
      // } else {
      //   integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      // }
      // if (decimalDigits != null) {
      //   return `${integerDisplay}.${decimalDigits}`
      // } else {
      //   return integerDisplay
      // }
    // }
  
    updateDisplay() {
      // this.currTextElement.innerText =
      //   this.getDisplayNumber(this.current)
      // if (this.operator != null) {
      //   this.prevTextElement.innerText =
      //     `${this.getDisplayNumber(this.previous)} ${this.operator}`
      // } else {
      //   this.prevTextElement.innerText = ''
      // }
      this.currTextElement.innerText = this.current
      this.prevTextElement.innerText = this.previous
    }
    
  }
  
  
const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('#equal')
const allClearButton = document.querySelector('#clear')
const prevTextElement = document.querySelector('#prev')
const currTextElement = document.querySelector('#curr')

const calculator = new Calculator(prevTextElement, currTextElement)

numberButtons.forEach(button => {
button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
})
})

operationButtons.forEach(button => {
button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
})
})

equalsButton.addEventListener('click', button => {
calculator.compute()
calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
calculator.clear()
calculator.updateDisplay()
})

