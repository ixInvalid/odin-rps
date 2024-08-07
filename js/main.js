function getComputerSelection() {
    const selection = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * selection.length);
    return selection[random];
}

function getHumanSelection() {
    let validSelection = ["ROCK", "PAPER", "SCISSORS"];
    let selection = "";

    while (!validSelection.includes(selection)) {
        selection = prompt("Choose ROCK, PAPER, or SCISSORS:").toUpperCase();
    }

    return selection;
}


console.log(getHumanSelection())