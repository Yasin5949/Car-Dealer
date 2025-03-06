let Products=[
    {productName:"McLaren",
        image:"../Images/image5.jpg",
        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/R.jpg",
        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image3.jpg",

        price:1000
        
    },
    {
        productName:"McLaren",
        image:"../Images/image4.jpg",

        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image6.jpg",

        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image7.jpg",

        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image8.jpg",

        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image9.jpg",

        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image1.jpg",

        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image2.jpg",

        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image10.jpg",
        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image11.jpg",
        price:1000
    },
    {
        productName:"McLaren",
        image:"../Images/image2.jpg",
        price:1000
    }];
let productGenerater='';
Products.forEach((Products)=>{
    productGenerater+=`
    <div class="product">
            <div class="item-image">
                <image src="${Products.image}" class="car-image"></image>
            </div>
            <div class="sale-discription">
                <div class="product-name">${Products.productName}</div>
                <P class="discription">
                </P>
                <div class="price">$${Products.price}</div>
                


            </div>

        </div>`;

});
console.log(productGenerater);
document.querySelector(".container").innerHTML=productGenerater;
