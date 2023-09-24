let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;
let colors = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");
let beg = document.querySelector(".start");
beg.addEventListener("click", function () {
  if (start == false) {
    start = true;
    levelUp();
  }
});

function levelUp() {
  userSeq=[];
  level++;
  h2.innerText = `LEVEL ${level}`;
  let randIndex = Math.floor(Math.random() * 4);
  let randColor = colors[randIndex];
  gameSeq.push(randColor);
  let boxNo = document.querySelector(`.${randColor}`);
  blink(boxNo);
}

function blink(box) {
  box.classList.add("blinked");
  setTimeout(function () {
    box.classList.remove("blinked");
  }, 200);
}

function btnPress() {
  let btn = this;
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  blink(btn);
  checkAns(userSeq.length-1);
}

let boxBtns = document.querySelectorAll(".boxes");
for (btn of boxBtns) {
  btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if(userSeq.length== gameSeq.length){
        setTimeout(levelUp,400);
    }
  } else {
    h2.innerHTML = `GAME OVER! Your score is <b>${level}</b> <br> Press the start button to restart the game`;
  reset();
}
}
function reset(){
    start=false;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="#fff";
    },150)
    gameSeq=[];
    userSeq=[];
    level=0;
}