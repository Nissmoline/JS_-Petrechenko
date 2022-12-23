
/////////////////////////string methods////////////////////////////

const str ='test hello world';

console.log(str[2]);

console.log('Index OF: '+str.indexOf('d'));
console.log('slice 2 arg: '+str.slice(7,13));
console.log('substring: '+str.substring(7,13));
console.log('substr: '+str.substr(7,13));
console.log('slice 1 arg:'+str.slice(7));
// console.log('Slice minus:'+str.slice(-7,-1));

/////////////////////////number methods////////////////////////////

const num = 12.245; 
console.log(Math.round(num));

const strNum = '12.245px'; 
console.log(parseInt(strNum));
console.log(parseFloat(strNum));