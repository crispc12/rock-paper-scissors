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
    
    const results = document.querySelector("#results")
    const para = document.createElement("p")
    results.appendChild(para)
    const paraResult = document.createElement("p")
    results.appendChild(paraResult)

    const rockBtn = document.querySelector("#btnRock");
    const paperBtn = document.querySelector("#btnPaper");
    const scissorsBtn = document.querySelector("#btnScissors");
   

    //function that takes de Computer and Human choices as arguments, plays a single round,
    //increments the round winner's score and logs a winner anouncement
    function playRound(humanChoice, computerChoice) {
        //make humanChoice case insensitive
        //humanChoice = humanChoice.toLowerCase();
        //if loop for each human choice
        if (humanChoice == "rock") {
         if (computerChoice == "rock") {
            para.textContent = "Anybody wins. Rock equals rock"
        } else if (computerChoice == "paper") {
            para.textContent = "You lose! Paper beats rock"
            ++computerScore;
        } else if (computerChoice == "scissors") {
            para.textContent = "You win! Rock beats scissors"
            ++humanScore;
        }
    } else if (humanChoice == "paper"){
        if (computerChoice == "rock") {
            para.textContent = "You win! Paper beats rock"
            ++humanScore;
        } else if (computerChoice == "paper") {
            para.textContent = "Anybody wins. Paper equals paper"
        } else if (computerChoice == "scissors") {
            para.textContent = "You lose! Scisorss beat paper"
            ++computerScore;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            para.textContent = "You lose! Rock beats scissors"
            ++computerScore;
        } else if (computerChoice == "paper") {
            para.textContent = "You win! Scissors beat paper"
            ++humanScore;
        } else if (computerChoice == "scissors") {
            para.textContent = "Anybody wins. Scissors equals scissors"
         }
        }
    }

    //compare scores and anounce winner

    function compareScores () {
        if (humanScore === 5 || computerScore === 5){
            if (humanScore <= computerScore) {
                para.textContent = "You lose"
                removeButtons()
            } else if (humanScore >= computerScore) {
                para.textContent = "You win!"
                removeButtons()
            } else {
                para.textContent = "Anybody wins, it's a tie!"
                removeButtons()
            }
        }
    }
    
    function removeButtons (){
        rockBtn.remove()
        paperBtn.remove()
        scissorsBtn.remove()
    }
    

    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice())
        paraResult.textContent = "Human score: " + humanScore + " | Computer score: " + computerScore
        compareScores()
    });
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice())
        paraResult.textContent = "Human score: " + humanScore + " | Computer score: " + computerScore
        compareScores()
    });
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice())
        paraResult.textContent = "Human score: " + humanScore + " | Computer score: " + computerScore
        compareScores()
    });
        
    
}

playGame();