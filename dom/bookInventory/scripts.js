const elements = document.querySelectorAll('.sub-container');

elements.forEach(element => {
    element.addEventListener('click', function () {
        this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active');
    });
});

var len = document.querySelectorAll('.sub-container').length;
document.getElementById("calculate-btn").addEventListener("click", function() {
    var div = document.getElementsByClassName("inv-data");
    var total = 0;
    var table = document.getElementById("inv-data-table");
    table.innerHTML = "<tr><th>Title</th><th>Price</th><th>Total</th></tr>";
    for(let i = 0; i < len; i++) {
        var a = document.querySelector(".img" + (i+1) + "");
        if (a !== null && a.parentElement.classList.contains('active')) {
            div[0].style.visibility = "visible";
            var bName = a.dataset.name;
            var bPrice = a.dataset.price;
            total += parseInt(bPrice);
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = bName;
            cell2.innerHTML = `₹${bPrice}`;
        }
        else if (total === 0){
            div[0].style.visibility = "hidden";
        }
    }
    document.getElementById("total-price").innerHTML = `₹${total}`;
    if(total !== 0) {
        var totalCell = row.insertCell(2);
        totalCell.innerHTML = `₹${total}`;
    }
});

var step = 300;

// Get the elements with class 'preSlide' and 'nextSlide'
var scrollleftElements = document.querySelectorAll('.scroll-left');
var scrollrightElements = document.querySelectorAll('.scroll-right');

// Function to scroll left
function scrollLeft(event) {
    event.preventDefault();
    this.scrollBy(step, 0);
}

// Function to scroll right
function scrollRight(event) {
    event.preventDefault();
    this.scrollBy(-step, 0);
}

document.getElementsByClassName("scroll-left").addEventListener("click", () => {
    document.getElementById("scroll-container").scrollBy(step, 0);
});
document.getElementsByClassName("scroll-right").addEventListener("click", () => {
    document.getElementById("scroll-container").scrollBy(-step, 0);
});