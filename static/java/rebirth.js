//binds elements in rebirth.html to this script with the IDs listed in the parentheses
const rebirthDisplayPrice = document.getElementById('rebirthDisplayPrice');
const rebirthDisplayAmount = document.getElementById('rebirthDisplayAmount');
const rebirthDisplayButton = document.getElementById('rebirthDisplayButton');
let rebirthPrice = 10000 * 2 ** rebirthAmount;

function updateRebirthDisplayPrice() {
    if (rebirthDisplayPrice) rebirthDisplayPrice.textContent = `Performing a Rebirth costs ${rebirthPrice} cookies`;
}

function updateRebirthDisplayAmount() {
    if (rebirthDisplayAmount) rebirthDisplayAmount.textContent = `You have Rebirthed ${rebirthAmount} times!`;
}

function updateRebirthSite() {
    let timesExecuted = 0
    while (true) {
        window.location.href = '/rebirth?count=' + count + '&grandpas=' + grandpaAmount + '&cookieUpgrades=' + cookieUpgradeAmount + '&rebirthAmount=' + rebirthAmount;
        console.log('site updated');
        timesExecuted ++;
        if (timesExecuted >= timesExecuted) {
            break
        }
    }
}


function rebirthButton() {
    if (count >= rebirthPrice) {
        count = 0;
        grandpaAmount = 0;
        cookieUpgradeAmount = 0;
        rebirthAmount ++;
        updateRebirthSite()
    }
}

rebirthDisplayButton.addEventListener('click', rebirthButton);

updateRebirthDisplayPrice();
updateRebirthDisplayAmount();
