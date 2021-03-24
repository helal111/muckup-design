Logout = document.getElementById("logout")
Menu = document.getElementById("menu")

Logout.addEventListener("click", () => {
    if (Menu.classList.value == "hidden") {
        Menu.classList.remove("hidden")
    } else {
        Menu.classList.add("hidden")
    }
})