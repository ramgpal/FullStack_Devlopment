//Synchronuous code
/* function sync() {
    console.log('first');
}
sync();
console.log('second'); */


//Asynchronuous code
/* setTimeout(function(){
    console.log('third');
},3000);
function sync() {
    console.log('first');
}
sync();
console.log('second'); */

 
//promise
/* let meraPromise = new Promise(function(resolve,reject) {
   setTimeout(function() {
    console.log('I am inside promise');
   },5000);
   resolve(2233);
   //reject(new Error('Bhai sahab error aaya hai'));
}); 
console.log('Pahla'); */

//multiple promises
/* let wada1 = new Promise(function(resolve, reject) {
setTimeout(()=>{
    console.log('setTimeout1  started');
},2000);
resolve(true);
});
wada1.then(() => {
   let wada2 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        console.log('setTimeout2 started');
    },3000);
    resolve('wada2 resolved'); 
});
return wada2;
}).then((value)=> 
console.log(value)); */



//asynchronous function
/* async function abcd() {
    return 7;
}
abcd(); */ 

//eg. async function
/* async function utility() {
    let maharashtraMausam = new Promise((resolve,reject) => {
        setTimeout(()=> {
          resolve('Delhi me bhut garmi hai'); 
        },1000);
    });
    let hyderabadaMausam = new Promise((resolve,reject) => {
       setTimeout(()=> {
         resolve('Hyderabad bhut cool hai'); 
       },5000);
    });
 let mM = maharashtraMausam;  //let mM =await maharashtraMausam;
 let hM = hyderabadaMausam;
 return [mM, hM];
} */


//fetch API - getting resource
/* async function utility() {
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let output = await content.json(); //json() - javascript object notation
    console.log(output);
 }
utility(); */


// to create resource
/* let option = {
    method:'Post',
    body:JSON.stringify({
title: 'Ram',
body:'bar',
userId:'1',
    }),
    headers: {
        'content-type' : 'application/json;  charset=UTF-8',
    },
};
let content = fetch('https://jsonplaceholder.typicode.com/posts',option);  */

//example
/* async function helper() {
    let option = {
        method:'Post',
        body:JSON.stringify({
    title: 'Ram',
    body:'bar',
    weight : 53,
    userId:'1',
        }),
        headers: {
            'content-type' : 'application/json;  charset=UTF-8',
        },
    };
    let content = await fetch('https://jsonplaceholder.typicode.com/posts',option);
    let response = content.json();
    return response;
}
async function utility() {
    let ans = await helper();
    console.log(ans);
}
utility();  */


//Closure
function outerFunction(x) {
    return function innerFunction(y) {
      return x + y;
    };
  }
  
  let closureExample = outerFunction(10);
  console.log(closureExample(5)); // Output: 15
  