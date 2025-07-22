let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level =0;
let hiScore=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
}
function levelUp(){
    userseq=[];
level++;
h2.innerText=`leve${level}`;
// random color color
let randIdx=Math.floor(Math.random()*4);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
gameseq.push(randColor);
console.log(gameseq);
gameFlash(randBtn);
}
function checkans(idx){
if(userseq[idx]==gameseq[idx]){
if(userseq.length==gameseq.length){
    setTimeout(levelUp,1000);
}
}else{
    h2.innerHTML=`Game Over! your score was ${level}<br> press any key to start the game`;
   if(level-1>hiScore){
    hiScore=level;
    }
   h3.innerHTML=`your highest score was: ${hiScore}`;
   
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
 }
}
function btnpress(){
let btn=this;
userFlash(btn);

userColor = btn.getAttribute("id");
console.log(userColor);
userseq.push(userColor);
checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
 for(btn of allbtns){
btn.addEventListener("click",btnpress);
}
function reset(){
started=false;
gameseq=[];
userseq=[];
level=0;
}
 


