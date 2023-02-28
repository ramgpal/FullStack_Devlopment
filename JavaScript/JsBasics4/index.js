//Function
console.log('lets learn about functions in javascript');
//function declaration
function run() {
console.log('running');
}
//function call or invoke
run();

//function assignment
let stand=function walk() {
    console.log('walkig');
}
stand();


//limited parameters
function sum(a,b) {
    return a+b;
}
console.log(sum(2,3));
//unlimited parameters (arguments)
function sum(a,b) {
let total=0;
for(let value of arguments)
total=total+value;
return total;
}
console.log(sum(2,3,4,  6,1,9));

//rest operator
  function Sum(...args) {
    console.log(args);
  }
  Sum(1,2,3,4,5);

  //default parameters
  function interest(p,r=5,t=2) {
    return p*r*t/100;
  }
  console.log(interest(100,10,3));

  //getter, setter functions
  /* let person = {
      firstName:'Love',
      lastName:'Babbar',
      get fullName() {
        return`${person.firstName} ${person.lastName}`
      },
      set fullName(value) {
    if(typeof value!=String) {
    throw new Error ("you have not sent a string");
      }
        let parts=value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
      }
  };
  //console.log(person.fullName);

  //concept of error handeling in JAVA
  try {
    person.fullName=true;
  }
  catch (e) {
 alert(e);
  }
  console.log(person.fullName); */

  //Scope in javascript
  /* {
    let a=5;
  }
    console.log(a); */

    //Reducing an array
    let array=[1,2,3,4,5];
    let ans=0;
    for(let value of array) {
    ans = ans + value;
    }
    console.log(ans);
   

  