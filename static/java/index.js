//binds cookieImg in index.html to the script
const cookieImg = document.getElementById('cookie');

//defines function that increases the count every time the cookie is clicked and updates the score on the screen
function incrementCounter() {
    count += parseFloat((cookieUpgradeAmount / 10 + 1).toFixed(1))
    updateScore();
    console.log('Cookie clicked')
}

//adds an eventListener that activates every time the cookie is clicked
cookieImg.addEventListener('click', incrementCounter);
