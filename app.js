// const heading = document.getElementById('head')
// console.log(heading.innerHTML);

// const heading = document.querySelector('#head')
// heading.innerHTML = "Salman";




const names = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const greetHead = document.querySelector('#greet')
const login = document.querySelector('#login')
const submit = document.querySelector('#submit')
const clear = document.querySelector('#clear')

const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const operator = document.querySelector('#operator')
const h3 = document.querySelector('h3')
const go = document.querySelector('#go')






// function loginUser() {
//     console.log(names.value);
//     console.log(email.value);
//     console.log(password.value);

// }



// function greetUser() {
//     if (names.innerHTML = "") {
//         greetHead.innerHTML = "Bhai Name Daalo";

//     } else {
//         greetHead.innerHTML = "Hello " + names.value;

//     }
// }


// function clearForm() {
//     greetHead.innerHTML = "";
// }



function calculation(num1, operator, num2) {

    let result;

    switch (operator) {
        case ('+'):
            result = num1 + num2;
            break;

        case ('-'):
            result = num1 - num2;
            break;

        case ('*'):
            result = num1 * num2;
            break;

        case ('/'):
            result = num1 / num2;
            break;

        default:
            result = "Invalid Operator";
    }
    return result;
}

let calculatedResult = calculation(num1, operator, num2);

function calculated() {
    h3.innerHTML = calculatedResult;
}






