const gameSummary = {
    numberOfGames:0,
    wins:0,
    loses:0,
    draws:0,
}

const game = {
    playerChoice:"",
    aiChoice:"",
    result:"",
}

const choices = [...document.querySelectorAll('img')];

//Funkcja wyboru
const playerSelection = (e)=>{
    game.playerChoice = e.target.dataset.option;
    document.querySelectorAll(".select img").forEach(img=>{
        img.style.boxShadow = "";
    });
    e.target.style.boxShadow = "0px 0px 0px 10px green";
    return game.playerChoice;
}

//Funkcja wyboru ai
const aiSelection = () => {
    const index = Math.floor(Math.random()*3);
    game.aiChoice = choices[index].dataset.option;
    return game.aiChoice;
}

//Funkcja sprawdzająca wynik
const checkResult = (player, ai) => {
    if((player === "kamień")&&(ai === "nożyczki")||
       (player === "papier")&&(ai === "kamień")||
       (player === "nożyczki")&&(ai === "papier")){
        return "wygrałeś";
       }
    if((player === "papier")&&(ai === "nożyczki")||
       (player === "nożyczki")&&(ai === "kamień")||
       (player === "kamień")&&(ai === "papier")){
        return "przegrałeś";
    }
    else{
        return "remis";
    }
}

//Funkcja licząca statystyki
const updateScore = (result) =>{
    gameSummary.numberOfGames++;
    document.querySelector('p.numbers span').innerText = gameSummary.numberOfGames;
    if(result === "wygrałeś"){
        gameSummary.wins++;
        document.querySelector('p.wins span').innerText = gameSummary.wins;
        
    }
    else if(result === "przegrałeś"){
        gameSummary.loses++;
        document.querySelector('p.losses span').innerText = gameSummary.loses;
    }
    else{
        gameSummary.draws++;
        document.querySelector('p.draws span').innerText = gameSummary.draws;
       
    }
}

//Funkcja przypisująca wynik
const publishResult = (result) =>{
    document.querySelector('[data-summary="your-choice"]').innerText = game.playerChoice;
    document.querySelector('[data-summary="ai-choice"]').innerText = game.aiChoice;
    document.querySelector('[data-summary="who-win"]').innerText = result;
    
}

//Funkcja sterująca: START
const startFunction = ()=>{
    if(game.playerChoice == "") {return alert("nie wybrałeś!")};
    aiSelection();
    let result = checkResult(game.playerChoice, game.aiChoice);
    console.log(result);
    publishResult(result);
    updateScore(result,);
}


choices.forEach(choice=>choice.addEventListener("click", playerSelection));
document.querySelector(".start").addEventListener("click", startFunction);