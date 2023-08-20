let our_array = [];
let count = 0;

function fizzBuzz() {
    count = count + 1;
    if (count % 3 === 0 && count % 5 === 0) {
        our_array.push("fizzBuzz");
    } else if (count % 3 == 0) {
        our_array.push("fizz");
    } else if (count % 5 == 0) {
        our_array.push("buzz");
    } else {
        our_array.push(count);
    }
    console.log(our_array);
}



//another method
// let start=100;
// for(let i=1; i<=start; i++){
//   if (i%3===0 && i%5===0){
//    .log("FizzBuzz");
//   }
//   else if (i%3==0){
//     console.log("Fizz");
//   }
//   else if(i%5==0){
//     console.log("Buzz");
//   }
//   else{
//     console.log(i)
//   }

// }