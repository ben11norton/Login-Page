function myMenuFunction(){
    console.log("Menu button clicked.");
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu"){
        i.className += " responsive";
    } else{
        i.className = "nav-menu";
    }
}



var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login(){
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " purple-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register(){
    x.style.left = "-520px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " purple-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}
