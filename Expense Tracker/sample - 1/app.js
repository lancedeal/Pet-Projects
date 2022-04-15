
// Budget

let budget = 0

const budgetInput = document.getElementById('budget')
const budgetDisplay = document.getElementById('budget-display')
const budgetBtn = document.getElementById('budget-btn').addEventListener('click', () => {
    budget = budgetInput.value
    budgetDisplay.textContent = budget
    budgetInput.value = ''
    updateBalance()
})

// Expense

let totalEx = 0;
const calculations = document.getElementById('calculations')

const expenseInput = document.getElementById('expense')
const expenseAmount = document.getElementById('expense-amount')
const exContainer = document.getElementById('expense-flex')
const expenseBtn = document.getElementById('expense-btn').addEventListener('click', () => {
    // create new values
    const exItem = expenseInput.value
    const exAmount = expenseAmount.value

    // calculate expenses
    totalEx += parseInt(exAmount)

    // update expense tracker
    calculations.textContent = `-$${totalEx}`

    // clear input values
    expenseInput.value = ''
    expenseAmount.value = ''

    // create new expense item
    const newEx = document.createElement('div')
    newEx.classList.add('expense-instance')

    // sub element - item
    const newItem = document.createElement('p')
    newItem.classList.add('e-item')
    newItem.textContent = exItem

    // sub element - amount
    const newAmount = document.createElement('p')
    newAmount.classList.add('e-amount')
    newAmount.textContent = `$${exAmount}`

    // create destroy button for expense item
    const newBtn = document.createElement('button')
    newBtn.classList.add('e-btn')
    newBtn.textContent = 'X'
    newBtn.addEventListener('click', () => {
        totalEx -= parseInt(exAmount)
        calculations.textContent = `-$${totalEx}`
        updateBalance()
        newBtn.parentElement.remove()
    })

    // attach sub element to new expense item
    newEx.appendChild(newItem)
    newEx.appendChild(newAmount)
    newEx.appendChild(newBtn)

    // attach expense item to flex div
    exContainer.appendChild(newEx)
    updateBalance()
})

// Balance

const balance = document.getElementById('balance')
const balanceDisplay = document.getElementById('balance-display')

function updateBalance(){
    if(budget >= totalEx){
        balance.classList.replace('negative-balance','positive-balance')

        balanceDisplay.textContent = parseInt(budget) - parseInt(totalEx)
    }
    else if(budget < totalEx){
        balance.classList.replace('positive-balance','negative-balance')

        balanceDisplay.textContent = `-${parseInt(totalEx) - parseInt(budget)}`
    }

}