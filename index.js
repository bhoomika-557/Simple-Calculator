// AC - clear string
// into - delete last element of the string
// = - give the answer
let emptystring = "";
let buttons = document.querySelectorAll(".button");

let string = document.getElementsByClassName("inputclass")
const AC = document.querySelector(".AC");
const into = document.querySelector(".into");
const isequalto = document.querySelector(".equal");

// console.log(isequalto.innerHTML)
// into.innerHTML="njbrfbgerhgieioeiogie"
// console.log(into.innerHTML)
// into.innerHTML

Array.from(buttons).forEach((button)=>{

    button.addEventListener("click",(e)=>{
      
        if(button.innerHTML==AC.innerHTML){
            document.querySelector(".inputclass").value="";
            emptystring=""
        }
        else if(button.innerHTML == into.innerHTML){
           
            document.querySelector(".inputclass").value = emptystring.slice(0,emptystring.length-1)
            emptystring=emptystring.slice(0,emptystring.length-1)
        }
        else if(button.innerHTML == isequalto.innerHTML){
            console.log(button.innerHTML,isequalto.innerHTML)
            document.querySelector(".inputclass").value = eval(emptystring)
            // document.querySelector(".inputclass").value = emptystring
        }
        else{
       emptystring=emptystring+e.target.innerHTML;
       document.querySelector(".inputclass").value=emptystring
        }
    })
})
