const btn = document.querySelector(".shop-btn")

btn.onclick = () => {

document.querySelector("#shop").scrollIntoView({
behavior:"smooth"
})

}

const menu = document.querySelector(".menu-btn")
const nav = document.querySelector(".nav")

menu.onclick = () => {

if(nav.style.display === "flex"){

nav.style.display = "none"

}else{

nav.style.display = "flex"

}

}