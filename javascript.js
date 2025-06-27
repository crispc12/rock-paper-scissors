// This function returns rock, paper or scissors
function getComputerChoice () {
    let number = Math.floor(Math.random() * 3) + 1; //Random number between 1 and 3
    let choice;
    //if number=1, return rock...
    if (number == 1){
        choice = "rock";
    } else if (number == 2){
        choice = "paper";
    } else if (number == 3){
        choice = "scissors";
    } else {
        choice = "something went wrong"
    }

    return choice
}

function getHumanChoice () {
    //ask for a choice and save it in variable choice
    let choice = prompt("Please, write one of: rock, paper, scissors");
    //return variable choice
    return choice
}



//this function call playRound to play 5 rounds, keeps track of the scores and declare
//a winner at the end
function playGame() {
    //initializing score variables
    let humanScore = 0;
    let computerScore = 0;

    //function that takes de Computer and Human choices as arguments, plays a single round,
    //increments the round winner's score and logs a winner anouncement
    function playRound(humanChoice, computerChoice) {
        //make humanChoice case insensitive
        humanChoice = humanChoice.toLowerCase();
        //if loop for each human choice
        if (humanChoice == "rock") {
         if (computerChoice == "rock") {
            console.log("Anybody wins. Rock equals rock");
         } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            ++computerScore;
         } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            ++humanScore;
         }
        } else if (humanChoice == "paper"){
         if (computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            ++humanScore;
         } else if (computerChoice == "paper") {
            console.log("Anybody wins. Paper equals paper");
         } else if (computerChoice == "scissors") {
            console.log("You lose! Scisorss beat paper");
            ++computerScore;
         }
        } else if (humanChoice == "scissors") {
         if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors");
            ++computerScore;
         } else if (computerChoice == "paper") {
            console.log("You win! Scissors beat paper");
            ++humanScore;
         } else if (computerChoice == "scissors") {
            console.log("Anybody wins. Scissors equals scissors");
         }
        }
    }

    //play 5 rounds
    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log("Computer score is " + computerScore);
        console.log("Human score is " + humanScore);
    }

    //compare scores and anounce winner
    if (humanScore <= computerScore) {
        console.log("You lose");
    } else if (humanScore >= computerScore) {
        console.log("You win!")
    } else {
        console.log("Anybody wins, it's a tie!")
    }
}

playGame();