'use strict';


// Create an index.html page and add an external link to this .js file.
document.write("Successfully Linked Exercises Day 1");

// Open up index.html in the browser. If you see "Successfully Linked Exercises Day 1" on your page, you may continue.



//1. Define a new variable `quote` for the value "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things."

var quote = "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things."

//Log out the quote
console.log(quote);

//Log out the type of the variable. Is it a string? A number? Something else?
console.log(typeof quote);


//2. Define a variable `quoteLength` that stores the length of the quote.
 var quoteLength = quote.length;

//Log out the length
console.log(quoteLength);


//3. Create a new variable `attributedQuote`. Add the string "- Rear Admiral Grace Hopper" to the end of the `quote` variable with an appropriate space in between.
//This new value should not _replace_ the `quote` variable's value
var attributedQuote = ' - Rear Admiral Grace Hopper';
//Log out the new quote
 console.log(quote + attributedQuote);

//4. Create a function `attribute` that takes a quote and author and returns the attributed quote.
//Example: Takes "The key to being a successful programmer is to learn how to learn." and "- Shannon Burns" and returns "The key to being a successful programmer is to learn how to learn. - Shannon Burns"

function attribute(quote, author) {
    return quote+author;
}
quote = "The key to being a successful programmer is to learn how to learn.";
var author = " - Shannon Burns"
console.log(attribute(quote, author));

//5. Create a function `sumOfNumbers` that takes 2 numbers and returns the sum of those numbers.

function sumOfNumbers(num1, num2) {
    return num1+num2;
}
console.log(sumOfNumbers(4, 5));
console.log(sumOfNumbers(3, 7));
console.log(sumOfNumbers(2, 3));
//6. Create a function `sumOfLowNumbers` that takes 5 numbers and returns the sum of all numbers that are less than or equal to 6.

function sumOfLowNumbers(){

var no1 = 1;
var no2 = 4;
var no3 = 5;
var no4 = 9;
var no5 = 3;
var sum = 0;

    if (no1 <= 6){
        sum = sum+no1;        
    }
     if (no2 <= 6){
        sum = sum+no2;
        
        if (no3 <= 6) {
            sum = sum+no3;            
        }
        if(no4 <= 6){
            sum = sum+no4;            
            if(no5 <= 6) {
                sum = sum+no5;                
            }
        }
        else {
            sum = sum+no5;
        }
    }

console.log("result is = " +sum);

}

sumOfLowNumbers();

//7. Go to https://pages.github.com/ and read through the tutorial to create a Github page.
// Choose Project site, Start from scratch. When you're finished, link your new project page here.



//8. Commit and push this file to your repository. Submit the URL for Assignment 1 on Brightspace.