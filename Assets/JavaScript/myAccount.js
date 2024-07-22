let num = document.getElementById("num");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

let count = 1; // Initial quantity

plus.addEventListener("click", function() {
    count++;
    num.innerText = formatNumber(count);
});

minus.addEventListener("click", function() {
    if (count > 1) {
        count--;
        num.innerText = formatNumber(count);
    }
});

// Function to format the number with leading zero if needed
function formatNumber(num) {
    return num.toString().padStart(2);
}



