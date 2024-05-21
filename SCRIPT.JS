/*let var1="i am let variable";
const var2="i am const variable";
console.log(var1);
console.log(var2);
var1="i can be reassigned";
console.log(var1);
var2="i can't be reassigned"*/



//traditionel function//
/*function somme (a,b) {

    return a+b
}


//arrow function//
const somme = (a,b)=>{a+b}*/






/*const firstname = "John";
const age = 30;
const greeting = "Hello, " + firstname + "! You are " + age + " years old.";
console.log (greeting);*/
//js traditionel//

/*const firstname = "John";
const age = 30;
const greeting = `Hello, ${firstname}! You are ${age} years old.`;             //Template literals//
console.log (greeting);*/


/*let age =20
let result;
if (age>=18){result="adult"}
else {result="teenager"};
console.log(result);*/

/*let age =10
const result = age >= 18 ? "adult" : "teen"; //ternery operator//
console.log(result);*/

//............................................array function....................................//

//............for each............//
//es6//
/*let names=["slim","ilyess","asma","wahiba"];
names.forEach(Name=>{
    console.log(names)
} );*/

//traditionel//
/*var names = ["Apple", "Banana", "Cherry"];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}*/
//........reduce...........//
/*const numbers=[2,5,9,7,3,1];
const somme=numbers.reduce((accum,current)=>  accum+current,0);

console.log(somme);*/

//...........find(return first value)......//
 
/*const numbers=[3,5,9,7,6,1,8];
const npair= numbers.find(number=> number%2===0);
console.log(npair);

//...........findIndex.........//
const numbers=[3,5,9,7,6,1,8];
const npair= numbers.findIndex(number=> number%2===0);
console.log(npair);*/

//.......map.........//

/*const numbers=[3,5,9,7,6,1,8];
const number2=numbers.map(number=>number*2);
console.log(number2);*/

//............filter.....................//

/*const numbers=[3,5,9,7,6,1,8];
const npair= numbers.filter(number=> number%2===0);
console.log(npair);*/

//.....every.....//

/*const numbers=[3,5,9,7,6,1,8];
const npair= numbers.every(number=> number%2===0);
console.log(npair);
//......destructring .(array and object)......//
/*const fruits = ["Apple", "Banana", "Cherry"];

const [premier,deuxiemme,troisiemme]=fruits;
console.log(premier);

const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;
console.log(name);
console.log(age);*/
//.............spreding(...).............//
/*const tab1=[1,5,8,6];
const tab2=[2,5,7,6,4];
const tab3=[...tab1,...tab2];
console.log(tab3);*/
/*const tab2=[2,5,7,6,4];
const copyTab=[...tab2];
console.log(copyTab);*/


/*const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", country: "USA" };
const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);
//......................................chaine de caractere......................//
//......includes..............//
/*const str=("hello world");
console.log(str.includes("hello"));*/
//.................repeat.................//


/*const str="hello world ";
console.log(str.repeat(3));*/

//.................padstart...............//


/*const numbers = [12, 345, 6789, 101112];

const maxLength = Math.max(...numbers).toString().length;

function padNumber(number, length) {
    return number.toString().padStart(length, 0 );
}

console.log("Numbers:");
numbers.forEach(number => {
    console.log(padNumber(number, maxLength));
});*/
//....................padend.....................//

const str="bonjour";
 const str1=str.padEnd(10,"-");
 console.log(str1);
