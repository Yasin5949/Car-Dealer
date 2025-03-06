const oprationField=document.querySelector(".opration-field");
function add(){
    oprationField.innerHTML=`
    <form class="add-form">
        <div class="formIdentifier">Add Product</div>
        <div class="Name"><input type="text" class="ProductName" placeholder="Name Of Prouct" style="font-size:large;"></div>
        <div class="Name"><input type="textArea" class="ProductName" placeholder="Discription" style="font-size:large;"></div>
        <div class="Name"><input type="text" class="ProductName" placeholder="Price" style="font-size:large;"></div>
        <div class="Name"><input type="file"  class="ProductNme" name="Choose Image" style="font-size:large;"></div>
        <div class="Name"><button class="add-to-product" onclick="">Add</button></div>
    </form?

    `;
}

function modify(){
    oprationField.innerHTML=`
    <form class="add-form">
        <div class="formIdentifier">Modify Product</div>
        <div class="Name"><input type="text" class="ProductName" placeholder="Prouct To Be Modified" style="font-size:large;"></div>
        <div class="Name"><button class="add-to-product">Search</button></div>
    </form?

    `;
}
function remove(){
    oprationField.innerHTML=`
    <form class="add-form">
        <div class="formIdentifier">Remove Product</div>
        <div class="Name"><input type="text" class="ProductName" placeholder="Prouct To be Removed" style="font-size:large;"></div>
        <div class="Name"><button class="add-to-product">Search</button></div>
    </form?

    `;
}
function clears(){
    oprationField.innerHTML="";
}