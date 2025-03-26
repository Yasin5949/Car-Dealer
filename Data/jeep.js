import { Products } from "./products.js";
export let Jeep='';
Products.forEach((Products)=>{
    if(Products.Catagory==="Jeep"){
        Jeep+=`
        <div class="product" ">
            
            <div class="item-image">
                <image src="${Products.image}" class="car-image"></image>
            </div>
            <div class="sale-discription">
                <div class="product-name">
                    ${Products.productName}
                    <button class="like" style="background-color:red;margin-top:0px;" id="${Products.id}">${Products.like} Like</button>
                </div>
                <P class="discription">
                </P>
                <div class="price">$${Products.price}
                <button class="view" data-product-id="${Products.id}">view detail</button>
                </div>
                

            </div>
        </div>
        `;
    }
});