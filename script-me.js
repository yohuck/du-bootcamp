// Window.alert('This is a message');
// Window.prompt(message, 'enter a message');



// const computerChoice = choices[randomNumber];
let winCount = 0;
let lossCount = 0;
let tieCount = 0;

// var playerChoice = window.prompt('Choose 1: Rock, Paper, or Scissors');

let winOrLose = (player, computer) => {
    if (player == computer) {
        console.log("It's a tie");
        tieCount++
        return "It's a tie";
    } else if (player == 'rock') {
        if (computer == 'scissors') {
            winCount++;
            return "You win";
        } else {
            lossCount++;
            return 'You lose'}

    } else if (player == 'paper') {
        if (computer == 'rock') {
            winCount++;
            return 'Paper covers rock, you win!'
        } else {
            lossCount++ 
            return 'You lose';
        }
    } else if (player == 'scissors') {
        if (computer == 'paper') {
            winCount++
            return 'Rock crushes scissors, you win!';
        } else {
            lossCount++ ;
            return 'You lose'; }
    } else return 'Invalid entry!';
};


// let thisOne = winOrLose(playerChoice, computerChoice);

// var alertComputerChoice = window.alert(`The computer choice is ${computerChoice}`);

// var alertResult = window.alert(`You chose ${playerChoice}. The computer chose ${computerChoice}. ${thisOne}`)

// var alertTotal = window.alert(`Wins: ${winCount}, Losses: ${lossCount}, Ties: ${tieCount}`)

// var playAgain = window.confirm('Want to play again?');

let playTheGame = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random()*3);
    const computerChoice = choices[randomNumber];
    const playerChoice = window.prompt('Choose 1: Rock, Paper, or Scissors');
    const thisOne = winOrLose(playerChoice, computerChoice);
    // alertComputerChoice;
    const alertComputerChoice = window.alert(`The computer choice is ${computerChoice}`);
    const alertResult = window.alert(`You chose ${playerChoice}. The computer chose ${computerChoice}. ${thisOne}`)
    const alertTotal = window.alert(`Wins: ${winCount}, Losses: ${lossCount}, Ties: ${tieCount}`)
    const playAgain = window.confirm('Want to play again?');

    if (playAgain == true) {
        playTheGame()
    } else return;
    
}

playTheGame();

// var confirm = window.confirm('Do you want to play again?');



// console.log(randomNumber);



// console.log(computerChoice);

// let winOrLose = (player, computer) => {
//     if (player == computer) {
//         console.log("It's a tie")
//         return "It's a tie"
//     } else if (player == 'rock') {
//         if (computer == 'scissors') {
//             console.log('Rock beats scissors, you win!');
//             return "You win"
//         } else return 'You lose'

//     } else if (player == 'paper') {
//         if (computer == 'rock') {
//             return 'Paper covers rock, you win!'
//         } else return 'You lose';
//     } else if (player == 'rock') {
//         if (computer == 'scissors') {
//             return 'Rock crushes scissors, you win!';
//         } else return 'You lose';
//     } else return 'Invalid entry!';
// };

// winOrLose('paper', computerChoice);