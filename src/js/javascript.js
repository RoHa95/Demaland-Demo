console.log("hi");
//navbar section
const clickablemenu = document.querySelector(".clickable");
const clickablelist = document.querySelector(".listmenu");
const menu = document.querySelector(".menu");
// our services section
const servicesbtn = document.querySelectorAll(".services");
const serviceschild = document.querySelector(".services-child");

//navbar section functions
clickablemenu.addEventListener("click", (e) => {
  clickablelist.classList.toggle("hidden");
});
clickablelist.addEventListener("click", () => {
  console.log("click");
});
menu.addEventListener("blur", () => {
  clickablelist.classList.add("hidden");
});

// our services section functions
servicesbtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("servic");
    item.classList.add("bg-gray-100");
    item.querySelector(".services-child").classList.remove("hidden");
    item.querySelector(".services-child").classList.add("flex");
  });
  item.addEventListener("blur", (e) => {
    item.classList.remove("bg-gray-100");
    item.querySelector(".services-child").classList.add("hidden");
    item.querySelector(".services-child").classList.remove("flex");
  });
});
