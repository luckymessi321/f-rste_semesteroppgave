let count = 0;
const score = document.getElementById('score');
const cookieImg = document.getElementById('cookie');

function updateScore() {
    if (score) score.textContent = `Score ${count}`;
}

function incrementCounter() {
    count ++ ;
    updateScore();
    console.log('Cookie clicked')
}

cookieImg.addEventListener('click', incrementCounter);



updateScore();