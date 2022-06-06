let interactedContainer = document.getElementById("interactedContainer")
let interactionContainer = document.getElementById("interactionContainer")
let userhandsimage = document.getElementById("userhandsImage")
let computerhandsimage = document.getElementById("computerHandsImage")
let gamestate = document.getElementById("gameState")
let gamestatemobile = document.getElementById("gameStateMobile")
let rules = document.getElementById("rulesPicture")
let rulescontainer = document.getElementById("rulesContainer")
let clickPaper = document.querySelector(".paper")
let clickRock = document.querySelector(".rock")
let clickScissors = document.querySelector(".Scissors")
let rulesPop = document.getElementById("rules")
let playagain = document.querySelectorAll(".playagain")
clickPaper.addEventListener("click",paper)
clickRock.addEventListener("click",rock)
clickScissors.addEventListener("click",scissors)
rulesPop.addEventListener("click",rulesPopup)
playagain.forEach(button => {
    button.addEventListener("click",playAgain)
});
let score = 0
function randomNumber(){
    let random = Math.floor(Math.random() * 3) + 1
    if(random ===1){
        computerhandsimage = document.getElementById("computerHandsImage").src = "assets/Rock.png"   
    }
    else if(random === 2){
        computerhandsimage = document.getElementById("computerHandsImage").src = "assets/Paper.png"  
    }
    else if(random === 3){
        computerhandsimage = document.getElementById("computerHandsImage").src = "assets/Scissors.png"  
    }

}
function playAgain(){
    interactionContainer.style.display = "flex"
    interactedContainer.style.display = "none"
    rulescontainer.style.display = "flex"
}
function paper(){
    rulescontainer.style.display = "none"
    let scoreboard = document.getElementById("scoreBoard")
interactedContainer.style.display = "flex"
interactionContainer.style.display = "none"
userhandsimage = document.getElementById("userhandsImage").src = "assets/Paper.png"
randomNumber()
if(computerhandsimage === "assets/Paper.png"){
    score += 0
gamestate.textContent = "IT'S A TIE"
gamestatemobile.textContent = "IT'S A TIE"

scoreboard.textContent = score
}
else if(computerhandsimage === "assets/Rock.png"){
    score += 1
    gamestate.textContent = "YOU WIN!"
    gamestatemobile.textContent = "YOU WIN!"
    scoreboard.textContent = score
}
else if(computerhandsimage === "assets/Scissors.png"){
    score -= 1 
    gamestate.textContent = "YOU LOSE"
    gamestatemobile.textContent = "YOU LOSE"
    scoreboard.textContent = score
}
}

function scissors(){
    rulescontainer.style.display = "none"
    let scoreboard = document.getElementById("scoreBoard")
    interactedContainer.style.display = "flex"
    interactionContainer.style.display = "none" 
    userhandsimage = document.getElementById("userhandsImage").src = "assets/Scissors.png" 
    randomNumber()
    if(computerhandsimage === "assets/Paper.png"){
        score += 1
    gamestate.textContent = "YOU WIN!"
    gamestatemobile.textContent = "YOU WIN!"
    scoreboard.textContent = score
    }
    else if(computerhandsimage === "assets/Rock.png"){
        score -= 1
        gamestate.textContent = "YOU LOSE!"
        gamestatemobile.textContent = "YOU LOSE!"
        scoreboard.textContent = score
    }
    else if(computerhandsimage === "assets/Scissors.png"){
        score += 0 
        gamestate.textContent = "IT'S A TIE"
        gamestatemobile.textContent = "IT'S A TIE"
        scoreboard.textContent = score
    }
}
function rock(){
    rulescontainer.style.display = "none"
    let scoreboard = document.getElementById("scoreBoard")
    interactedContainer.style.display = "flex"
    interactionContainer.style.display = "none"
    userhandsimage = document.getElementById("userhandsImage").src = "assets/Rock.png"
    randomNumber()
    if(computerhandsimage === "assets/Paper.png"){
        score -= 1
    gamestate.textContent = "YOU LOSE"
    gamestatemobile.textContent = "YOU LOSE"
    scoreboard.textContent = score
    }
    else if(computerhandsimage === "assets/Rock.png"){
        score += 0
        gamestate.textContent = "IT'S A TIE"
        gamestatemobile.textContent = "IT'S A TIE"
        scoreboard.textContent = score
    }
    else if(computerhandsimage === "assets/Scissors.png"){
        score += 1 
        gamestate.textContent = "YOU WIN!"
        gamestatemobile.textContent = "YOU WIN!"
        scoreboard.textContent = score
    }
}
function rulesPopup(){
    rules.style.display = "flex"
    interactionContainer.style.display = "none"
    interactedContainer.style.display = "none"
    rulescontainer.style.display = "none"
}
function reset(){
    rules.style.display = "none"
    interactionContainer.style.display = "flex"
    interactedContainer.style.display = "none"
    rulescontainer.style.display = "flex"
}
// function reset() is used to take the game back to its initial state