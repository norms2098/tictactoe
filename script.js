const GameBoard = (() =>{
    let boardArray = ["","","","","","","","",""];
    return { boardArray }
})();

//player things
const Player = (symbol) =>{
    let playerSymbol = symbol;

    const getPlayerSymbol = () =>{
        return playerSymbol;
    }

    return { getPlayerSymbol }
}

//controls the flow of the game IIFE
const gameFlowControl = (() =>{
    const playerO = Player("O");
    const playerX = Player("X");
    let roundCounter = 0 ;
    let isGameOver = false;

    const gameoverChecker = () =>{
        roundCounter++
        if(roundCounter == 9) {
            gameDisplayControl.displayGameOver();
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

    const updateGameBoardArray = (index) =>{
        if (roundCounter %2 == 0){
            GameBoard.boardArray[parseInt(index)-1]="O";
        }
        else{
            GameBoard.boardArray[parseInt(index)-1]="X";
        }
        console.log(GameBoard.boardArray);
    }
    
    return { getCurrentPlayer, roundCounter, gameoverChecker, isGameOver, updateGameBoardArray }
})();

//controls the game displays
const gameDisplayControl = (() => {
    const gameFields = document.querySelectorAll('.gamefield');

    gameFields.forEach((field)=>{
        field.addEventListener('click', (e)=>{
            if(e.target.textContent !== ""){
                return;
            }
            e.target.textContent = gameFlowControl.getCurrentPlayer();
            gameFlowControl.updateGameBoardArray(e.target.dataset.indexNumber)
            gameFlowControl.gameoverChecker();
           
        })
    })

    const displayGameOver = () => {
        console.log('gameover')
    }

    return { displayGameOver , }
})();

