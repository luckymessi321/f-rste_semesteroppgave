const grandpas = document.getElementById('grandpas');
let grandpa_price = 5;
const grandpa_display_price = document.getElementById('grandpa price');

function updateGrandpaPrice () {
    if (grandpa_display_price) grandpa_display_price.textContent = `Price: ${grandpa_price}`;
}

function updateGrandpas() {
    if (grandpas) grandpas.textContent = `Total Grandpas ${grandpa_amount}`;
}
