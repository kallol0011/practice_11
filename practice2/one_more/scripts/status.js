
var table=document.querySelector("#table")
var datafilter=document.querySelector("#selecttag")

let formdata=JSON.parse(localStorage.getItem("FormData2"))

console.log(formdata)
append(formdata)



/////// filter //////

datafilter.addEventListener("change",function(){
    var filterdata;
    if(datafilter.value==="all")
    {
        filterdata=formdata.filter((el)=>{
            return el.status
        })
    }
    
    else
    {
        filterdata=formdata.filter((el)=>{
            return el.status===datafilter.value
        })
    }
    
    console.log(filterdata)
    append(filterdata)

})



/////////////////////


function append(data){

    document.querySelector("tbody").innerHTML=null;

data?.map((el,index)=>{

    // create tag and put el.(data) on it //

    if(el.status!==undefined)
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
        td18.style.color="white";

    
        if(el.status==="granted")
        {
            td18.style.backgroundColor="green"
        }
        else if(el.status==="reject")
        {
            td18.style.backgroundColor="red"
        }
        else
        {
            td18.style.backgroundColor="black"
        }

        // let td11=document.createElement("td")
        // let rejectbtn=document.createElement("button")
        // rejectbtn.innerText="reject";
        // rejectbtn.style.color="red";
        // rejectbtn.addEventListener("click",function(){
     
        //     reject(index) 
        // }) 
        // td11.append(rejectbtn)
    
    
        // let td12=document.createElement("td")
        // let grantedbtn=document.createElement("button")
        // grantedbtn.innerText="granted";
        // grantedbtn.style.color="green";
        // td12.append(grantedbtn)
    
         
    
        row.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td18) 
        document.querySelector("tbody").append(row)
}

})


}