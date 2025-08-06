# JS

# 📘 JavaScript Learning Notes by Shraddha Khapra

Hi! I’m learning JavaScript through **Shraddha Khapra’s course**, and this repo contains my personal notes with code examples. These notes are written in simple language with explanations as code comments.

> 🔖 This documentation is for my own learning and revision.

---
---

## 📚 Topics Covered

- ✅ Variables and Data Types
- ✅ Operators (Arithmetic, Comparison, Logical)
- ✅ Conditional Statements (if, else, switch)
- ✅ Loops (for, while, do...while)
- ✅ Arrays & Array Methods (map, filter, forEach, etc.)
- ✅ String methods
- ✅ Array vs String
- ✅ Functions
- ✅ Objects
- ✅ DOM Manipulation
- ✅ Events
- ✅ ES6 Features (let, const, arrow functions, etc.)

---


## 🟢 1. Variables and Data Types

// var, let, and const are used to declare variables

var name = "Dnyaneshwari";  // function scoped
let age = 21;               // block scoped, let is safer and prevents bugs caused by variable leakage, best way to declare variable

// var is function-scoped and can lead to bugs
var count = 5;
var count = 10; // No error, but may cause confusion

// ✅ Better:
let age = 21;
// let age = 22;   // Error: Cannot redeclare

//const country = "India";    // cannot be changed

🟢 Data Types: 
    - Primptive : boolean, number, string, undefined, null , symbol, Bigint
    - non-primitive : object, array, function
    - primptive = stack (data of primptive type is store in stack)
    - nonprimtive = heap (data of non primtive type is store in heap)
    - heap = dynamic memory allocation (whatever we change in heap will be reflected in the original data)
    - stack = static memory allocation (whatever we change in stack will not be reflected in the original data)(It displays copy of the data         whatever it is changed)

---

## 🟢 2. Operators
🔹 1. Arithmetic Operators
Used for basic mathematical calculations.

| Operator | Description         | Example |
| -------- | ------------------- | ------  |
|   +      | Addition            | a + b   | 
|   -       | Subtraction        |  a - b  | 
|   *      | Multiplication      |  a * b  | 
|   /      | Division            |  a / b  | 
|   %      | Modulus (Remainder) |  a % b  | 
|   **     | Exponentiation      |  a ** b | 
|   ++     | Increment           |  a++    | 
|   --     | Decrement           |   b--   | 


🔹 2. Assignment Operators
Used to assign values to variables.
| Operator |
| -------- | 
|   =      | 
|   +=     |  
|   -=     | 
|   *=     |   
|   /=     | 
|   %=     |  

🔹 3. Comparison Operators
Used to compare two values.

==    	Equal to (loose check)	
===	    Equal to (strict check)
!=	    Not equal (loose)	
<	      Less than	
>       Greater than
>=	    Greater than or equal to	
<=	    Less than or equal to

🔹 4. Logical Operators
Used to combine multiple conditions.


&&	       Logical AND	true && false	false
||         Logical OR
!	         Logical NOT	!true	false


🔹 5. Type Operators

typeof	           Returns the data type	typeof "Hello"	"string"
instanceof	       Checks instance of class	arr instanceof Array	true

---

## 3. 🟢 Conditional statements
1. if statement
2. if-else statement
3. if...else if...else
4. switch statement

 ---


## 🟢 4. Loops

1. for Loop
  - Used when you know how many times to repeat.
  - here condition check before loop start
  - i++ increases the counter by 1 in each iteration.
  - ex.for(int i = 0; i<=0; i++){}

2.  while Loop
  - Condition check first & then code will execute ; check first, then run
  - Used when number of iterations is not known.
  -  when you dont know how many times you want to repeat something, here condition check before loop start
  -  in while loop the condition is checked first and then the code is executed, if the condition is false then the code will not be executed
  - ex. let i = 1;
        while (i <= 5) {
            console.log("Count:", i);
            i++;
        }

3. do...while Loop
   - do...while = "run first, then check
   - do while loop is used when we want to execute the code at least once even if the condition is false
   - first initilization is declared in the part of variable declaration and then increment is done in the body of the do loop
   - it will check the condition after executing the block of code at least once 
   - ex. let i = 1;
          do {
              console.log("Hello", i);
              i++;
          } while (i <= 3);

 4.  for...of Loop (used for arrays, strings, map, sets)
    - for...of loop Used to get values from arrays, strings, maps, sets, etc.
    - loop in JavaScript is used to iterate over the values (elements) of an iterable object like an array, string, etc.
    - ex. let fruits = [ "Apple", "Mango", "Papaya", "Guava"];
             for (let fruit of fruits) {
                console.log(fruit);
            }

