/*FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).*/


for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else  {
        console.log("FuzzBuzz");
    }
    }


    function chess(n) {
        let row = 0;
        let col = [];
    for (let i = 0; i < n.length; i++) {
        for (let j = 1; j < row; j++) { 
          col.push["#"]; 
    }
    }
}
console.log(chess(8));


for (let i = 1; i <= 4; i++) {
    
    let i = "# # # #";
    
console.log(i);
}



function check(a,b) {
    if (a>b) {
        console.log(`${a} is greater than ${b}`);
    } else {
        console.log(`${a} is less than ${b}`);   
    }
}
check(2,3);