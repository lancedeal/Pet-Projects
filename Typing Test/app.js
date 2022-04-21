
/* Additional Features 
    - dynamic line display
*/

// Tests
var beeText = `There are about 20,000 different species of bees in the world. Bees live in colonies that contain the queen bee, the worker bee and the drone. The worker bee and the queen bee are both female, but only the queen bee can reproduce. All drones are male. Worker bees clean the hive, collecting pollen and nectar to feed the colony and they take care of the offspring. The drone’s only job is to mate with the queen. The queen’s only job is to lay eggs. 
Bees store their venom in a sac attached to their stinger and only female bees sting. That is because the stinger, called an ovipositor, is part of the female bee’s reproductive design. A queen bee uses her ovipositor to lay eggs as well as sting. Sterile females, also called worker bees, don’t lay eggs. They just use their ovipositors to sting. 
Bees see all colors except the color red. That and their sense of smell help them find the flowers they need to collect pollen. Not only is pollen a food source for bees, but also some of the pollen is dropped in flight, resulting in cross pollination. The relationship between the plant and the insect is called symbiosis.`
beeText = beeText.trim()

var reefText = `Corals reefs are formed over a process of thousands of years. Each coral reef is made up of colonies of tiny animals called polyps. Each polyp produces calcium carbonate, which makes up their skeleton and protects corals internal bodies; similar to how our skeleton protects our organs. Polyps on their own are colorless, however, each polyp attracts large amounts of algae, called zooxanthellae. These algae live inside the cells of the polyp and gives corals their vibrant colors.
Corals, and the algae inside their polyps, rely on sunlight to produce the energy needed for them to survive and grow. That’s why most coral reefs can be found in shallow, clear water along the coast. Corals crave the marine conditions found in the warm waters of the tropics and sub-tropics.`
reefText = reefText.trim()

var amazonText = `The Amazon rainforest is the biggest forest in the world and is also the last big space covered with tropical plants and animals. The Amazon forest territory is a tropical rainforest that is located in the north side of the South American continent and is shared by 9 countries: Brazil, Bolivia, Ecuador, Peru, Colombia, Venezuela, Suriname, French Guiana and Guiana. Travel through the area can be difficult, and a guide or a river tour are the best options to see the natural wonders of the region.`
amazonText = amazonText.trim()

var saltwaterSwampText = `Saltwater swamps form on tropical coastlines. Formation of these swamps begins with bare flats of mud and sand that are thinly covered by seawater during high tides. Plants that are able to tolerate tidal flooding, such as mangrove trees, begin to grow and soon form thickets of roots and branches. Mangrove trees often grow on tall, thin roots. The roots anchor sand and other sediments. The growth and decay of the roots increase the accumulation of soil.
Among these mangroves live animals that feed on fallen leaves and other material. Crabs, conchs, and other shellfish are abundant in mangrove swamps. The swamps are also home to a huge variety of birds, whose droppings help fertilize the swamp.`
saltwaterSwampText = saltwaterSwampText.trim()

var testList = [beeText,reefText,amazonText,saltwaterSwampText]

// variables
const timerText = document.getElementById('timer')
const accuracy = document.getElementById('accuracy')
const test = document.getElementById('test')
const userInput = document.getElementById('user-input')
const wordsPerMinuteDisplay = document.getElementById('wordsPerMinute')
const timeInput = document.getElementById('set-time')
var timeLength = 20
var originalTimeLength = timeLength
var inProgress = false
let intervalID
var positivePoints = 0
var negativePoints = 0
var words = 0
var wordsPerMinute
var currentText = beeText


test.textContent = beeText

// buttons
const restartBtn = document.getElementById('restart').addEventListener('click', restartTest)
const randomBtn = document.getElementById('random-test').addEventListener('click', randomTest)
const startBtn = document.getElementById('start').addEventListener('click', startTest)
const changeTimeBtn = document.getElementById('submit-time').addEventListener('click', changeTime)

// radio buttons
const radioBee = document.getElementById('test-beetext').addEventListener('click', () => {
    currentText = beeText
    test.textContent = beeText
})
const radioReef = document.getElementById('test-reefText').addEventListener('click', () => {
    currentText = reefText
    test.textContent = reefText
})
const radioAmazon = document.getElementById('test-amazonText').addEventListener('click', () => {
    currentText = amazonText
    test.textContent = amazonText
})
const radioSwamp = document.getElementById('test-saltwaterSwampText').addEventListener('click', () => {
    currentText = saltwaterSwampText
    test.textContent = saltwaterSwampText
})


// functions
function startTest(){
    userInput.value = ''
    inProgress = true
    if(!intervalID){
        intervalID = setInterval(timer,1000)
    }
}

function randomTest(){
    let randomIndex = Math.floor((Math.random() * 4)) 
    console.log(randomIndex)
    currentText = testList[randomIndex]
    test.textContent = testList[randomIndex]
}

function restartTest(){
    window.location = 'file:///C:/Users/Lance/Projects/Javascript/Projects/Intermediate/Typing%20Test/index.html'
}

function calculateAccuracy(){
    let results = userInput.value
    let lastWord = ''

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

    wordsPerMinute = secondText.length * (60 / originalTimeLength)
    console.log(originalTimeLength)
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

function changeTime(){
    timeLength = timeInput.value
    originalTimeLength = timeLength
    timeInput.value = ''
}