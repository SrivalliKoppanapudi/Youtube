const menuEl=document.getElementById("menu")
const sideEl=document.querySelector(".side")
const headEl=document.querySelector("h3")
const main=document.querySelector(".main-container")
menuEl.onclick=()=>{
   headEl.classList.toggle("dis")
   sideEl.classList.toggle("sidebar-collapse")
   main.classList.toggle("main-container-width")
}