const urlParams = new URLSearchParams(window.location.search);
const score = document.getElementById('score');
const shop = document.getElementById('shop');
const clicker = document.getElementById('clicker')
let grandpa_amount;
let count; // Declare count here to make it accessible outside the if/else

if (urlParams.get('grandpas') === 'null') {
    grandpa_amount = 0; // Default if no 'count' param
} else {
    // Use the value from the URL, convert to number if needed
    grandpa_amount = urlParams.get('grandpas');
}

if (urlParams.get('count') === 'null') {
    count = 0; // Default if no 'count' param
} else {
    // Use the value from the URL, convert to number if needed
    count = urlParams.get('count');
}

function updateScore() {
    if (score) score.textContent = `Score ${count}`;
}

function clicker_button() {
    window.location.href = '/?count=' + count + '&grandpas =' + grandpa_amount;
};

function shop_button() { 
    window.location.href = '/shop?count=' + count + '&grandpas =' + grandpa_amount;
}

shop.addEventListener('click', shop_button);
clicker.addEventListener('click', clicker_button);
updateScore();