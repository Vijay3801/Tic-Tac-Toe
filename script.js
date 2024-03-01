let boxes = document.querySelectorAll(".box");
let hide = document.querySelector(".hide");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".new-btn");
let resetGame = document.querySelector(".reset-btn");

let turnO = true;
const winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turnO)
        {
            box.innerText = 'O';
            turnO = false;
        }
        else{
            box.innerText = 'X';
            
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const checkWinner = ()=>{
    for(let pattern of winPattern)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2===pos3)
            {
                showWinner(pos1);
            }
        }
    }
};
const showWinner = (winner) =>{
    disableBox();
    hide.classList.remove("hide");
    msg.innerText = `Congratulations, Winner is ${winner}`;
};
const disableBox = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableBox = () =>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText = "";
    }
};
const reset = () =>{
    hide.classList.add("hide");
    turnO = true;
    enableBox();
};
newGame.addEventListener("click",reset);
resetGame.addEventListener("click",reset);
