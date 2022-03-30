// Let's go big to small. What do we see in the DOM if we do document.body?
console.log("This is what we get with the Dcomument Body: ");
console.log(document.body);
// The console will show all the answers...node is not good at this part because there is no document for the terminal.

// Okay, let's meet all the children

console.log("Meet the kids of Document Body: ");
console.log(document.body.children);

// Let's meet the first child!
console.log("hey kid 1 of the ordered list!");
console.log(document.body.children[1].children[0]);

// But is is the the true first child of the Document???
console.log("who is the Document's true first child?");
console.log(document.body.children[0]);

// Let's meet the second child of the ordered list
console.log("hey kid 2 of the ordered list number 2");
console.log(document.body.children[1].children[1]);

// kid number 3 needs more style, so everyone notices them with cadet blue(#5ca4a9)!
// first we have to grab the element in the html by it's id
let unnoticedKid = document.getElementById("unnoticed-kid");
unnoticedKid.style.color = "#5ca4a9";
