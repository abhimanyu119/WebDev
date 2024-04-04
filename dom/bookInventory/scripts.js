document.addEventListener("click", function(event) {
    if (event.target.classList.contains("book-img")) {
        if (event.target.style.border === "10px solid rgb(200, 90, 180)") {
            event.target.style.border = "1px solid black";
        } else {
            event.target.style.border = "10px solid rgb(200, 90, 180)";
        }
    }
});