console.log(name);
var name = "Hassan";

show();

function show() {
    console.log(age);
    var age = 28;
}

// So there is no conecpt of moving the code top but its main concept of 
//  code execution in js which first phase checks the syntax and allocate the memory
// and second phase code execution
// In first phase variables and functions are going to be global scpoe tabals

print();

function print() {
    var name = "Ali";
    console.log(name);
}