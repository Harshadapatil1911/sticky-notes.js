const button = document.querySelector("button")
// console.log(button);
const color = document.querySelector(".color");
const textbox = document.querySelector("#textarea")
const rightcontainer = document.querySelector(".id1")
const remove2 = document.querySelector(".id4")
button.addEventListener("click", function(){
   const bgColor= color.value;
   const text = textbox.value;
   if(text === "")
   {
    alert("please input the text");
    return ;
   }
   // console.log("still running")
  
   const div = document.createElement("div");
  
   
   div.innerHTML =  `<p class = "id2">${text}</p> 
   <span class= "id3">X</span>`
   // console.log(div.innerHTML);
   div.style.backgroundColor = bgColor;
   rightcontainer.appendChild(div);
   textarea.value = "";
   remove2.style.display="none";

   
})
//  const remove = document.querySelectorAll(".id3");
rightcontainer.addEventListener("click" , function(e){
 console.log(e.target.parentElement);
 rightcontainer.removeChild(e.target.parentElement);
})


 

