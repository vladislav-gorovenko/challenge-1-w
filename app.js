let burgerEl = document.querySelector(".burger") 
let hiddenMenuEl = document.querySelector(".hidden-menu")

burgerEl.addEventListener("click", () => {
    hiddenMenuEl.classList.toggle("move-in")
    hiddenMenuEl.classList.toggle("shadow")
    burgerEl.classList.toggle("burger-pressed")
})