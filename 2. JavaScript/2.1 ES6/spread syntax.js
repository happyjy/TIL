/**
 * Example1 Copy an Array
 */


var arr = ['a', 'b', 'c'];
var arr2 = arr;

arr2.push('d');

console.log(arr);
// ["a", "b", "c", "d"]

//---
var arr = ['a', 'b', 'c'];
var arr2 = [...arr];

console.log(arr);
//result : ['a', 'b', 'c']

//---
var arr = ['a', 'b', 'c'];
var arr2 = [...arr];

arr2.push('d');

console.log(arr);
//result : ['a', 'b', 'c', 'd']
// ***important!
// Again, the reason this works is because the value of arr is expanded to fill the brackets of our arr2 array definition. 
//Thus, we are setting arr2 to equal the individual values of arr instead of the reference to arr like we did in the first example.




/**
 * Example2 inserting Arrays
 */

var mid = [3, 4];
var arr = [1, 2, mid, 5, 6];

console.log(arr);

//result : [1, 2, [3, 4], 5, 6]

var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];

console.log(arr);
//result : [1, 2, 3, 4, 5, 6]


/**
 * Example3 Math
 */
// ...?
