let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg")
//track a value
let turno = true; //playerx , playero
const winpatterns = [[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]
const resetGame = () =>{
    turno = true;
    enableBoxes();
};
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};
  const showWinner = (winner) => {
      msg.innerText = `Congratulations , Winner is ${winner}`;
//     msg.innerText = (`Congratulations, Winner is ${winner}`);
    disableBoxes();
  }
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turno){
            //player o
            box.innerHTML = "O";
            turno = false;
        }
        else{
            box.innerHTML = "X"
            turno = true;
        }
         box.disabled = true;
       checkWinner()

    });
    
});
const checkWinner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
    
    if(pos1val !== "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("Winner", pos1val);
               showWinner(pos1val)
               return true;
        }
    }
}
};
reset.addEventListener("click", resetGame);




