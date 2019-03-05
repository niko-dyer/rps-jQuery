//  ['Rock', 'Paper', 'Scissors']
var userTotal = 1
var computerTotal = 1
var choiceOne = document.getElementById('rps-image1')
var choiceTwo = document.getElementById('rps-image2')
var choiceThree = document.getElementById('rps-image3')


choiceOne.addEventListener('click', function() {

    var computerChoice = Math.floor(Math.random() * 3 + 1)
    var choice = 1
    if (computerChoice === choice) {
        document.getElementById('user-result').innerHTML = 'Rock'
        document.getElementById('computer-result').innerHTML = 'Rock'
        document.getElementById('result').innerHTML = 'Draw!'
    } else if (computerChoice === choice + 1) {
        document.getElementById('user-result').innerHTML = 'Rock'
        document.getElementById('computer-result').innerHTML = 'Scissors'
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('scores-user').innerHTML = userTotal++
    } else {
        document.getElementById('user-result').innerHTML = 'Rock'
        document.getElementById('computer-result').innerHTML = 'Paper'
        document.getElementById('result').innerHTML = 'You lose!'
        document.getElementById('scores-comp').innerHTML = computerTotal++
    }
})
choiceTwo.addEventListener('click', function() {
    var computerChoice = Math.floor(Math.random() * 3 + 1)
    var choice = 2
    if (computerChoice === choice) {
        document.getElementById('user-result').innerHTML = 'Paper'
        document.getElementById('computer-result').innerHTML = 'Paper'
        document.getElementById('result').innerHTML = 'Draw!'
    } else if (computerChoice === choice - 1) {
        document.getElementById('user-result').innerHTML = 'Paper'
        document.getElementById('computer-result').innerHTML = 'Rock'
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('scores-user').innerHTML = userTotal++
    } else {
        document.getElementById('user-result').innerHTML = 'Paper'
        document.getElementById('computer-result').innerHTML = 'Scissors'
        document.getElementById('result').innerHTML = 'You lose!'
        document.getElementById('scores-comp').innerHTML = computerTotal++
    }
})
choiceThree.addEventListener('click', function() {
    var computerChoice = Math.floor(Math.random() * 3 + 1)
    var choice = 3
    if (computerChoice === choice) {
        document.getElementById('user-result').innerHTML = 'Scissors'
        document.getElementById('computer-result').innerHTML = 'Scissors'
        document.getElementById('result').innerHTML = 'Draw!'
    } else if (computerChoice === choice - 1) {
        document.getElementById('user-result').innerHTML = 'Scissors'
        document.getElementById('computer-result').innerHTML = 'Paper'
        document.getElementById('result').innerHTML = 'You Win!'
        document.getElementById('scores-user').innerHTML = userTotal++
    } else {
        document.getElementById('user-result').innerHTML = 'Scissors'
        document.getElementById('computer-result').innerHTML = 'Rock'
        document.getElementById('result').innerHTML = 'You lose!'
        document.getElementById('scores-comp').innerHTML = computerTotal++
    }
})

