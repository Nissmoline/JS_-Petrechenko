let num = 50;

// while (num<55) {
    
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num ++;
}
while (num <55);

//////////////////////////////////////////////// for /////////////////////////////////////////

for (i=1; i<10; i++){
    if( i=== 6) {
        // break;
        continue; //пропускает значение 6 
    }
    console.log(i);
}

//////////////////////////////////////////////fore each//////////////////////////////////////
// for ( let i =0; i< 3; i++) {
//     console.log(i);
//     for (let j=0; j< 3; j++){
//         console.log("j"+j); 
//     }
// }

// writhe piramide with for loop 
// output 
// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length =7;

// for (i=1; i< length; i++) {
//     for (let j =0; j<i; j++) {
//         result += "*"; 
//     }

//     result += "\n";
// }

// console.log(result);

//////////////////////////////////////////////fore each//////////////////////////////////////
// прервать loop по метке firstLoop или с помошью break

// firstLoop: for ( let i =0; i< 3; i++) {
//     console.log('First level i:' +i); 
//    secondLoop: for (let j=0; j< 3; j++){
//         console.log('Second level j:' +j);
//        thirdLoop: for (let k=0; k< 5; k++){
//             if(k===2) continue firstLoop; // break firstLoop;
//             console.log('Third level k:' + k); 
//         } 
//     }
// }

function secondTask () {
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i =0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof (data [i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
   
}
console.log(data);  
return data;
}

secondTask (); 