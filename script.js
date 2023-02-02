//QUERY SELECTORS
const btn1=document.querySelector('.sq1');
const btn2=document.querySelector('.sq2');
const btn3=document.querySelector('.sq3');
const btn4=document.querySelector('.sq4');
const btn5=document.querySelector('.sq5');
const btn6=document.querySelector('.sq6');
const btn7=document.querySelector('.sq7');
const btn8=document.querySelector('.sq8');
const btn9=document.querySelector('.sq9');
const winnerText=document.querySelector('.winner-text');
let counter=0;
var board=new Array(3);
    for(let i=0;i<board.length;i++){
        board[i]=new Array(3);
    }
btn1.addEventListener('click',() => {
    if(counter%2==0){
        btn1.innerHTML="x";
        board[0][0]='x';
    }
    else{
        btn1.innerHTML="o";
        board[0][0]='o';
    }
    //counter++;
    checkWinner();
    btn1.disabled=true;
    
})
btn2.addEventListener('click',() => {
    if(counter%2==0){
        btn2.innerHTML="x"
        board[0][1]='x';
    }
    else{
        btn2.innerHTML="o"
        board[0][1]='o';
    }

    //counter++;
    checkWinner();
    btn2.disabled=true;
})
btn3.addEventListener('click',() => {
    if(counter%2==0){
        btn3.innerHTML="x"
        board[0][2]='x';
    }
    else{
        btn3.innerHTML="o";
        board[0][2]='o';
    }
   
    //counter++;
    checkWinner();
    btn3.disabled=true;
})
btn4.addEventListener('click',() => {
    if(counter%2==0){
        btn4.innerHTML="x"
        board[1][0]='x';
    }
    else{
        btn4.innerHTML="o";
        board[1][0]='o';
    }
    
    //counter++;
    checkWinner();
    btn4.disabled=true;

})
btn5.addEventListener('click',() => {
    if(counter%2==0){
        btn5.innerHTML="x"
        board[1][1]='x';
    }
    else{
        btn5.innerHTML="o"
        board[1][1]='o';
    }
    
    //counter++;
    checkWinner();
    btn5.disabled=true;
})
btn6.addEventListener('click',() => {
    if(counter%2==0){
        btn6.innerHTML="x"
        board[1][2]='x';
    }
    else{
        btn6.innerHTML="o"
        board[1][2]='o';
    }
    //counter++;
    checkWinner();
    btn6.disabled=true;
})
btn7.addEventListener('click',() => {
    if(counter%2==0){
        btn7.innerHTML="x"
        board[2][0]='x';
    }
    else{
        btn7.innerHTML="o"
        board[2][0]='o';
    }
   
    //counter++;
    checkWinner();
    btn7.disabled=true;
})
btn8.addEventListener('click',() => {
    if(counter%2==0){
        btn8.innerHTML="x"
        board[2][1]='x';
    }
    else{
        btn8.innerHTML="o"
        board[2][1]='o';
    }
    //counter++;
    checkWinner();
    btn8.disabled=true;
})
btn9.addEventListener('click',() => {
    if(counter%2==0){
        btn9.innerHTML="x";
        board[2][2]='x';
    }
    else{
        btn9.innerHTML="o"
        board[2][2]='o';
    }
    //counter++;
    checkWinner();
    btn9.disabled=true;
})

function checkWinner(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if((board[i][0]==='x'&& board[i][1]==='x' && board[i][2]==='x')||
            (board[0][i]==='x' && board[1][i]==='x' && board[2][i]==='x')){
                winnerText.innerHTML="Player one wins!";
                gameOver();
                return;
            }
            else if((board[i][0]==='o'&& board[i][1]==='o' && board[i][2]==='o')||
            (board[0][i]==='o' && board[1][i]==='o' && board[2][i]==='o')){
                winnerText.innerHTML="Player two wins!";
                gameOver();
                return;
            }
            if((board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x')){
                winnerText.innerHTML="Player one wins!";
                gameOver();
                return;
            }
            else if((board[0][0]==='o' && board[1][1]==='o' && board[2][2]==='o')){
                winnerText.innerHTML="Player two wins!";
                gameOver();
                return;
            }

        }
    }
    counter++;
    if(counter==9){
        console.log("It's a draw!");
        gameOver();
    }
}

function gameOver(){
    btn1.disabled=true;
    btn2.disabled=true;
    btn3.disabled=true;
    btn4.disabled=true;
    btn5.disabled=true;
    btn6.disabled=true;
    btn7.disabled=true;
    btn8.disabled=true;
    btn9.disabled=true;
}

