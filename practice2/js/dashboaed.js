
let table=document.querySelector(".table")
let filterButton=document.querySelector("#filterButton")
let designation=document.querySelector("#designation")
let search=document.querySelector("#search")

let popup = document.querySelector(".popup")



let formdata = JSON.parse(localStorage.getItem("Form"))

append(formdata)
console.group(formdata)




//////// filter //////////

filterButton.addEventListener("click",function(){

  // if(designation.value)
  // {
    let filterList=formdata.filter((el)=>(
 
    el.designation==designation.value
  
  
  ))
    console.log(filterList)
    append(filterList)
  // }
  // else
  // {
  //   location.replace("dashboard.html")
  // }
})


//////// search ///////////

search.addEventListener("change",function(){
   
  var searchValue=formdata.filter((el)=>(
    el.name.toLowerCase().includes(search.value)
  ))
  console.log(search.value)
  append(searchValue)
})

/////////// pagination ///////////////////////////////////////////////////////////////////////////////


// let pagenumber;
// let p;
// let pagenumber;
// let button1=document.createElement("button")
// button1.innerText="prev"

// let button2=document.createElement("button")
// button2.innerText="next"
// button2.addEventListener("click",function(){
//   pagenumber++
//   console.log(pagenumber)
  

// })


// document.querySelector(".pagination").append(button1,button2)


// const itemsPerPage = 7;

// const totalPages = Math.ceil(formdata.length / itemsPerPage);

// function getPageData(page=1) {
//   const startIndex = (page - 1) * itemsPerPage;
//   return formdata.slice(startIndex, startIndex + itemsPerPage);
// }

// const pageData = getPageData(pagenumber);


// let pagearr=[]
// for (const item of pageData) {

//   // console.log(item)
//   pagearr.push(item)

// }

// console.log(pagearr)
// append(pagearr)
 
//////////////////////////////////////////////////////////////////////////////////////////


///////// sort ///////


  var sorted = document.querySelector("#sort")
  var sortbtn=document.querySelector("#sortbtn")
  sortbtn.addEventListener("click",function(){
     

     console.log(sorted.value)
   
    let sortingData;
    if(sorted.value==="desc")
    {
      sortingData = formdata.sort((a,b)=>b.days-a.days)

    }
    else
    {
      sortingData = formdata.sort((a,b)=>a.days-b.days)
    }
      console.log(sortingData)
    append(sortingData)

   })










function append(data){

document.querySelector("tbody").innerHTML=null;





data?.forEach((el,index) => {
   
  


    let row = document.createElement("tr")
    

    let td1 = document.createElement("td")
    td1.innerText=el.userid
    let td2 = document.createElement("td")
    td2.innerText=el.name
    let td3 = document.createElement("td")
    td3.innerText=el.reason
    let td4 = document.createElement("td")
    td4.innerText=el.designation
    let td5 = document.createElement("td")
    td5.innerText=el.start
    let td6 = document.createElement("td")
    td6.innerText=el.end
    let td7 = document.createElement("td")
    td7.innerText=el.overser
    let td8 = document.createElement("td")
    td8.innerText=el.status === undefined ? "pending" :"pending"
    let td9 = document.createElement("td")
    let grantButton=document.createElement("button")
    grantButton.innerText="grent"
    grantButton.style.color="green"
    
    grantButton.addEventListener("click",function(){
      let popdiv = document.createElement("div")

      let p1=document.createElement("p")
      p1.innerText=el.name

      let p2=document.createElement("p")
      p2.innerText=el.reason

      let p3=document.createElement("p")
      p3.innerText=el.designation

      let p4=document.createElement("p")
      p4.innerText=el.overser
      
      let p5=document.createElement("input")
      let btn=document.createElement("button")
      btn.innerText="click"
       
      btn.addEventListener("click",function(){
        if(p5.value==el.otp)
        {
          removegranted(index)
          console.log(el.otp)
        }
        else
        {
          alert(`${p5.value} dose not match with actual otp`)
          console.log(p5.value,el.otp)
          p5.value=null
          
        }
      })
      

      console.log(p1.innerText)
      popdiv.append(p1,p2,p3,p4,p5,btn)
      popup.append(popdiv)



    })



    
    let td11 = document.createElement("td")
    let rejectbtn=document.createElement("button")
    rejectbtn.innerText="reject"
    rejectbtn.style.color="red"
    
    td9.append(rejectbtn)
    td11.append(grantButton)

    rejectbtn.addEventListener("click",function(e){
        remove(index)
        // let target = e.target;
      //  let text= target.parentElement.parentElement.innerText
      //  alert(text)
      // target.parentElement.parentElement.remove()
    })

    let td0 = document.createElement("td")
    td0.innerText=el.otp 

    
      
    const date1 = new Date(el.start);
    const date2 = new Date(el.end);
    const diffTime = Math.abs(date2 - date1); 
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // console.log(diffDays); 
      
    
    let td18 = document.createElement("td")
    td18.innerText=diffDays

    // sorting(el.start,el.end)

    row.append(td1,td2,td3,td4,td5,td6,td7,td0,td8,td9,td11,td18)
    document.querySelector("tbody").append(row)

  



});




}





//// removegranted ////

function removegranted(index){

  let formdata=JSON.parse(localStorage.getItem("Form"))

  let newData=formdata.filter(function (el,i){

      if(i==index){

          let trash=JSON.parse(localStorage.getItem("granted"))||[]
          // trash.push(el);

          if(el.status=="pending" || el.status==undefined)
          {
           el.status="reject"
          }
          trash.push(el);

          localStorage.setItem("granted",JSON.stringify(trash));

      }

      else{

          return i!=index;

      }

  })

  alert(`${index+1}th row removed from dashboard`)

localStorage.setItem("Form",JSON.stringify(newData));



location.replace("dashboard.html");
// append();
}




function remove(index){

    let formdata=JSON.parse(localStorage.getItem("Form"))
 
    let newData=formdata.filter(function (el,i){

        if(i==index){

            let trash=JSON.parse(localStorage.getItem("trash"))||[]
            // trash.push(el);

            if(el.status=="pending" || el.status==undefined)
            {
             el.status="granted"
            }
            trash.push(el);

            localStorage.setItem("trash",JSON.stringify(trash));

        }

        else{

            return i!=index;

        }

    })

    alert(`${index+1}th row removed from dashboard`)

localStorage.setItem("Form",JSON.stringify(newData));



location.replace("dashboard.html");
// append();
}