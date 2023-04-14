//perfomance time
/* const t1=performance.now();
for(let i=1;i<=100;i++) {
    let newElement = document.createElement('p');
    newElement.textContent='this is para'+i;
    document.body.appendChild(newElement);
}
const t2=performance.now();
console.log('this took '+(t2-t1)+'ms'); */




//document fragment - optimal way to update DOM multiple times
/* let fragment=document.createDocumentFragment();
for(let i=1;i<=100;i++) {
    let newElement = document.createElement('p');
    newElement.textContent='this is para'+i;
  fragment.appendChild(newElement);
}
document.body.appendChild(fragment); */



//Single threading - one command at a time
function addPara() { //function declaration 1
    let Para=document.createElement('p');
    Para.textContent = 'JS is single threaded langauge';
    document.body.appendChild(Para);
}
function appendNewMessege() { //function declaration 2
    let Para = document.createElement('p');
    Para.textContent = 'Kya haal chal';
    document.body.appendChild(Para);
}
addPara(); //function calling 1
appendNewMessege();  //function calling 2 \

 

//setTimeout()
function myFunction() {
    console.log('Hey, Babe');
}
setTimeout(myFun  ction, 5000);
