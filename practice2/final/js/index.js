// get all the radio buttons with name "status"



let form = document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault()
    const statusButtons = document.getElementsByName("status");
   
    let radiovalue;
// loop through all the radio buttons
for (let i = 0; i < statusButtons.length; i++) {
  // check if the radio button is checked
  if (statusButtons[i].checked) {
    // get the value of the checked radio button
    const selectedStatus = statusButtons[i].value;
    // do something with the selected value
    console.log(selectedStatus);
    radiovalue=selectedStatus

    break; // exit the loop
  }
}

let name=document.querySelector("#name").value

let reason=document.querySelector("#reason").value
// let designation=document.querySelector("#designation").value

// let designation=document.querySelector('input[name="role"]').value
let start=document.querySelector("#start").value
let end=document.querySelector("#end").value
let overser=document.querySelector("#overser").value
// let submitbtn=document.querySelector("#submitbtn")


    

    let dataobj={
      name,
      reason,
      radiovalue,
      start,
      end,
      overser


    }


    console.log(dataobj)

})