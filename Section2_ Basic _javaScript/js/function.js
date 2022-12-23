
let num = 25;

function schowFirstMessage (text) {
    console.log (text); 
    num = 10; 
}
 schowFirstMessage ('function is work'); 
console.log(num);

//////////////////////////////////////////////////////////////////////////////////////////

function calc (a, b) {
    return (a+b); 
}

console.log(calc(4, 3));
console.log(calc(7, 3));
console.log(calc(1, 3));

//////////////////////////////////////////////////////////////////////////////////////////

function getLocalVar (){

    let num = 50;
    return num;
}

let anotherNum = getLocalVar (); 
console.log(anotherNum);

//////////////////////////////////////////////////////////////////////////////////////////

const logger = function (){
    console.log('hallo');
};

logger (); 

////////////////////////////////////////////Стрелочная Функция //////////////////////////

const calculator = (a,b) => {   //a+b;
    console.log('Calculator Function');
    return (a+b); 
};

console.log(calculator(3,3));

//////////////////////////////////////////////////////////////////////////////////////////

// don't reapeat yourself ! DRY
const usdCurr = 28;
const eurCurr = 30; 

function convert (curr, amount) {
    return (curr * amount);
}
console.log(convert (600 , eurCurr));

/////////////////////////////////////homework/////////////////////////////////////////////

function sayHello(name) {
    return console.log('hallo ' +name);
}

sayHello('Alex'); 
let numberOfArray;

//////////////////////////////////////////task 2//////////////////////////////////////////

function returnNeighboringNumbers(int) {
   return [ int -1, int, int+1];
}
console.log(returnNeighboringNumbers (10));
//////////////////////////////////////////task 2//////////////////////////////////////////
const newArray = (x, y) => new Array(y-x+1).fill(x).map((c, i) => c+i);

console.log(newArray(3,15));

//////////////////////////////////////////task 3//////////////////////////////////////////

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 

// (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// function getMathResult(num1, num2) {
//     if (typeof(num2) !== 'number' || num2 <= 0) {
//         return num1;
//     }
    

//     for (let i =1; i<= num2; i++){
//         console.log(num1+ '---',i);
//         return num1 * num2;
//     }

//     return num1, num2 ;
// }
// console.log(getMathResult(5,3));