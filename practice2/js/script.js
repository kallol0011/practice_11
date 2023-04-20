
// select the element and the put login in it



let form=document.querySelector(".form")
form.addEventListener("submit",function(event){
    event.preventDefault()

    // let userid=document.querySelector("#userid").value
    let name=document.querySelector("#name").value
    let reason=document.querySelector("#reason").value
    let designation=document.querySelector("#designation").value
    let start=document.querySelector("#start").value
    let end=document.querySelector("#end").value
    let overser=document.querySelector("#overser").value
    // let submit=document.querySelector("#submit").value
    
console.log(designation)
    




    if(name.length<4)
    {
        alert("name should be atleast 4 charecter")
        return ;
    }
    const today = new Date();
    const todayDate = today.toISOString().slice(0, 10);

    if(start<todayDate)
    {   console.log(start,todayDate)
        alert(`you can't select past date ${start}`)
        return ;
    }


    if(start>end)
    {
        alert("you can't choose previous date")
        return ;
    } 
  

    const date1 = new Date(start);
    const date2 = new Date(end);
    const diffTime = Math.abs(date2 - date1); 
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffDays);










/////// submit ////////
    
    const dataobj={

        userid:Math.floor(Math.random()+Date.now()),
        name,
        reason,
        designation,
        start,
        end,
        overser,
        status:"pending",
        otp:Math.floor(Math.random() * 9000) + 1000,
        days:diffDays

    }


  const dataarr=JSON.parse(localStorage.getItem("Form"))||[];

  dataarr.push(dataobj)

  localStorage.setItem("Form",JSON.stringify(dataarr))

    
   alert("data submit siccessfully")
   console.log(dataarr)
   
   
   
   form.reset();
   
})

