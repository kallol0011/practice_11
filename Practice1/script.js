const button = document.querySelector(".togglebtn")
    const togglemenu =document.querySelector(".togglelist")

    button.onclick=function(){
       
        console.log("w")
        togglemenu.classList.toggle("open")
    }