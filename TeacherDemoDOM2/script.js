// Let's look at the HTML page and see what elements we can GRAB using .querySelectorAll()
let coolDivs = document.querySelectorAll("div");
let paraG = document.querySelectorAll("p");
let imgYes = document.querySelectorAll("img");

// Instead of getElementById, you can also use a querySelector to grab an element by it's Id
let changeMe = document.querySelector("#changeMeById");

// We can also grab elements by their class names
let bossChange = document.getElementsByClassName("boss-div");

// Now that we have grabbed these elements, let's make some changes!
// I want an actual image!
imgYes[0].setAttribute("src", "./public/images/playfulSloth.jpg");
// Beautiful! Now let's make it a little smaller, maybe?
imgYes[0].setAttribute("style", "width:25%");
