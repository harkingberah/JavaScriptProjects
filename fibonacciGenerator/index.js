function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆
    //Write your code here:
    let content = [];
    if (n === 1) {
        content.unshift(0)
    } else if (n === 2) {
        content.unshift(0, 1)
    } else {
        content.unshift(0, 1)
        for (let i = 2; i < n; i++) {
            // content.push(content[0]+content[1])
            content.push(content[content.length - 2] + content[content.length - 1])
        }
    }
    return content;

    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}
// let my_list=[1,1,1,2,3,5,8,13,21,36]
let result = fibonacciGenerator(1)

document.write(result)