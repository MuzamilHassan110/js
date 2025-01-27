// Currying
//  Reusability, Code Clarity, Partial Application

//  Higher Order Functions, Arrow Functions, Currying, clouser, Pure Functions
const  calculateTax  = (textRate = 0) => {
    console.log(textRate)
    return (city, amount) => {
        const tax = amount * textRate;
        return `${textRate * 100}% tax on ${city}: $${tax.toFixed(2)}`;
    }
} 

const lahoreTextRate = calculateTax(0.30);
console.log(lahoreTextRate('Lahore', 100));
