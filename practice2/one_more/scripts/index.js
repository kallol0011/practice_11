

let form=document.querySelector("#form")


form.addEventListener("submit",function(event){
    event.preventDefault();

    const statusButtons = document.getElementsByName("status");
   
    let designation;
for (let i = 0; i < statusButtons.length; i++) {
  if (statusButtons[i].checked) {
    const selectedStatus = statusButtons[i].value;
    console.log(selectedStatus);
    designation=selectedStatus

    break; 
  }
}

let name=document.querySelector("#name").value

let reason=document.querySelector("#reason").value
// let designation=document.querySelector("#designation").value

let start=document.querySelector("#start").value
let end=document.querySelector("#end").value
let overser=document.querySelector("#overser").value
let submitbtn=document.querySelector("#submitbtn").value

  
  let startDay=new Date(start)
  let endDay=new Date(end)

  let difftime=Math.abs(startDay - endDay)
  let diffDate=Math.ceil(difftime/(1000*60*60*24))
   


////////// form condition /////////////
 
 // name have atleast 4 charector //
  if(name.length<4)
  {
    alert("your name should have more then 4 charectors")
    return;
  }

  // past start date not allowed //

  var today=new Date();
  let day=today.toISOString().slice(0,10)

//   console.log(day)

 if(start<day)
 {
    alert("you can't select past date in start")
    return ;
 }

 // start should more then end date //
 
  if(start >= end)
  {
    alert(`your end date should be more then ${start}`)
    return;
  }
  


/////////////// submit ////////////////

    const dataobj={
        userId:Math.floor(Math.random()+Date.now()),
        name,
        reason,
        designation,
        start,
        end,
        overser,
        otp:Math.floor(Math.random()*9000)+1000,
        days:diffDate,
        status:"pending"
    }

    console.log(dataobj)

  
    let dataarr=JSON.parse(localStorage.getItem("FormData2"))||[]
    dataarr.push(dataobj)


    
    localStorage.setItem("FormData2",JSON.stringify(dataarr))

    console.log(dataarr)
  

    // console.log(dataobj)
    form.reset();
    
})