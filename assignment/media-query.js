var darkMode = false;

document.getElementById('toggle-dark-mode').addEventListener('click',switchTheme)

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