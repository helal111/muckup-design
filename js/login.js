Login = document.getElementById("u_0_a_Ie")
Submit = document.getElementById("u_0_d_rs")
Spinner = document.getElementById("spinner")


Login.addEventListener("submit", (e) => {
    e.preventDefault()
    Spinner.classList.remove("hidden")
    Submit.innerHTML = ""
    setTimeout(() => {
        window.location.href = "home.html"
    }, 3000);
})