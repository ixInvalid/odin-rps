function getComputerSelection() {
    const selection = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * selection.length);
    return selection[random];
}

console.log(getComputerSelection())