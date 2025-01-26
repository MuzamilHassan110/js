//  A function with some preserved value create a clouser
//  clouser is created when a function is preserve variables outside its scope

// let name = "name"; // This goes into Script scope, NOT window.
// var globalVar = "hello"; // This goes into the Global (window) scope.

// let and const declarations in the top-level script are block-scoped and are not added as properties of window.
//  They are stored in the Script scope. var declarations, however, are hoisted to the window object.
// function show (){
//    let name = "script"
//     function inner(){       
//             console.log(name)
//     }
//     console.dir(inner);
// }

// show();

//  Advantages of clouser in have a varibale is private or encapsulated

function createCounter () {
    let count = 0;
   return {
    increment: function(){
        count++;
       return count;
    },

    decrement: function(){
        count--;
        return count;
    },
    update: function(upd){
        count = upd;
        return count;
    }
   }
}
// No grabage values count
// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.update(5));
// console.log(counter.count);

// name = "xyz";
// export const name;

// if counter = null 
// then every thing out of the memeory because references is not still valid

let obj = { name : "xyz" };
let arr = [ obj];

obj = null;
// console.log(obj);
// console.log(arr); 