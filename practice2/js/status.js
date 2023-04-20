
function append(){
  
    let Formdata=JSON.parse(localStorage.getItem("Form"))
    console.log(Formdata)
    let Trashdata=JSON.parse(localStorage.getItem("trash"))
    let data=JSON.parse(localStorage.getItem("granted"))

    const table =document.querySelector(".table")
    
    data.map((el,index) => {

        var row=document.createElement("tr")

        let td1=document.createElement("td")
        td1.innerText=el.userid

        let td2=document.createElement("td")
        td2.innerText=el.name
        
        let td3=document.createElement("td")
        td3.innerText=el.reason
        
        let td4=document.createElement("td")
        td4.innerText=el.designation

        let td5=document.createElement("td")
        td5.innerText=el.start

        let td6=document.createElement("td")
        td6.innerText=el.end

        let td7=document.createElement("td")
        td7.innerText=el.overser

        let td8=document.createElement("td")
        td8.innerText=el.status
        td8.style.color="green"


        row.append(td1,td2,td3,td4,td5,td6,td7,td8)

        table.append(row)

    })
    
    Trashdata.map((el,index) => {

        var row=document.createElement("tr")

        let td1=document.createElement("td")
        td1.innerText=el.userid

        let td2=document.createElement("td")
        td2.innerText=el.name
        
        let td3=document.createElement("td")
        td3.innerText=el.reason
        
        let td4=document.createElement("td")
        td4.innerText=el.designation

        let td5=document.createElement("td")
        td5.innerText=el.start

        let td6=document.createElement("td")
        td6.innerText=el.end

        let td7=document.createElement("td")
        td7.innerText=el.overser

        let td8=document.createElement("td")
        td8.innerText=el.status
        td8.style.color="red"


        row.append(td1,td2,td3,td4,td5,td6,td7,td8)

        table.append(row)

    })
    

    Formdata.map((el,index) => {

        var row=document.createElement("tr")

        let td1=document.createElement("td")
        td1.innerText=el.userid

        let td2=document.createElement("td")
        td2.innerText=el.name
        
        let td3=document.createElement("td")
        td3.innerText=el.reason
        
        let td4=document.createElement("td")
        td4.innerText=el.designation

        let td5=document.createElement("td")
        td5.innerText=el.start

        let td6=document.createElement("td")
        td6.innerText=el.end

        let td7=document.createElement("td")
        td7.innerText=el.overser

        let td8=document.createElement("td")
        td8.innerText=el.status 
        td8.style.color=el.status === "pending" ? "black" : "green"

        row.append(td1,td2,td3,td4,td5,td6,td7,td8)

        table.append(row)

    })


}
append();

