
//Agata Jelen CSD 122 Winter 2018 (01.10.2018) Assignment 1

//this function converts numbers into an actual word
function toGame(computerChoice) {
    var word;
    if (computerChoice < 0.34) {
        word = 'rock';
    }
    else if (computerChoice <0.67) {
        word = 'paper';
    }
    else {
        word = 'scissors';
    }
    return word;  //result inster of number we have for an exmple 'rock'
}
//asking user for his/hers choice
var userChoice = prompt("Do you choose Rock, Paper or Scissors", " ").toLowerCase();
//using Math.random to create computer choice
var computerChoice = Math.random();
//displaying choices made by user and by the computer
agata = toGame(computerChoice);

document.write("<p> Player chooses: " + userChoice + " </p>");
document.write("<p> Computer chooses: " + agata + " </p>");

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice < 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
//function that determines a winner
function compare(choice1, choice2) {
    if (choice1 === choice2) {
        document.write("The result is a tie!");
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.write("Player wins!Rock wins!");
        } else if (choice2 === "paper") {
            document.write("Computer wins! Paper wins");
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.write("Computer wins!Rock wins");
        } else if (choice2 === "paper") {
            document.write("Player wins! Scissors win");
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.write("Player wins! Paper wins");
        } else if (choice2 === "scissors") {
            document.write("Computer wins! Scissors win!");
        }

    }
};
//this is variable created to inform user that they made an invalid choice 
var allowedWords = ['rock', 'paper', 'scissors'];
if (allowedWords.indexOf(userChoice) === -1) {
    document.write("Hey player that is not a valid input, try again?");
}
//calling the function
compare(userChoice, computerChoice);


