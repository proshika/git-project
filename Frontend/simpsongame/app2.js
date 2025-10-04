let gameSeq = [];
let userSeq = [];

let btns=["red","green","purple","yellow"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classlist.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classlist.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log("randIdx");
    //console.log("randColor");
    //console.log("randBtn");
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(){
    console.log("curr level",level);
    let idx = level-1;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `game stop! Your score was <b>${level}</b> <br>Press any key to sart`;
        document.querySelector(body).style.backgroundcolor = "red";
        setTimeout(function(){
            document.querySelector(body).style.backgroundcolor = "white";
        },150);
        reset();
    }
   
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let Allbtn =  document.querySelectorAll(".btn");
for(btn of Allbtn){
    btn.addEventListener("clicked",btnPress);
}

function reset(){
    started =false;
    gameSeq = [];
    userSeq = [];
    level=0;
}