/*console.log("proshika");
for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i);
    }
}
let n=prompt("enter your number");
n=parseInt(n)
for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}

const favmovie="Avtar";
let guess=prompt("guess my favmovie name");
while((guess!=favmovie)&&(guess!="quit")){
    guess=prompt("Wrong Answer.Please repeat");
}
if(guess==favmovie){
    console.log("congrats");
}
else{
    console.log("you are quit");
}

let fruits=["mango","banana","apple","grapes","guava"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

let actors=[["ironman","spiderman","thor"],["superman","flash"]];
for(let i=0;i<actors.length;i++){
    console.log(i,actors[i],actors[i].length);
    for(let j=0;j<actors[i].length;j++){
        console.log(i,j,actors[i][j])
    }
}

let Todo=[];
let req=prompt("please enter your data");

while(true){
    if(req=="quit"){
        console.log("quiting todo");
        break;
    }
    if(req=="list"){
        console.log("-----------------");
        for(let i=0;i<Todo.length;i++){
            console.log(i,Todo[i]);
        }
        console.log("-----------------");
    }
    else if(req=="add"){
        let task=prompt("please enter task you want to add");
        Todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("please enter your idx");
        Todo.splice(idx,1);
        console.log("task Completed");
    }
    else{
        console.log("wrong request");
    }
   req= prompt("please enter request");
}

const students={
    name:"proshika",
    age:19,
    marks:85.5,
};
const classinfo=[
    {
        name:"simith",
        grade:"A",
        city:"nagpur"
    },
    {
        name:"proshika",
        grade:"A+",
        city:"aurangabad"
    },

];

let max=prompt("Enter your max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("please guess a number");
while(true){
    if(guess=="quit"){
          console.log("quiting guess");
          break;
    }
    if(guess==random){
        console.log("congrats!!");
        break;
    }
    else if(guess<random){
        guess=prompt("your guess is to small.please try again");
    }
    else {
        guess=prompt("your guess is to large.please try again");

    }
}

function printname(){
    console.log("PROSHIKA");
}

printname();

function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
print1to5();

function printinfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printinfo("proshika",19);

function average(n1,n2,n3){
    let ans=(n1+n2+n3)/3;
    console.log(ans);
}
average(1,3,4);

function table(n){
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
}
table(5); 

let arr=[1,2,3,4,5];
let print=function(el){
    console.log(el);
};

arr.forEach(print);

let array =[
    {
    name:"aman",
    mark:95,
},
{
    name:"shraddha",
    mark:93,
},
{
    name:"proshika",
    mark:92,
},
];
array.forEach((student) =>{
    console.log(student);
});

let arr=[1,2,3,4];
let finalval=arr.reduce((res,el) => (res*el));
console.log(finalval);

let arr=[30,40,20,10];
if(arr.every(el => (el%10)==0)){
    console.log("multiple of 10");
}else{
console.log("not multiple of 10");}

let array=[1,2,3,4];
let min=array.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
console.log(min);*/