5. for...in loop (used for object)
   -  Loops through keys of an object
   -  for...in loop is used to iterate over the properties of an object
   -  It iterates over the keys of the object
   -  It is not recommended to use for...in loop for arrays as it iterates over the indices of the array   
   -  It is recommended to use for...of loop for arrays
   -  for (let index in fruits) {
        console.log(index);          // 0, 1, 2
        console.log(fruits[index]);  // apple, banana, mango
    }



  6. ⚠️ Loop Control Statements
        - break: exits the loop
        - continue: skips to the next iteration

    ---

## 5. 🟢 Methods of Array

   1. forEach() Method
       - forEach doesn’t work on objects, only on arrays.
       - ex. const coding = ["JS", "Python", "Java", "C++", "Ruby"];
                coding.forEach(function (val){                        
                console.log(val);
              })
         
         - ex. function printme(item){
                  console.log(item);
                  }
                 coding.forEach(printme);
         - You can use for-each with strings to iterate over characters in JavaScript, Python, Java, etc.
         - It is useful when you just want to read each character.
         - forEach doesn’t work on objects, only on arrays.
         - forEach is a built-in function in JavaScript used to run a function on every item in an array, one by one.
         - It is used only with arrays and it does not return anything (just executes the code).
         
         - callback is the function to execute for each element in array, it is passed as argument for each function
         - callback is called for each element in the array, and it receives three arguments: the current element, the index of the current                 element, and the array itself. (val, index, arr)
         
         - Higher order function is a function that takes another function as an argument or returns a function as its result.
         - forEach is a higher order function Because it works with other functions — just like variables
        

      2. Map() Method
         - Map() methos creates new array with result of some operations
         - map is a method used with arrays to create a new array by applying a function to each element of the original array.
         - ForEach Used to perform an action on each element, but doesn't return anything, returns undefined.
         - Map Creates a new array with modified data, return the new array.
         - map is same as forEach but it returns a new array with the results of calling a provided function on every element in the calling               array.
         - ex.  
                let array = [1, 2, 3, 4, 5];
                array.map((element) => {
                    console.log(element );  //here we are just logging the element
                })

      3. push() method
          - Adds elements to the end of the array.
          - ex. let fruits = ["apple", "banana"];
                    fruits.push("mango");
                    console.log(fruits); // ["apple", "banana", "mango"]
      4 unshift() method
          - Adds element to the beginning  of the array


      5.  pop() method
          - Removes the last element
          - fruits.pop();
              console.log(fruits); // ["apple", "banana"]

      6. shift() method
         - Remove first element from the array

      7. filter() method
         - using filter() method we can use only condition which are true
         - ex.  
                  let arr = [ 1,2,3,4,5,6,7,8,9,10];
                  let newarr = arr.filter((val) => {
                      return val % 2 === 0 ;
                  })
                  console.log(newarr)   // here only true values will display

      8. reduce() Method
         - it performs some operations and reduce the array to single value, it returns that single value
         - reduce() method have two parameters which first parameter is store first element in the array and second parameter stores second
             element in the array
         - Reduces array to a single value.
         - ex. let sum = nums.reduce((acc, val) => { return acc + val });

      9. find()
        - Returns the first element that satisfies the condition.
        - It does not return a new array, only a single value (or undefined if not found).
        - It gives only a single value where the the condition first aplied
        - ex. Find the first number greater than 1
              let nums = [0, 1, 2, 3, 4];
                  let found = nums.find(function(n) {
                    return n > 1;    // returns true when n is greater than 1
                    });

      10. includes()
            - Checks if the array contains a value.
            - ex. nums.includes(2); // true
         
      11.  indexOf()
          - Returns the first index of a value.
          - ex. nums.indexOf(2)

      12. Slice()
          - used to get a portion of array
          - original array is not modifed by the slice method.
          - ex.
          - let arr = ["Sunil", "Dnyana", "Sagar", "Siddhi", "Shivani", "pruthvi"];
              let slicedArray = arr.slice(0, 2);  //it will give array from 0 to 1 index
              console.log(slicedArray);           //the output will be ["Sunil", "Dnyana"]
              let slicearr = arr.slice(2);       //it will give array from 2 index to end
              console.log(slicearr);
              console.log(arr); // This is the original array, it will not be modified by slice method

       
      13. Splice()
          - this method is used for remove the elements from the array
          - original array is modified by splice method
          - ex 1)  let splicedArray = arr.splice(1, 3); // it will remove 2 elements starting from index 1
                      console.log(arr); // This is the modified original array after splicings
                      console.log(splicedArray); // This is the removed elements from the original array
          - ex 2)
             we can add element in the with splice method
             let spliceArray = arr.splice(1, 2, 56, 78 );// it will remove 2 elements starting from index 1 and add 56 and 78

          - ex 3) we can replace the elements in the array as well through the splice () method
          -  here we replacing the element means we are removing that one element add there another element which we have to add
                  ex.  let arr1 = ["yes","no","why","who"]
                       arr1.splice(1, 1, "NewElement"); // it will remove 1 element starting from index 1 and add "NewElement"

          - ex 4)
          - // Remove all elements from a specific index to the end of the array
              // This will modify the original array and remove elements from index 2 to the end
            
              let arr2 = arr1.splice(2);   // This will remove all elements from index 2 to end
              console.log(arr2);          //this is the removed elements from the original array
              console.log(arr1);         // This is the modified original array after removing elements

      14. concat() method
          - concat is used to join the string
          - let merged = arr1.concat(arr2);

      15.  join () method
         - Converts array to single string.
         - join() is used to combine all elements of an array into one string.
         - You can choose what to put between the items (called a separator).
         - It doesn’t change the original array — just gives you a new string.
         - ex. let fruits = ["Apple", "Banana", "Mango"];
         -  Join with default separator (comma)
          let result1 = fruits.join();
          console.log(result1);  // Output: "Apple,Banana,Mango"
       
            
      16. reverse() Method
          - Reverses the array in-place.
          - ex. nums.reverse();
     17.sort()
     -  Sorts elements (by default, as strings).
     -  nums.sort(); // Be careful, may not work as expected for numbers
     18.. every()
        - Returns true if every element passes the test.
        - nums.every(n => n < 10); // true/false
    19. some()
      - Returns true if at least one element passes the test.
      - nums.some(n => n % 2 === 0); // true/false
    20. . flat()
      - Flattens nested arrays.
      - It removes extra layers of arrays inside arrays and creates one single-level array.
      - It doesn’t change the original array (it returns a new one).
      - ex.  let numbers = [1, 2, [3, 4]];
              let flatArray = numbers.flat();
              console.log(flatArray);  // Output: [1, 2, 3, 4]

        ---

        ## 6. 🟢 Methods of string
          1. length()            = 	Returns the number of characters in a string	    "hello".length → 5
          2. toUpperCase()	     =  Converts all letters to uppercase	                 "hello".toUpperCase() → "HELLO"
            toLowerCase()	       =  Converts all letters to lowercase	                 "HELLO".toLowerCase() → "hello"
            trim()	             = Removes spaces from start and end	                 " hello ".trim() → "hello"
            includes()	         = Checks if a string contains a word/letter	         "hello".includes("he") → true
            startsWith()	       = Checks if string starts with given characters	     "hello".startsWith("he") → true
            endsWith()	         = Checks if string ends with given characters	       "hello".endsWith("lo") → true
            indexOf()	           = Finds the first index of a character/word	         "hello".indexOf("l") → 2
            lastIndexOf()	       = Finds the last index of a character/word	           "hello".lastIndexOf("l") → 3
            charAt()	           = Returns the character at a specific index	         "hello".charAt(1) → "e"
            replace()	           = Replaces part of the string	                       "hello".replace("h", "y") → "yello"
            slice()	             = Extracts a part of the string	                     "hello".slice(1, 4) → "ell"
            substring()	         = Similar to slice()	                                  "hello".substring(1, 3) → "el"
            split()	             = Splits string into array by separator              	"a,b,c".split(",") → ["a","b","c"]
            concat()	           = Joins two strings together	                           "Hi".concat(" there") → "Hi there"
            repeat()	           = Repeats a string multiple times	                      "ha".repeat(3) → "hahaha"


         - ex.  let msg = " JavaScript is awesome! ";
        
        console.log(msg.trim());               // "JavaScript is awesome!"
        console.log(msg.toUpperCase());        // " JAVASCRIPT IS AWESOME! "
        console.log(msg.includes("script"));   // false (case-sensitive!)
        console.log(msg.slice(1, 11));         // "JavaScript"
        console.log(msg.split(" "));           // ["", "JavaScript", "is", "awesome!"]

---

## 7. 🟢 Array vs String 
 # Array :
   array is a collection of elements/items
   it can be of any type, like numbers, strings, objects, etc.
   arrays are mutable, meaning we can change their elements
   array is itself an object in JavaScript

 Array is the collection of data-types..we can add different datatype in an Array
// wheras string is sequence of characters to represent text

 Array is mutable where we can aaply any methods in it without creating new array
// string is immutable, we need to create a new string for doing any changes in itslef


## 8. 🟢 Functions
Functions are blocks of code that perform a specific task.
we can write function at once and call it whenever needed

        









