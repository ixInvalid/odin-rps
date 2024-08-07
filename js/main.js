function getComputerSelection() {
    const selection = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * selection.length);
    return selection[random];
}

function getHumanSelection() {
    let validSelection = ['ROCK', 'PAPER', 'SCISSORS'];
    let selection = "";

    while (!validSelection.includes(selection)) {
        selection = prompt("Choose ROCK, PAPER, or SCISSORS:").toUpperCase();
    }

    return selection;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection, computerSelection) {
        const winningCombinations = {
            ROCK: 'SCISSORS',
            PAPER: 'ROCK',
            SCISSORS: 'PAPER'
        };

        let result;

        if (humanSelection === computerSelection) {
            result = 'Tie!';
        } else if (winningCombinations[humanSelection] === computerSelection) {
            humanScore++;
            result = `You Win! Human: ${humanSelection} Computer: ${computerSelection}.`;
        } else {
            computerScore++;
            result = `You Lose! Human: ${humanSelection} Computer: ${computerSelection}.`;
        }

        console.log(result);
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanSelection();
        const computerSelection = getComputerSelection();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You WIN!");
    } else if (humanScore < computerScore) {
        console.log("You LOSE!");
    } else {
        console.log("TIED!");
    }
}