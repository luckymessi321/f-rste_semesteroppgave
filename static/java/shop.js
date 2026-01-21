const grandpa = document.getElementById('grandpas'); //binds the paragraph element with the id "grandpas" in shop.html to this script
const grandpaPrice = document.getElementById('grandpaPrice'); //binds the paragraph element with the id "grandpaPrice" in shop.html to this script
const grandpaButton = document.getElementById('grandpaButton'); //binds the paragraph element with the id "grandpaButton" in shop.html to this script
let grandpaBuyPrice = grandpaAmount*5 + 5; //declares the value of grandpaBuyPrice

// defines a function that refreshes the shop site once and updates the url parameters
function updateShopSite() {
    let timesExecuted = 0
    while (true) {
        window.location.href = '/shop?count=' + count + '&grandpas=' + grandpaAmount;
        console.log('site updated');
        timesExecuted ++;
        if (timesExecuted >= timesExecuted) {
            break
        }
    }
}

//defines a function that updates the amount of grandpas you have and the price of future grandpas in shop.html
function updateGrandpaPrice () {
    if (grandpaPrice) grandpaPrice.textContent = `Price: ${grandpaBuyPrice} cookies`;
}
function updateGrandpas() {
    if (grandpa) grandpa.textContent = `You have ${grandpaAmount} grandpas`;
}

function grandpa_button() { //defines a function which makes the paragraph element with the id "grandpaButton" do the following when clicked:
    if (count >= grandpaBuyPrice) { //makes sure that grandpas cannot be bought without having the cookies for it
        count -= grandpaBuyPrice; // subtracts your current amount of cookies by the price of a grandpa
        grandpaAmount ++; // increases the amount of owned grandpas by 1
        updateGrandpaPrice(); 
        updateGrandpas();
        updateShopSite();       
    }
}

grandpaButton.addEventListener('click', grandpa_button); //adds an eventListener that activates every time the Buy button is clicked

updateGrandpaPrice();
updateGrandpas();
