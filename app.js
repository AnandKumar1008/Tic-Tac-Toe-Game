const gameboard=[
    ['','',''],
    ['','',''],
    ['','','']
];
let currentPlayer='X';
const buttons=document.querySelectorAll('button');
function handleButtonClick(event){
    const button =event.target;
    const id=button.id;
    const row=Math.floor((id-1)/3);
    const column=(id-1)%3;
    if(gameboard[row][column]!=''){
        return ;
    }
    gameboard[row][column]=currentPlayer;
    button.textContent=currentPlayer;
    if(checkForWin()){
        if(currentPlayer==='X')
        alert('Congratulations! Player1 wins');
        else{
            alert('Congratulations! Player2 wins');
        }
        resetGame();
    }
    else if(checkForDraw()){
        // resetGame();
        alert('Draw!');
        
    }
    else{
        switchPlayer();
    }
}
function checkForWin(){
    for(let i=0;i<3;i++){
        if(gameboard[i][0]===currentPlayer&&gameboard[i][1]===currentPlayer&&gameboard[i][2]===currentPlayer) return true;
    }
    for(let i=0;i<3;i++){
        if(gameboard[0][i]===currentPlayer&&gameboard[1][i]===currentPlayer&&gameboard[2][i]===currentPlayer) return true;
    }
    if(gameboard[0][0]===currentPlayer&&gameboard[1][1]===currentPlayer&&gameboard[2][2]===currentPlayer) return true;
    if(gameboard[2][0]===currentPlayer&&gameboard[1][1]===currentPlayer&&gameboard[0][2]===currentPlayer) return true;
    return false;
}
function checkForDraw(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(gameboard[i][j]=='') return false;
        }
    }
    return true;
}
function switchPlayer(){
    currentPlayer=currentPlayer==='X'?'O':'X';
}
function resetGame(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameboard[i][j]='';
            const buttonId=i*3+j+1;
            document.getElementById(buttonId.toString()).textContent='';
        }
    }
    currentPlayer='X';
}
buttons.forEach(button=>{
    button.addEventListener('click',handleButtonClick);

});