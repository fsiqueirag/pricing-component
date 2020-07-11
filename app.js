let slider = document.getElementById('checkbox');
let pricesLeft = document.getElementById("price-left");
let pricesMiddle = document.getElementById("price-middle");
let pricesRight = document.getElementById("price-right");
let checkboxes = document.getElementById('checkbox');
let estado = false;
checkboxes.checked = false;
slider.addEventListener('click', changePrices);

function changePrices() {
    if (estado === true) {
        pricesLeft.innerText = "$199.99";
        pricesMiddle.innerText = "$249.99";
        pricesRight.innerText = "$399.99";
    } else {
        pricesLeft.innerText = "$19.99";
        pricesMiddle.innerText = "$24.99";
        pricesRight.innerText = "$39.99";
    }
    estado = !estado;
}

