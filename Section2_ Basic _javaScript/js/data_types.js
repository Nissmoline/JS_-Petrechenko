const personalDataAlex = {
    
    streghtMale: true,
    streghtFamale: false,
    name: "Alex",
    age: 25,

};

console.log("He is the man ? "+ personalDataAlex.streghtMale); 
console.log("What is his name? " + personalDataAlex.name); 

let arr = ["apple", "name", {personalDataAlex}, 126, ["Blue","Yellow","Red"]]; 
console.log (arr);


const arrayObj ={ 
    a: 1,
    "b": "b",
    2: "c"
};

arrayObj.e = "1234"; 
// arrayObj["e"]= "1234"; 

console.log(arrayObj[2]);
console.log(arrayObj.e);  // console.log(arrayObj['e']); 