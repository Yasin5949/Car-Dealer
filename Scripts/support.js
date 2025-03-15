

function sendMessage(){
    document.querySelector('.messages').innerHTML=``;
    let message=document.getElementById('textMessage').value;
    let messages=JSON.parse(localStorage.getItem('messages')) || [];
    if(message){
        messages.push({
            Message:message,
            Id:1
        });
    }
    localStorage.setItem('messages',JSON.stringify(messages));
    let messaging=JSON.parse(localStorage.getItem('messages')) || [];
    messaging.forEach((messages)=>{
        console.log(messages);
        if(messages.Id===1){
            document.querySelector('.messages').innerHTML+=`
                <div class="messageContainer">
                    <div class="texts">${messages.Message}</div>
                </div>
        `;}
        if(messages.Id===2){
            document.querySelector('.messages').innerHTML+=`
                <div class="messageContainerAdmin">
                    <div class="adminMessage">${messages.Message}</div>
                </div>
        `;}
        document.getElementById('textMessage').value=``;

    });
}
function chat(){
    document.querySelector('.oprationContainer').innerHTML=`
        <div class="messaging">
            <div class="messages">
            </div>
            <div class="messageArea">
                <textarea placeholder="message" id="textMessage"></textarea>
                <button onclick="sendMessage()">send</button>
                <button class="deleteChat" onclick="deleteChat()">delete chat</button>
            </div>
        </div>
    `;
}
function deleteChat(){
    localStorage.clear();    
    document.querySelector('.messages').innerHTML=``;
    console.log(localStorage);
}
function callBack(){
    document.querySelector('.oprationContainer').innerHTML=`
        <div class="call-back">
            <input type="text" placeholder="Enter Your Number" class="number">
            <button class="callMe" onclick="sent()">Call Me</button>
        </div>
    `;
}
function sent(){
    let number=document.querySelector('.number').value;
    if(!number){
        alert("please Enter Your Number So we can call you");
        return;
    }
    document.querySelector('.oprationContainer').innerHTML=`
            <div class="callMessage">We Will Call You Shortly!</div>

                `;
}
function mail(){
    document.querySelector('.oprationContainer').innerHTML=`
        <div class="mails">
            <div class="callContact">
                <div class="section">Contact Us</div>
                <div class="section">+251911111199</div>
                <div class="EmailAddress">+251923453498</div>
            </div>
            <div class="mailing">
                <div class="section">Email Us</div>
                <div class="EmailAddress">GOH@gmail.com</div>
                <div class="other">Or</div>
                <div class="socialMedia">
                    <div class="icons">
                        <image src="../Images/whatsUp.png" class="images"></image>
                    </div>
                    <div class="icons">
                        <image src="../Images/instagram.png" class="images"></image>
                    </div>
                    <div class="icons">
                        <image src="../Images/linkdin.png" class="images"></image>
                    </div>
                </div>
            </div>

        </div>
    `;

}