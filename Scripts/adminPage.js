import { Products } from '../Data/products.js';
const oprationField=document.querySelector(".opration-field");
function add(){
    oprationField.innerHTML=`
    <form class="add-form">
        <div class="formIdentifier">Add Product</div>
        <div class="Name"><input type="text" class="ProductName" placeholder="Name Of Prouct" style="font-size:large;"></div>
        <div class="Name"><input type="textArea" class="ProductName" placeholder="Discription" style="font-size:large;"></div>
        <div class="Name"><input type="text" class="ProductName" placeholder="Price" style="font-size:large;"></div>
        <div class="Name"><input type="file"  class="ProductNme" name="Choose Image" style="font-size:large;"></div>
        <div class="Name"><button type="button" class="add-to-product" onclick="">Add</button></div>
    </form>

    `;
    console.log("check");
}

function modify(){
    oprationField.innerHTML=`
    <form class="add-form">
        <div class="formIdentifier">Modify Product</div>
        <div class="Name"><input type="text" class="ProductName searchToModify" placeholder="Prouct To Be Modified" style="font-size:large;"></div>
        <div class="Name"><button type="button" class="add-to-product" onclick="search()">Search</button></div>
    </form>

    `;
}
function remove(){
    oprationField.innerHTML=`
    <form class="add-form">
        <div class="formIdentifier">Remove Product</div>
        <div class="Name"><input type="text" class="ProductName searchToRemove" placeholder="Prouct To be Removed" style="font-size:large;"></div>
        <div class="Name"><button type="button" class="add-to-product" onclick="searchToRemove()">Search</button></div>
    </form>

    `;
}
function logout(){
    oprationField.innerHTML=`
    <form class="add-form">
        <div class="formIdentifier">Sure To Log-out</div>
        
        <div class="Name"><a href="adminSign-in-page.html" style="text-decoration:none;" ><div  style="width:200px;
        background-color:rgb(11, 179, 11);
        margin-left:30px;
        text-align:center;
        height:30px;
        border-radius:20px;
        color:white;
        font-size:larger;
        margin-bottom:20px;
        "> Yes</div></a>
       <button type="button" class="add-to-product btn" onclick="clears()">No</button></div>
    </form>
    `;
}
function clears(){
    oprationField.innerHTML=``;
    document.querySelector(".information").innerHTML=``;
}
function Mode(){
    let state=document.querySelector(".state");
    let toggle=document.querySelector(".toggle");
    if(!state.classList.contains('On') && !toggle.classList.contains('toggled')){
    state.classList.add("On");
    state.innerHTML='On';
    toggle.classList.add("toggled");
    document.querySelector("body").classList.add('check');
    document.querySelector('.information').classList.remove('other');
    }
    else{
        state.classList.remove("On");
        state.innerHTML="Off";
        toggle.classList.remove("toggled");
    document.querySelector("body").classList.remove('check');

    }
}
function search(){
    let product=parseInt(document.querySelector(".searchToModify").value);
    let display=document.querySelector(".information");
    Products.forEach((Products)=>{
        if(product===Products.id){
            display.innerHTML='Changed';
            console.log(product);
            display.innerHTML=`
            <div class="product" data-id="${Products.id}">
            
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
       
        }
        
    });
  
}
function searchToRemove(){
    let product=parseInt(document.querySelector(".searchToRemove").value);
    let display=document.querySelector(".information");
    Products.forEach((Products)=>{
        if(product===Products.id){
            display.innerHTML='Changed';
            console.log(product);
            display.innerHTML=`
            <div class="product" data-id="${Products.id}">
            
            <div class="item-image">
                <image src="${Products.image}" class="car-image"></image>
            </div>
            <div class="sale-discription">
                <div class="product-name">${Products.productName}</div>
                <P class="discription">
                </P>
                <div class="price">$${Products.price}</div>
                

            </div>
        </div>
        <div class="Remove">
            <button style="background-color:red;" onclick="deleting()">Delete</button>
            <button style="background-color:green;" onclick="clears()">Cancel</button>

        
        </div>`;
       
        }
        
    });
}
function deleting(){
    oprationField.innerHTML=`
        <div class="deleteChoise">
            <h2>Are You Sure ?</h2>
            <button style="background-color:red;">Yes</button>
            <button style="background-color:green;" onclick="clears()">No</button>
        </div>
    `;
}
window.add=add;
window.deleting=deleting;
window.searchToRemove=searchToRemove;
window.remove=remove;
window.logout=logout;
window.modify=modify;
window.clears=clears;
window.search=search;
window.Mode=Mode;

