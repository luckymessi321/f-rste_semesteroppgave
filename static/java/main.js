 /* window.location.search returns the data of the current url. 
 this data then gets passed as an argument to a new function URLSearchParams to create a new object. 
 this object can be iterated, allowing for uses in loops and uses of methods such as urlParams.get()
 */
const urlParams = new URLSearchParams(window.location.search);

// binds elements in all html documents to this script with the IDs listed in the parentheses
const score = document.getElementById('score');
const shop = document.getElementById('shop');
const clicker = document.getElementById('clicker');
const rebirth = document.getElementById('rebirth');

// declares variables that are gonna be changed later
let grandpaAmount;
let count;
let cookieUpgradeAmount;
let rebirthAmount;

//defines a function that immediately updates the site with url-parameters when the website is opened
function updateSite() {
    if (window.location.href.includes('?count=')) {

    } else {
        window.location.href = '/?count=' + count + '&grandpas=' + grandpaAmount + '&cookieUpgrades=' + cookieUpgradeAmount + '&rebirthAmount=' + rebirthAmount;
        console.log('site updated');
    }
}

// updates the values of grandpa_amount, count, cookieUpgrades and rebirthAmount if they are not defined(NaN), so that they can be interpreted and used in the script
if (urlParams.get('grandpas') === null) {
    grandpaAmount = 0; // Default if no 'grandpas' parameter
} else {
    // Uses the value from the URL, converted to an integer
    grandpaAmount = parseInt(urlParams.get('grandpas'));
}
if (urlParams.get('count') === null) {
    count = 0; // Default if no 'count' parameter
} else {
    // Uses the value from the URL, converted to an integer
    count = parseInt(urlParams.get('count'));
}
if (urlParams.get('cookieUpgrades') === null) {
    cookieUpgradeAmount = 0; // Default if no 'cookieUpgrades' parameter
} else {
    // Uses the value from the URL, converted to an integer
    cookieUpgradeAmount = parseInt(urlParams.get('cookieUpgrades'));
}
if (urlParams.get('rebirthAmount') === null) {
    rebirthAmount = 0; // Default if no 'rebirthAmount' parameter
} else {
    // Uses the value from the URL, converted to an integer
    rebirthAmount = parseInt(urlParams.get('rebirthAmount'));
}

let grandpaMilestones = Math.floor(grandpaAmount / 25);
let grandpaMultiplier = 2 ** grandpaMilestones;
let cookieMilestones = Math.floor(cookieUpgradeAmount / 10);
let cookieUpgradeMultiplier = 2 ** cookieMilestones;    
let cookieMultiplier = 1.5 ** rebirthAmount;


//defines a function that updates and increases the amount of cookies you have every second based on items purchased in the shop
function passiveIncome() {
    count += grandpaAmount * grandpaMultiplier * cookieMultiplier;
    updateScore();
}

updateSite()

//makes sure that passiveIncome only runs once every second.
setInterval(passiveIncome, 1000);

//defines a function that updates the amount of cookies you have displayed on the screen.
function updateScore() {
    if (score) score.textContent = `${count} cookies`;
}

//defines functions that update the current url when the buttons on the navigation bar at the top of the page are clicked. these urls also store all the data from the previous page so that they arent lost between urls
function clicker_button() {
    window.location.href = '/?count=' + count + '&grandpas=' + grandpaAmount + '&cookieUpgrades=' + cookieUpgradeAmount + '&rebirthAmount=' + rebirthAmount;
}
function shop_button() { 
    window.location.href = '/shop?count=' + count + '&grandpas=' + grandpaAmount + '&cookieUpgrades=' + cookieUpgradeAmount + '&rebirthAmount=' + rebirthAmount;
}
function rebirth_button() {
    window.location.href = '/rebirth?count=' + count + '&grandpas=' + grandpaAmount + '&cookieUpgrades=' + cookieUpgradeAmount + '&rebirthAmount=' + rebirthAmount;
}

//adds eventListeners that activate every time the shop or clicker buttons at the top of the page are clicked.
shop.addEventListener('click', shop_button);
clicker.addEventListener('click', clicker_button);
rebirth.addEventListener('click', rebirth_button);
updateScore();