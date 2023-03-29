
//let name = "Juan";

import { addTwoNumbers, subtractTwoNumbers, timesTwoNumbers, divideTwoNumbers } from '../helpers/math-helpers';


let num1 = 10;
let num2= 20;
//greet(name);
let total1 =  addTwoNumbers( num1,num2 );
let total2 =  subtractTwoNumbers( num1,num2 );
let total3 =  timesTwoNumbers( num1, num2 );
let total4 =  divideTwoNumbers( num1, num2 );

console.log( "add ", total1);
console.log( "subtract ", total2);
console.log( "Times ", total3);
console.log( "Divide ", total4);
