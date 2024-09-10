let boxes= document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let reset = document.querySelector(".reset");
let hide = document.querySelector(".hide");
let again = document.querySelector(".again");

let turnO = true;
let count = 0;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO === true){
            box.innerText = "O";
            box.style.color = "#FFF2E1";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "#9AC8CD";
            turnO = true;
        }
        box.disabled =true;
        let isWin = checkWinner();
        

        if(count === 9 && isWin){
            gameDraw();
        }
    });
});

const gameDraw = ()=>{
    msg.innerText = "Game Was Draw!";
    msg.classList.remove("hide");
    disablebtn();
};


const checkWinner = ()=>{
 for(pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val);
            disablebtn();
            showWin(pos1Val);
            
        }}
           
 };
};

const disablebtn = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
};


const showWin = (winner) => {
   msg.innerText = `Congratulations, The Winner is ${winner}`;
   msg.style.fontSize = "45px";
   msg.style.marginTop ="400px";
   msg.style.paddingBottom = "230px";
   msg.style.color = "#803D3B";
   msg.style.fontWeight = "bold";
   msg.classList.remove("msg");
   reset.classList.remove("hide");
   hide.style.marginTop = "1px";
   
}


const resetGame = () =>{
    turnO = true;
    enablebtn ();
    msg.classList.add("msg");
    hide.classList.add("hide");
}

const enablebtn = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


reset.addEventListener("click",resetGame);

const againbtn = () =>{
    for(box of boxes){
        box.innerText = "";
        enablebtn();
    }
};
again.addEventListener("click",againbtn);