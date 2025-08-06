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
- ✅ Functions
- ✅ Arrays & Array Methods (map, filter, forEach, etc.)
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



const country = "India";    // cannot be changed

// Data Types: 
Primptive : boolean, number, string, undefined, null , symbol, Bigint
non-primitive : object, array, function

// primptive = stack (data of primptive type is store in stack)
//nonprimtive = heap (data of non primtive type is store in heap)
// heap = dynamic memory allocation (whatever we change in heap will be reflected in the original data)
// stack = static memory allocation (whatever we change in stack will not be reflected in the original data)(It displays copy of the data whatever it is changed)

---

## 🟢 2. Operators
