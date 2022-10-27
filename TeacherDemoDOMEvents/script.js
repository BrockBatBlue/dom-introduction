const main = document.getElementById('main');

main.addEventListener('click', changeColorToPurple);


function changeColorToPurple(event) {
    const elem = event.target;
    console.log(event.timeStamp);
    elem.style.color = 'purple';
    elem.removeEventListener('click', changeColorToPurple);
    elem.addEventListener('click', changeColorToGreen);
}

function changeColorToGreen(event) {
    const elem = event.target;
    console.log(elem);
    elem.style.color = 'green';
    elem.removeEventListener('click', changeColorToGreen);
    elem.addEventListener('click', changeColorToPurple);
}


