/*let btn=document.querySelector("button");
console.dir(btn);

btn.click=function(){
console.log("btn was clicked");
}
for(btns of btn){
    btns.addEventListener("click",sayHello);
    btns.addEventListener("click",sayName);
}
function sayHello(){
    alert("hello");
}
function sayName(){
    alert("proshika");
}
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomcolor = getRandomColor();
     h3.innerText = randomColor;

     let div=document.querySelector("div");
     div.style.backgroundColor=randomColor;

     console.log("color Update");
});
function getRandomColor(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() *255);
    let blue =Math.floor(Math.random() *255);

let color=`rgb(${red}, ${green}, ${blue})`;
return color;
}*/

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){ 
    let item = document.createElement("li");
    item.innerText = inp.value;

    let detbtn = document.createElement("button");
    detbtn.innerText = "delete";
    detbtn.classList.add("delete");
    item.appendChild(detbtn);
    ul.appendChild(item);
    inp.value="";
   
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
