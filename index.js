// Write your solution here!
//first cats array
let cats = ["Milo","Otis","Garfield"]

//Destructively appending the array
function destructivelyAppendCat(name) {
    cats.push(name);
}

//prepend the array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

//remove the last cat
function destructivelyRemoveLastCat() {
    cats.pop();
}
//destructively remove first cat
function destructivelyRemoveFirstCat() {
    cats.shift();
}

//non-destructively append a cat
function appendCat(name) {
    return [...cats,name];
}

//non-destructively prepend cat
function prependCat(name) {
    return [name, ...cats];
}

//Non-destructively remove the last cat
function removeLastCat() {
    return cats.slice(0, -1);
}

//Non-destructively remove the first cat
function removeFirstCat() {
    return cats.slice(1);
}