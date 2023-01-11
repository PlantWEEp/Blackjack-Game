let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")


function getRandom() {
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = ("Do you want to draw a new card? 🙂")
    } else if (sum === 21) {
        message = ("Wohoo! You've got Blackjack! 🥳")
        hasBlackJack = true
    } else {
        message = "You are out of the game "
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {


        let card = getRandom()
        sum += card
        cards.push(card)
        renderGame()
    }
}