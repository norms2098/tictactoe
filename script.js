const GameBoard = () =>{
    let boardArray = ["","","","","","","","",""];
}

//player things
const Player = (symbol) =>{
    let playerSymbol = symbol;

    const getPlayerSymbol = () =>{
        return playerSymbol;
    }

    return { getPlayerSymbol }
}

//controls the flow of the game
const gameFlowControl = (() =>{
    const playerO = Player("O");
    const playerX = Player("X");
    let roundCounter = 0 ;
    let isGameOver = false;

    const gamePlay = () =>{
        roundCounter++
        if(roundCounter == 9) {
            console.log("gameover")
        }
    }
    const getCurrentPlayer = () => {
        
        if (roundCounter % 2 == 0){
            return playerO.getPlayerSymbol();
        }
        else{
           
            return playerX.getPlayerSymbol();
        }   
    }
   
    
    return { getCurrentPlayer, roundCounter, gamePlay }
})();

//controls the game displays
const gameDisplayControl = (() => {
    const gameFields = document.querySelectorAll('.gamefield');

    gameFields.forEach((field)=>{
        field.addEventListener('click', (e)=>{
            if(e.target.textContent !== ""){
                return;
            }
            e.target.textContent=gameFlowControl.getCurrentPlayer();

            gameFlowControl.gamePlay();
        })
    })


})();

