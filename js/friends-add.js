const Button = document.getElementById("home")
const Button_login = document.getElementById("toLogin")
const spinner = document.getElementById("spinner")

Button.addEventListener("click", () => {
    spinner.classList.remove("d-none")
    setTimeout(() => {
        spinner.classList.add("d-none")
        window.location.href="log-in.html"
    }, 3000);
})

Button_login.addEventListener("click", () => {
    setTimeout(() => {
        window.location.href="log-in.html"
    }, 500);
})