console.log('Namste India');
let a=2;
console.log(a);
let b=6;
console.log(b);
let firstName=true;
console.log( firstName);
//operators
console.log(a+b);
console.log(b-a);
console.log(b/a);
console.log(a*b);
console.log(a**b); //a ki power b
console.log(a%b);
//pre increment operator
console.log(++a);

//post increment operator
// first use the value
console.log(b++);
//secondaly increment
console.log(b);

//comparison operator
console.log(2>3);

//Ternary operator
let age=25;
let statusOfVoting=age>=18?'i can vote' : 'i can not vote';
console.log(statusOfVoting);

//control statements
if(a>b) {
    console.log('a is greater');
}
else {
console.log('b is greater');
}

console.log('execution of switch case');
  
let num=4;
switch(num) {
    case 1:console.log('A');
    break;
    case 2:console.log('B');
    break;
    case 3: console.log('C');
    break;
    default:console.log('D');
}
console.log('execution of for loop');
//for loop
for(let i=0;i<5;i++) {
  console.log(i);
}

console.log('execution of while loop');
//while loop

let t=1;
while(t<10) {
  console.log( t);
  t++;
}

console.log('execution of do while loop');

//do while

let w=0;
do {
  console.log(w);
  w++;
}
while(w<10);
