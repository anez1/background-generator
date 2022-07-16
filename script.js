var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementsByClassName("grediant")[0];

var button=document.getElementById("ramdon");
var css2=document.getElementById("hello");
var diAlgo=document.getElementById("saySomething");

/*
diAlgo.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        console.log("hello there");
    }

})
*/
function addText(){
  
   var p=document.createElement("p");
   p.appendChild(document.createTextNode(diAlgo.value));
   css2.appendChild(p);
   diAlgo.value="";
   
 
}
function addListAfterKeyPress(event){
    if(event.key==="Enter"){
        addText();
    }
}
function setGradient(){
    body.style.background="linear-gradient(to right," +color1.value+ ","+color2.value+")";
    css.textContent= body.style.background+ ";";
    //document.getElementById("text").textContent=body;
}

//function GeneratorRamdon(){
   // body.style.background="linear-gradient(to right," +Math.floor((Math.random() * 255) + 1)+ ","+Math.floor((Math.random() * 255) + 1)+")";
//}

function GeneratorRamdon(){
   
    body.classList.toggle("segundoBack");

}

button.addEventListener("click",function(){
    GeneratorRamdon();
})

diAlgo.addEventListener("keypress",addListAfterKeyPress);
color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);
//button.addEventListener("click",GeneratorRamdon);

