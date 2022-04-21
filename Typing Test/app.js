
// variables
const timerText = document.getElementById('timer')
const accuracy = document.getElementById('accuracy')
const test = document.getElementById('test')
const userInput = document.getElementById('user-input')
const wordsPerMinuteDisplay = document.getElementById('wordsPerMinute')
var timeLength = 20
var inProgress = false
let intervalID
var positivePoints = 0
var negativePoints = 0
var words = 0
var wordsPerMinute

var beeText = `
There are about 20,000 different species of bees in the world. Bees live in colonies that contain the queen bee, the worker bee and the drone. The worker bee and the queen bee are both female, but only the queen bee can reproduce. All drones are male. Worker bees clean the hive, collecting pollen and nectar to feed the colony and they take care of the offspring. The drone’s only job is to mate with the queen. The queen’s only job is to lay eggs. 
Bees store their venom in a sac attached to their stinger and only female bees sting. That is because the stinger, called an ovipositor, is part of the female bee’s reproductive design. A queen bee uses her ovipositor to lay eggs as well as sting. Sterile females, also called worker bees, don’t lay eggs. They just use their ovipositors to sting. 
Bees see all colors except the color red. That and their sense of smell help them find the flowers they need to collect pollen. Not only is pollen a food source for bees, but also some of the pollen is dropped in flight, resulting in cross pollination. The relationship between the plant and the insect is called symbiosis.
`
beeText = beeText.trim()
test.textContent = beeText

// buttons
const restartBtn = document.getElementById('restart').addEventListener('click', restartTest)
const randomBtn = document.getElementById('random-test').addEventListener('click', randomTest)
const startBtn = document.getElementById('start').addEventListener('click', startTest)


// functions
function startTest(){
    userInput.value = ''
    inProgress = true
    if(!intervalID){
        intervalID = setInterval(timer,1000)
    }
}

function randomTest(){
    console.log('Test Randomized')
}

function restartTest(){
    window.location = 'file:///C:/Users/Lance/Projects/Javascript/Projects/Intermediate/Typing%20Test/index.html'
}

function calculateAccuracy(){
    let results = userInput.value
    let lastWord = ''
    let currentText = beeText

    let firstText = []
    let secondText = []

    // iterate through the first and second text and create an object for every word
    for(let i = 0; i < currentText.length; i++){
        if(currentText[i] == ' ' || currentText[i] == '.'){
            if(lastWord != ''){
                firstText.push(lastWord)
                lastWord = ''
            }
        }
        else{
            lastWord += currentText[i]
        }
    }
    for(let i = 0; i < results.length; i++){
        if(results[i] == ' ' || results[i] == '.'){
            if(lastWord != ''){
                secondText.push(lastWord)
                lastWord = ''
            }
        }
        else{
            lastWord += results[i]
        }
    }

    for(let i = 0; i < secondText.length; i++){
        if(secondText[i] === firstText[i]){
            positivePoints += 1
        }
        else{
            negativePoints += 1
        }
    }
    const percentage = `Accuracy: ${100 - ((negativePoints / positivePoints) * 100)}%`
    accuracy.textContent = percentage

    wordsPerMinute = secondText.length
    wordsPerMinuteDisplay.textContent = `Words Per Minute: ${wordsPerMinute}`

}

function timer(){
    timerText.textContent = `Time Left: ${timeLength}`
    timeLength -= 1
    if(timeLength == 0){
        timerText.textContent = `Time Left: ${timeLength}`
        clearInterval(intervalID)
        calculateAccuracy()
    }
}