console.log("hi");

const clickablemenu = document.querySelector(".clickable");
const clickablelist = document.querySelector(".listmenu");
const menu = document.querySelector(".menu");

const servicesbtn = document.querySelector(".services");
const serviceschild = document.querySelector(".services-child");

// document.addEventListener("click", e=>{
// console.log("uuu");

// })
clickablemenu.addEventListener("click",e=>{
    clickablelist.classList.toggle("hidden");
})
clickablelist.addEventListener("click",()=>{
    console.log("click");
    
})
menu.addEventListener("blur", ()=>{
    clickablelist.classList.add("hidden");
    
})

servicesbtn.addEventListener("click",e=>{
    console.log("servic");
    servicesbtn.classList.add("bg-gray-100");
    serviceschild.classList.remove("hidden");
    serviceschild.classList.add("flex");
    
})