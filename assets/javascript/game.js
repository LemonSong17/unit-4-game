//creating variables and functions to create random numbers for goal number and crystals
var userScore = 0;
var wins = 0;
var losses = 0;

function randomNumber() {
    
   return Math.ceil(Math.random()*12);
}

var Random=Math.round(Math.random()*120)

$('#randomNumber').text(Random);

var earthNumber= randomNumber()
var fireNumber= randomNumber()
var waterNumber= randomNumber()
var windNumber= randomNumber()

console.log(earthNumber)
console.log(fireNumber)
console.log(waterNumber)
console.log(windNumber)

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//reset the game
function reset(){
    Random=Math.ceil(Math.random()*120);
    console.log(Random)
    $('#randomNumber').text(Random);
    earthNumber= randomNumber();
    fireNumber= randomNumber();
    waterNumber= randomNumber();
    windNumber= randomNumber();
    userScore= 0;
    $('#finalScore').text(userScore);
    } 

//alert for winning a round
function winner(){
    alert("You won!!");
      wins++; 
      $('#numberWins').text(wins);
      reset();
    }

//alert for losing a round
function loser(){
    alert ("You lost!!");
      losses++;
      $('#numberLosses').text(losses);
      reset()
    }


//on click events for each crystal + adding to userScore
$('#earth').on ('click', function(){
    userScore = userScore + earthNumber;
    console.log("New userScore= " + userScore);
    $('#finalScore').text(userScore); 
                //sets win/lose conditions
            if (userScore == Random){
                winner();
            }
            else if ( userScore > Random){
                loser();
            }
})

$('#fire').on ('click', function(){
    userScore = userScore + fireNumber;
    console.log("New userScore= " + userScore);
    $('#finalScore').text(userScore); 
            if (userScore == Random){
                winner();
            }
            else if ( userScore > Random){
                loser();
            }
})

$('#water').on ('click', function(){
    userScore = userScore + waterNumber;
    console.log("New userScore= " + userScore);
    $('#finalScore').text(userScore); 
            if (userScore == Random){
                winner();
            }
            else if ( userScore > Random){
                loser();
            }
})

$('#wind').on ('click', function(){
    userScore = userScore + windNumber;
    console.log("New userScore= " + userScore);
    $('#finalScore').text(userScore); 
            if (userScore == Random){
                winner();
            }
            else if ( userScore > Random){
                loser();
            }
});



    