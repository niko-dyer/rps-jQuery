$(document).ready( function() {
    var initGame = false
    var userScore = 0
    var compScore = 0
    var scissors = $('#rps-image3')
    var paper = $('#rps-image2')
    var rock = $('#rps-image1')
    
    
    if (initGame == true) {
        displayGame()
    } 
    
    function init() {
        $('.game').hide()
        $('#title2').hide()
        $('#who-wins').hide()
    }
    init()
    
    $('.start-btn').on('click', function() {
        initGame = true
        $('.init').hide()
        $('.game').show()
        $('#walkthrough').text('Click a floating hand to select your choice!')
        playGame()
    })
    
    
    function playGame() {
        rockChoice = 1
        paperChoice = 2
        scissorsChoice = 3
        $('#rps-image1').on('click', function() {
            var compMath = Math.floor(Math.random() * 3 + 1)
            if (compMath == 1) {

                // User ties
                $('#who-wins').text('Tie!')
                updateDisplay()
            }
            else if (compMath == 2) {
                // user loses
                $('#who-wins').text('Loser!')
                compScore++
                updateDisplay()
            }
            else {
                console.log('win')
                // user wins
                $('#who-wins').text('Winner!')
                userScore++
                updateDisplay() 
            }
        })
        
        $('#rps-image2').on('click', function() {
            var compMath = Math.floor(Math.random() * 3 + 1)
            if (compMath == 2) {
                // user ties
                $('#who-wins').text('Tie!')
                updateDisplay()
            }
            else if (compMath == 3) {
                // user loses
                $('#who-wins').text('Loser!')
                compScore++
                updateDisplay()
            }
            else {
                // user wins
                $('#who-wins').text('Winner!')
                userScore++
                updateDisplay()
            }
        })
        
        $('#rps-image3').on('click', function() {
            var compMath = Math.floor(Math.random() * 3 + 1)
            if (compMath == 3) {
                // user ties
                $('#who-wins').text('Tie!')
                updateDisplay()
            } else if (compMath == 1){
                // user loses
                $('#who-wins').text('Loser!')
                compScore++
                updateDisplay()
            } else {
                // user wins
                $('#who-wins').text('Winner!')
                userScore++
                updateDisplay()
            }
        })
    }
    
    function updateDisplay() {
        $('#walkthrough').css({
            display: 'none'
        })
        $('#title2').show()
        scissors.hide(2000)
        paper.hide(2000)
        rock.show(2000)
        paper.show(2000)
        scissors.show(3000)
        shoot()
    }
    
    function shoot() {
        setInterval( function() {
            $('#title2').css({
                display: 'none'
            })
            $('#shoot').text('. . .Shoot!')
        }, 8000)
        displayResult()
    }
    
    function displayResult() {
        $('#comp-results').text('Computer: ' + compScore)
        $('#user-results').text('User: ' + userScore)
        $('#who-wins').show()
    }

})