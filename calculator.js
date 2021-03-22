class Calcumator {
    constructor(previusText, curentText) {
        this.previusText = previusText
        this.curentText = curentText
        this.clear()
    }

    clear() {
        this.curentOperant = ''
        this.previusOperant = ''
        this.operation = undefined
    }
    delete() {

    }
    appendNumber(number) {
        this.curentOperant = number
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.curentText.innerText = this.curentOperant
    }
}

const numberButtons = document.querySelectorAll(`[data-number]`)
const operationButtons = document.querySelectorAll(`[data-operation]`)
const equealsButton = document.querySelector(`[data-equals]`)
const deleteButton = document.querySelector(`[date-delete]`)
const allclearButton = document.querySelector(`[data-all-clear]`)
const previusText = document.querySelector(`[data-privius-operant]`)
const curentText = document.querySelector(`[data-current-operand]`)

const calcumator = new Calcumator(previusText, curentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calcumator.appendNumber(button.innerText)
        calcumator.updateDisplay()
    })
})