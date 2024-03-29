var darkMode = true;
document.body.classList.remove("dark");

function switchTheme() {
    if (darkMode == true) {
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
        console.log("dark mode on");
    }
    darkMode = !darkMode;
}
document.getElementById('toggle-dark-mode').addEventListener('click',switchTheme)