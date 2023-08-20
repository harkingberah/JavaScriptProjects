function whosPaying(names) {

    /******Don't change the code above*******/

    //Write your code here.
    let person = Math.round(Math.random() * names.length);
    let name = names[person]
    return name + " is going to buy lunch today!"
}
/******Don't change the code below*******/

let names = ["samson", "Peter", "James"];
let check = whosPaying(names);
document.write(check)