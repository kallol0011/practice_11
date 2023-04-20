

function makeobj(b,n,p,i){

    this.brand=b,
    this.name=n,
    this.price=p,
    this.image=i


}


function alldata(event){
    event.preventDefault();

    let form=document.querySelector("form");

    let brand=form.product_brand.value;
    let name=form.product_name.value;
    let price=form.product_price.value;
    let image=form.product_image.value;

    let p1=new makeobj(brand,name,price,image)

    // console.log(p1)

    let data=JSON.parse(localStorage.getItem("brandData"))||[];

    data.push(p1);
    

    localStorage.setItem("brandData",JSON.stringify(data));


}



