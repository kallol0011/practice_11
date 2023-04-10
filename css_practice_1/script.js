
const button = document.querySelector(".manubutton")
const dropedownmenu = document.querySelector(".togglebox")
button.onclick=function(){
    console.log("working")
dropedownmenu.classList.toggle("open")
}

// button.addEventListener("click",function(){
//         console.log("working2")

//         dropedownmenu.classList.toggle("open")

// })