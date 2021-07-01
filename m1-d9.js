window.onload = function(){
    displayBingoBoard()
}

const displayBingoBoard = function(){
    let boardContainerNode = document.getElementById("board-container")
    for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++)
{
    
    let bingoNode = document.createElement('div')
    bingoNode.innerText = bingoNumber
    
    bingoNode.classList.add("cardContainer")

    boardContainerNode.appendChild(bingoNode)
}
}
const selectNum = function(){
    let selectedNum = []
    for(let i = Math.floor(Math.random()*76);i<=76;i++){
        selectedNum.push(i);
  selectedNum.classList.add("selected")
    }
 

}


