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
    //let isGameOver = false;
   

    const gameoverChecker = () =>{
        const winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        winConditions.forEach((condition) => {
            const [a,b,c] = condition ;
            if ((GameBoard.boardArray[a] === GameBoard.boardArray[b] && GameBoard.boardArray[b] === GameBoard.boardArray[c])) {
              if(GameBoard.boardArray[a]!== '' && GameBoard.boardArray[b]!=='' && GameBoard.boardArray[c]!==''){
                if(roundCounter%2==0){
                    gameDisplayControl.displayWinnerO();

                }
                else{
                    gameDisplayControl.displayWinnerX();
                }
                return;
              }
            }
          })
        roundCounter++
        if(roundCounter == 9) {
            gameDisplayControl.displayDraw();
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
            GameBoard.boardArray[parseInt(index)]="O";
        }
        else{
            GameBoard.boardArray[parseInt(index)]="X";
        }
        console.log(GameBoard.boardArray);
    }
    
    return { getCurrentPlayer, gameoverChecker, updateGameBoardArray }
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

    const displayDraw = () => {
        console.log('gameover')
    }
    const displayWinnerO = () =>{
        alert("O wins!")
        gameFields.forEach((field)=>{
            field.setAttribute
        })
        
    }
    const displayWinnerX = () => {
        alert("X wins!")
    }

    return { displayDraw,displayWinnerO,displayWinnerX }
})();

