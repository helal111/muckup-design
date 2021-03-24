const Button = document.getElementById("addFriend")
const ButtonDont = document.getElementById("removeFriend")
const Background = document.getElementById("background")
const spinner1 = document.getElementById("spinner1")
const spinner2 = document.getElementById("spinner2")
const Emoji = document.getElementById("emoji")

Button.addEventListener("click", () => {
    spinner1.classList.remove("d-none")
    background.classList.remove("hidden")
    Emoji.classList.remove("hidden")

    setTimeout(() => {
        spinner1.classList.add("d-none")
        window.location.href="friends-add.html"
    }, 3000);
})

ButtonDont.addEventListener("click", () => {
    spinner2.classList.remove("d-none")
    setTimeout(() => {
        spinner2.classList.add("d-none")
        window.location.href="index.html"
    }, 3000);
})
