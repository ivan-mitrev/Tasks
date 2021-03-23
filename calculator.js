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
        if (number === '.' && this.curentOperant.includes('.')) return
        this.curentOperant = this.curentOperant.toString() + number.toString()
    }
    chooseOperation(operation) {
        if (this.curentOperant === '') return
        if (this.previusOperant !== '') {
            this.compute()
        }
        this.operation = operation
        this.previusOperant = this.curentOperant
        this.curentOperant = ''
    }
    
    compute() {
        let camputatiom
        const prev = parseFloat(this.previusOperant)
        const current = parseFloat(this.curentOperant)
        if (isNan(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                camputatiom = prev + current
                break
            case '-':
                camputatiom = prev - current
                break
            case '*':
                camputatiom = prev * current
                break
            case '/':
                camputatiom = prev / current
                break
            default:
                return
        }

        this.curentOperant = camputatiom
        this.operation = undefined
        this.previusOperant = ''
    }
    updateDisplay() {
        this.curentText.innerText = this.curentOperant
        this.previusText.innerText = this.previusOperant
    }
}

const numberButtons = document.querySelectorAll(`[data-number]`)
const operationButtons = document.querySelectorAll(`[data-operation]`)
const equealsButton = document.querySelector(`[data-equals]`)
const deleteButton = document.querySelector(`[date-delete]`)
const allclearButton = document.querySelector(`[data-all-clear]`)
const previusText = document.querySelector(`[data-previus-operand]`)
const curentText = document.querySelector(`[data-current-operand]`)

const calcumator = new Calcumator(previusText, curentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calcumator.appendNumber(button.innerText)
        calcumator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calcumator.chooseOperation(button.innerText)
        calcumator.updateDisplay()
    })
})

equealsButton.addEventListener('click', button => {
    calcumator.compute()
    calcumator.updateDisplay()
})

allclearButton.addEventListener('click', button => {
    calcumator.clear()
    calcumator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calcumator.delete()
    calcumator.updateDisplay()
})