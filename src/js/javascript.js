console.log("hi");
//navbar section
const clickablemenu = document.querySelector(".clickable");
const clickablelist = document.querySelector(".listmenu");
const menu = document.querySelector(".menu");
// our services section
const servicesbtn = document.querySelectorAll(".services");
const serviceschild = document.querySelector(".services-child");

//our performance
const performancediv = document.querySelectorAll(".performance");

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
    servicesbtn.forEach((item) => {
      item.classList.remove("bg-gray-100");
      item.querySelector(".services-child").classList.add("hidden");
      item.querySelector(".services-child").classList.remove("flex");
    });
    item.classList.add("bg-gray-100");
    item.querySelector(".services-child").classList.remove("hidden");
    item.querySelector(".services-child").classList.add("flex");
  });
  // item.addEventListener("blur", (e) => {
  //   item.classList.remove("bg-gray-100");
  //   item.querySelector(".services-child").classList.add("hidden");
  //   item.querySelector(".services-child").classList.remove("flex");
  // });
});

// our performance section functions
performancediv.forEach((item) => {
  item.addEventListener("click", (e) => {
    performancediv.forEach((item) => {
      item.querySelector(".performance-tag").classList.add("hidden");
      item.querySelector(".title-performance").classList.add("text-lg");
      item.querySelector(".title-performance").classList.remove("text-xl");
    });
    item.querySelector(".performance-tag").classList.remove("hidden");
    item.querySelector(".title-performance").classList.remove("text-lg");
    item.querySelector(".title-performance").classList.add("text-xl");
  });
});
