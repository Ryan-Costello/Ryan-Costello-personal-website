function darkMode() {
    document.body.classList.toggle("dark-mode");
    document.body.getElementsByClassName("nav_bar")[0].classList.toggle("dark-mode-navBar");
    document.getElementsByClassName("resume_link")[0].classList.toggle("dark-mode-resume");
}