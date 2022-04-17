
var position = 0;
var category = 'basic'

var deck = BasicDeck

var CustomDeck = [{
    head:'Example',
    body:'A long time ago, in a galaxy far far away'
}]

// initialize variables
const card = document.getElementById('card')
card.addEventListener('click', flip)

const front = document.getElementById('front-text')
const back = document.getElementById('back-text')

const catDisplay = document.querySelector('.cat-display')

const customFront = document.getElementById('front-input')
const customBack = document.getElementById('back-input')

// Buttons

const nextBtn = document.getElementById('next-card').addEventListener('click', () => {
    if(position == (deck.length - 1)){
        position = 0
        updateCard()
    }
    else{
        position += 1
        updateCard()
    }
})
const previousBtn = document.getElementById('previous-card').addEventListener('click', () => {
    if(position == 0){
        position = deck.length - 1
        updateCard()
    }
    else{
        position -= 1
        updateCard()
    }
})
const randomBtn = document.getElementById('random').addEventListener('click', () => {
    position = numberInRange(0,(deck.length - 1))

    // To Do: Retry if current position is pulled
    
    updateCard()
})

const customBtn = document.getElementById('custom-submit').addEventListener('click', () => {
    let frontText = customFront.value
    let backText = customBack.value

    customBack.value = ''
    customFront.value = ''

    const newCard = {
        head:frontText,
        body:backText
    }

    CustomDeck.push(newCard)
})


// Category Selection

const catBasic = document.getElementById('c-basic').addEventListener('click', updateCategory)

const catNode = document.getElementById('c-node.js').addEventListener('click', updateCategory)

const catExpress = document.getElementById('c-express').addEventListener('click', updateCategory)

const catJs = document.getElementById('c-javascript').addEventListener('click', updateCategory)

const catCustom = document.getElementById('c-custom').addEventListener('click', updateCategory)



// Functions

function updateCategory(){
    let cat = this.innerHTML
    catDisplay.textContent = `Selection: ${cat}`
    category = cat.trim()
    switch(category){
        case 'Basic':
            deck = BasicDeck
            break
        case 'Node.JS':
            deck = NodeDeck
            break
        case 'Express':
            deck = ExpressDeck
            break
        case 'JavaScript':
            deck = JsDeck
            break
        case 'Custom':
            deck = CustomDeck
            break
    }
    position = 0
    updateCard()
}

function numberInRange(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function updateCard(){
    front.textContent = deck[position].head
    back.textContent = deck[position].body
}

function flip(){
    card.classList.toggle('flipCard')
}

updateCard()