let burgerEl = document.querySelector(".burger") 
let hiddenMenuEl = document.querySelector(".hidden-menu")

burgerEl.addEventListener("click", () => {
    hiddenMenuEl.classList.toggle("move-in")
    burgerEl.classList.toggle("burger-pressed")
})

window.addEventListener("resize", ()=>{
    let w = window.outerWidth;
    if (w > 700) {
        burgerEl.classList.remove("burger-pressed")
        hiddenMenuEl.classList.remove("move-in")
    }
})