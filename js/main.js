let link = document.querySelector("#other");
let menu = document.querySelector("header nav .container .menu");
let inbtLetest = document.querySelector("#frm-letest form input");



function show(){
    menu.style.opacity = 1;
    menu.style.zIndex = 2;
}
function hide(){
    menu.style.opacity = 0;
    menu.style.zIndex = -1;
}

inbtLetest.onmousemove = function(){
    this.setAttribute("placeholder" , "");

}
inbtLetest.onmouseleave = function(){
    this.setAttribute("placeholder" , "Enter Your Email");
    this.onfocus = function(){
        
    }
}