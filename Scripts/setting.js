function ChangePassword(){
    document.querySelector('.oprationField').innerHTML=`
    <div class="passwordChange">
                    <input type="text" placeholder="Enter Old Password">
                    <input type="text" placeholder="Enter New Password">
                    <input type="text" placeholder="confirm Password">
                    <button class="change">Change</button>
                </div>
    `;
}
function EditProfile(){
    document.querySelector('.container').innerHTML=`
    <div class="editProfile">
            <div class="opratiionContainer">
                <button class="editButton">Change Profile</button>
                <button class="editButton" onclick="ChangePassword()">Change Password</button>
                <button class="editButton" onclick="ChangeUsername()">Change UseraName</button>
            </div>
            <div class="oprationField">
                
            </div>
        </div>
    `;
}
function ChangeUsername(){
    document.querySelector('.oprationField').innerHTML=`
    <div class="passwordChange">
                    <input type="text" placeholder="Enter Password">
                    <input type="text" placeholder="Enter New Username">
                    <button class="change">Change</button>
                </div>
    `;
}