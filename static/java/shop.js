//binds elements in shop.html to this script with the IDs listed in the parentheses
const grandpa = document.getElementById('grandpas'); 
const grandpaPrice = document.getElementById('grandpaPrice'); 
const grandpaButton = document.getElementById('grandpaButton');
const cookieUpgradePrice = document.getElementById('cookieUpgradePrice');
const cookieUpgrades = document.getElementById('cookieUpgrades');
const cookieButton = document.getElementById('cookieUpgradeButton');

// declares the values of the cookie upgrade price and grandpa price which are gonna get changed later.
let cookieUpgradeBuyPrice = cookieUpgradeAmount + 1;
let grandpaBuyPrice = grandpaAmount*5 + 5;

// defines a function that refreshes the shop site once and updates the url parameters
function updateShopSite() {
    let timesExecuted = 0
    while (true) {
        window.location.href = '/shop?count=' + count + '&grandpas=' + grandpaAmount + '&cookieUpgrades=' + cookieUpgradeAmount;
        console.log('site updated');
        timesExecuted ++;
        if (timesExecuted >= timesExecuted) {
            break
        }
    }
}

//defines functions that update the amount of grandpas you have and the price of future grandpas in shop.html
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

//defines functions that update the amount of 
function updateCookieUpgradePrice () {
    if (cookieUpgradePrice) cookieUpgradePrice.textContent = `Price: ${cookieUpgradeBuyPrice} cookies`;
}

function updateCookieUpgrades () {
    if (cookieUpgrades) cookieUpgrades.textContent = `You have ${cookieUpgradeAmount} cookie upgrades`
}

function cookie_button() {
    if (count >= cookieUpgradeBuyPrice) {
        count -= cookieUpgradeBuyPrice;
        cookieUpgradeAmount ++;
        updateCookieUpgradePrice();
        updateCookieUpgrades();
        updateShopSite();
    }
}

grandpaButton.addEventListener('click', grandpa_button); //adds an eventListener that activates every time the Buy button is clicked
cookieButton.addEventListener('click', cookie_button)

updateGrandpaPrice();
updateGrandpas();
updateCookieUpgradePrice();
updateCookieUpgrades();
