console.log("Hello World");
let humanScore = 0;
let cpuScore = 0;
let choices = ["Rock", "Paper", "Scissors"]
function getComputerChoice(){
    let index = Math.floor((Math.random() * 3));
    return index;
}

function getHumanChoice(){
    let index = prompt("Enter value between 0-2; where 0 - R | 1 -  P | 2 - S");
    if(index < 0 || index > 2){
        console.log("incorrect input");
        return;
    }
    return index;
}

while(prompt("Enter 0 to quit") != 0){
    let cpuChoiceIndex = getComputerChoice();
    let cpuChoice = choices[cpuChoiceIndex];
    let humanChoiceIndex = getHumanChoice();
    let humanChoice = choices[humanChoiceIndex];
    console.log("\nCPU CHOICE: " + cpuChoice + "\nHUMAN CHOICE: " + humanChoice);
    if(cpuChoice == humanChoice){
        console.log("Draw!");
        continue;
    }
    let cpuKiller = choices[(cpuChoiceIndex + 1) % 3];
    let humanKiller = choices[(humanChoiceIndex + 1) % 3];
    if(humanChoice == cpuKiller){
        humanScore++;
        console.log("Human wins this round!");
    } else if(cpuChoice == humanKiller){
        cpuScore++;
        console.log("CPU wins this round!");
    }
    console.log("Current Score\nHuman: " + humanScore + "\nCPU: " + cpuScore);
}