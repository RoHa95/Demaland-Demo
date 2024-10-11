console.log("hi");

const clickablemenu = document.querySelector(".clickable");
const clickablelist = document.querySelector(".listmenu");
const menu = document.querySelector(".menu");
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