const cookieImg = document.getElementById('cookie');

function incrementCounter() {
    count ++ ;
    updateScore();
    console.log('Cookie clicked')
}

cookieImg.addEventListener('click', incrementCounter);
