Login = document.getElementById("login_form")
Background = document.getElementById("background")
Spinner = document.getElementById("spinner")


Login.addEventListener("submit", (e) => {
    e.preventDefault()
    Spinner.classList.remove("hidden")
    background.classList.remove("hidden")
    setTimeout(() => {
        window.location.href="home.html"
    }, 3000);
})

