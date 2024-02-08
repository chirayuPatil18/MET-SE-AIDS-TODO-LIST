let add = document.querySelector("#new_todo");
let pop = document.querySelector(".popup");

console.log(pop);

add.addEventListener("click", function (){
    console.log("click");
    pop.style.display ="flex";
})

let save= document.querySelector("#save");

save.addEventListener("click", function (){
    pop.style.display="none";
})

let close=document.querySelector("#close");

close.addEventListener("click",function(){
    pop.style.display="none";
})