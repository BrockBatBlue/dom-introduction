let body = document.body;
let mianTitle = document.getElementById('main-title')
let subTitle = document.querySelector("h2");// returns the first element
let firstParagraph = document.querySelector('#first-paragraph')
let allDivs = document.querySelectorAll('div') // returns an array of divs 
let crazyChange = document.getElementsByClassName('crazy-change') // array
let slothImage = document.querySelectorAll("img"); //returns an array 
let clickMeButton = document.getElementById("click-me-button")



const changeBackgroundColor = (event) => {
  event.target.style.backgroundColor = 'blue'
}
subTitle.onclick = changeBackgroundColor
clickMeButton.onclick = changeBackgroundColor













// body.style.backgroundColor = 'yellow'

// mianTitle.style.fontSize = '50px'
// subTitle.style.color = 'red'
// subTitle.innerHTML = 'This is a new subtitle'

// allDivs[0].style.backgroundColor = 'yellow'

// crazyChange[0].style.fontSize = '5px'
// crazyChange[0].style.paddingTop = '100px'

// slothImage[0].setAttribute('src', './public/images/playfulSloth.jpg')
// slothImage[0].setAttribute("style", "width:25%")

// let newParagraph = document.createElement('p')
// newParagraph.innerHTML = 'I am the new paragraph added to the page.'
// allDivs[0].appendChild(newParagraph)

// const changeButtonToYellow = () => {
//   clickMeButton.style.backgroundColor = 'yellow'
// }
// clickMeButton.addEventListener('click', changeButtonToYellow)
// clickMeButton.onclick = changeButtonToYellow;


// const changeBackgroundColor = (event) => {
//   event.target.style.backgroundColor = 'blue'
// }
// subTitle.onclick = changeBackgroundColor
// clickMeButton.onclick = changeBackgroundColor