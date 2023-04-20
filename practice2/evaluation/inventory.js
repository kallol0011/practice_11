
function append(){



let data=JSON.parse(localStorage.getItem("brandData"));

let container=document.querySelector("#products_data")

container.innerHTML=null;

data.forEach(function (el,index){

    let div=document.createElement("div");


    let img=document.createElement("img");
    img.src=el.image;

    let h1=document.createElement("h1")
    h1.innerText=el.brand;

    let h2=document.createElement("h2")
    h2.innerText=el.name;

    let p=document.createElement("p")
    p.innerText="$"+el.price;

    let btn=document.createElement("button");
    btn.innerText="REMOVE";
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function(){

        console.log(index)
        remove(index);


    })
    div.append(img,h1,h2,p,btn)
    container.append(div);


})

}

append();



function remove(index){

    let data=JSON.parse(localStorage.getItem("brandData"));
 
    let newData=data.filter(function (el,i){

        if(i==index){

            let trash=[]
            trash.push(el);

            localStorage.setItem("trash",JSON.stringify(trash));

        }

        else{

            return i!=index;

        }

    })

localStorage.setItem("brandData",JSON.stringify(newData));

append();



}








