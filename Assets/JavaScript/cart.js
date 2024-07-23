document.addEventListener("DOMContentLoaded", function() {
    let num = document.getElementById("num");
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let subTotalEl = document.getElementById("subTotal");
    let subTotalCartEl = document.getElementById("subTotalCart");
    let totalCartEl = document.getElementById("totalCart");
    const pricePerItem = 35.00;
    let count = parseInt(num.innerText);
    let updateCartEl = document.getElementById("updateCart");


    updateCartEl.onclick = function() {
        let subtotalValue = pricePerItem * count;
        subTotalCartEl.innerText = `$${subtotalValue.toFixed(2)}`;
        totalCartEl.innerText = `$${subtotalValue.toFixed(2)}`;
        subTotalEl.innerText = `$${subtotalValue.toFixed(2)}`;
        
    }

    function formatNumber(num) {
        return num.toString().padStart(2);
    }

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
});
