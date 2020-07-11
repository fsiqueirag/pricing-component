let slider = document.querySelector(".slider");
let pricesLeft = document.getElementById("price-left");
let pricesMiddle = document.getElementById("price-middle");
let pricesRight = document.getElementById("price-right");
let checkboxes = document.getElementById('checkbox');
let estado = true;
checkboxes.checked = false;
slider.addEventListener('click', changePrices);
pricesLeft.innerText = "$199.99";
pricesMiddle.innerText = "$249.99";
pricesRight.innerText = "$399.99";

function changePrices() {
    if (estado === false) {
        pricesLeft.innerText = "$199.99";
        pricesMiddle.innerText = "$249.99";
        pricesRight.innerText = "$399.99";
        estado = true;
    } else {
        pricesLeft.innerText = "$19.99";
        pricesMiddle.innerText = "$24.99";
        pricesRight.innerText = "$39.99";
        estado = false;
    }

}

