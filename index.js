let humanScore = 0;
let cpuScore = 0;
let choices = ["Rock", "Paper", "Scissors"]

const choicesDiv = document.querySelector("#player-choices")
const resultsText = document.querySelector("#results p")
function getComputerChoice(){
    let index = Math.floor((Math.random() * 3));
    return index;
}
choicesDiv.addEventListener('click', function(e){
    const clicked = e.target;
    if(!(clicked instanceof HTMLButtonElement)){
        return;
    }
    switch (clicked.textContent) {
        case "Rock":
            playRound(0);
            break;
    
        case "Paper":
            playRound(1);
            break;
        case "Scissors":
            playRound(2);
            break;
        default:
            console.log("something went wrong");
            break;
    }
});


function playRound(humanChoiceIndex){
    let cpuChoiceIndex = getComputerChoice();
    let cpuChoice = choices[cpuChoiceIndex];
    let humanChoice = choices[humanChoiceIndex];
    resultsText.innerHTML = "CPU CHOICE: " + cpuChoice + "<br>HUMAN CHOICE: " + humanChoice + "<br> <br>";
    if(cpuChoice == humanChoice){
        resultsText.innerHTML += "<br>Draw!";
        return;
    }
    let cpuKiller = choices[(cpuChoiceIndex + 1) % 3];
    let humanKiller = choices[(humanChoiceIndex + 1) % 3];
    if(humanChoice == cpuKiller){
        humanScore++;
        resultsText.innerHTML += "<br>Human wins this round!<br>";
    } else if(cpuChoice == humanKiller){
        cpuScore++;
        resultsText.innerHTML += "<br>CPU wins this round!<br>";
    }
    resultsText.innerHTML += "Current Score<br>Human: " + humanScore + "<br>CPU: " + cpuScore;
}