//binds cookieImg in index.html to the script
const cookieImg = document.getElementById('cookie');

//defines function that increases the count every time the cookie is clicked and updates the score on the screen
function incrementCounter() {
    count += cookieUpgradeAmount + 1;
    updateScore();
    console.log('Cookie clicked')
}

//adds an eventListener that activates every time the cookie is clicked
cookieImg.addEventListener('click', incrementCounter);
