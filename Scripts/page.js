let settingForm=document.querySelector(".panel");
let showSetting=true;
function setting(){
    
    let apeared=document.querySelector(".setting");
    
    if(showSetting){
        showSetting=false;
        settingForm.classList.add("setting-panel");
        settingForm.innerHTML=`<a href='homePage.html'><button>Catagory</button></a>
                                <a href='homePage.html'><button>Trending</button></a>
                                <a href='homePage.html'><button>Setting</button></a>
                                <a href='homePage.html'><button>About</button></a>
                                <a href='homePage.html'><button>Logout</button></a>
                                <a href='homePage.html'><button>Support</button></a>`;
    }
    else{
        showSetting=true;
        settingForm.classList.remove("setting-panel");
        settingForm.innerHTML='';
    }
}
