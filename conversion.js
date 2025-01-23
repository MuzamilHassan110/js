// Type Conversion

// let num = 8;
// let ans = 4 + num++;
// console.log(ans); 

// arra remove the barcket if it is nested within

const arr = [1, 2, 3, 4, 5, 6 ,[1,3]];
// console.log(`arr: ${arr}`)

//  js not convert auto but it return obj: [object Object]

const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}
const key = Object.keys(obj);
const value = obj.name
// value reame in its type and key inside array and string
// console.log(typeof obj.name)
// console.log(key);

// console.log(`obj: ${obj}`)

//  Type Casting explicity

let str = '10';
let num1 = Number(str); // this is recommended way to convert
let num2 = parseInt(str);
let num3 = parseFloat(str);
// console.log(typeof num1, typeof num2, typeof num3 )

//  for strings

let str1 = '10';
let str2 = String(10); // recommented way to    
let str3 = str1.toString();
 const str4 = new String(str) // avoid this because it return a object
// console.log(typeof str1, typeof str2, typeof str3, typeof str4)

//  false values in js 
//  0, undefined, null, "", NaN, false,
//  In js the NaN is a special value which is not equal to itself and  -0
// console.log(NaN == NaN);
//  to check it  two methods
// console.log(Number.isNaN(NaN));
// console.log(isNaN(90));
// console.log(-0 === -0)

// const dataFromSever = Number(undefined);
// if(dataFromSever === isNaN) {
//     console.log("Stop It");
// }else{
//     console.log("Go On");
// }

