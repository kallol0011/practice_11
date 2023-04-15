
var table=document.querySelector("#table")
var Otp = document.querySelector("#otp")
var popdiv = document.querySelector(".popup")
var verifybtn = document.querySelector("#verifybtn")

let formdata=JSON.parse(localStorage.getItem("FormData2"))

console.log(formdata)
append(formdata)



///// search ////
let search=document.querySelector("#search")

search.addEventListener("change",function(){
    let searchdata=formdata.filter((el)=>{
        return el.name.toLowerCase().includes(search.value)
    })
    console.log(searchdata)
    
    append(searchdata)
})


////// sort ///////

let sorting=document.querySelector("#sort")

sorting.addEventListener("change",function(){
    
    let sortdata;
    if(sorting.value==="Desc")
    {
      sortdata=formdata.sort((s,b)=>s.days-b.days)
    }
    else
    {
      sortdata=formdata.sort((s,b)=>b.days-s.days)

    }
   
    console.log(sortdata)
    append(sortdata)
})


////// filter //////

let filtering=document.querySelector("#filter")

filtering.addEventListener("change",function(){

    let filterdata=formdata.filter((el)=>{
        return el.designation===filtering.value
    })

    console.log(filterdata)
    append(filterdata)

})






function append(data){

    document.querySelector("tbody").innerHTML=null;

data?.map((el,index)=>{

    // create tag and put el.(data) on it //

    if(el.status==="pending")
    {
        var row=document.createElement("tr")


        let td1=document.createElement("td")
        td1.innerText=el.userId;
    
        let td2=document.createElement("td")
        td2.innerText=el.name;
    
        let td3=document.createElement("td")
        td3.innerText=el.reason;
    
        let td4=document.createElement("td")
        td4.innerText=el.designation;
    
        let td5=document.createElement("td")
        td5.innerText=el.start;
    
        let td6=document.createElement("td")
        td6.innerText=el.end;
    
        let td7=document.createElement("td")
        td7.innerText=el.days;
    
        let td8=document.createElement("td")
        td8.innerText=el.overser;
    
        let td9=document.createElement("td")
        td9.innerText=el.otp;
    
        let td18=document.createElement("td")
        td18.innerText=el.status;
    
        let td11=document.createElement("td")
        let rejectbtn=document.createElement("button")
        rejectbtn.innerText="reject";
        rejectbtn.style.color="red";
        rejectbtn.addEventListener("click",function(){
     
            reject(index) 
        }) 
        td11.append(rejectbtn)
    
    
        let td12=document.createElement("td")
        let grantedbtn=document.createElement("button")
        grantedbtn.innerText="granted";
        grantedbtn.style.color="green";
        grantedbtn.addEventListener("click",function(){

          /////////////

            let d5=document.createElement("h3")
        d5.innerText= `test : ${el.name}`;
        d5.classList.add("name");
            let d1=document.createElement("h3")
        d1.innerText= `test :  ${el.start}`;
        d5.classList.add("start");
    
        let d2=document.createElement("h3")
        d2.innerText= `test : ${el.end}`;
        d5.classList.add("end");
    
        let d3=document.createElement("h3")
        d3.innerText= `test : ${el.days}`;
        d5.classList.add("days");
    
        let d4=document.createElement("h3")
        d4.innerText= `test : ${el.overser}`;
        d5.classList.add("overser");

        let inp=document.createElement("input")
        let btn=document.createElement("button")
        btn.innerText="verify"
        btn.addEventListener("click",function(){
            console.log(inp.value,el.otp)
            if(inp.value==el.otp)
            {
               granted(index)
               console.log(index)
            }
            else
            {
                console.log("not matched")
            }
        })

    popdiv.append(d5,d1,d2,d3,d4,inp,btn)
     
          ///////////////
        
        })
        td12.append(grantedbtn)
    
         
    
        row.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td11,td12,td18) 
        document.querySelector("tbody").append(row)
    }

})


}





function granted(index){
    console.log("index",index)
   let seconddata = formdata.filter((el,i)=>{
        if(i===index)
        {
            // var modified=JOSN.parse(localStorage.getItem("modify"))||[];
         if(el.status==="pending")
         {
          return  el.status="granted"
         }
        //    modified.push(el)
        //    localStorage.setItem("modify",JSON.stringify(modified))
        }
        else
        {
          return i!=index
        }
    })

    alert(`${index+1}th row data is deleted`)

    localStorage.setItem("FormData2",JSON.stringify(seconddata))
//    console.log(seconddata)
    // console.log(newdata)

location.reload()


}
function reject(index){
    console.log("index",index)
   let seconddata = formdata.filter((el,i)=>{
        if(i===index)
        {
            // var modified=JOSN.parse(localStorage.getItem("modify"))||[];
         if(el.status==="pending")
         {
          return  el.status="reject"
         }
        //    modified.push(el)
        //    localStorage.setItem("modify",JSON.stringify(modified))
        }
        else
        {
          return i!=index
        }
    })

    alert(`${index+1}th row data is deleted`)

    localStorage.setItem("FormData2",JSON.stringify(seconddata))
//    console.log(seconddata)
    // console.log(newdata)

location.reload()


}