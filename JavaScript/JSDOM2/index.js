//addEventListener()
/* document.addEventListener('click',function() {
    console.log('I clicked on document');
});

//removeEventListener()
function print() {
    console.log('Hi');
}
document.addEventListener('click',print);
document.removeEventListener('click',print); */

//EventObject
const content=document.querySelector('#wrapper');
content.addEventListener('click',function(event) {
console.log(event);
});

//.preventDefault()
let  links = document.querySelectorAll('a');
let thirdLink = links[2];
thirdLink.addEventListener('click', function(event)
{
    event.preventDefault();
    console.log('Maja aa gya');
});  

//Avoid too many elements
let myDiv = document.createElement('div');
function paraStatus(event) {
    console.log('Para '+event.target.textContent);
}
myDiv.addEventListener('click',paraStatus);
for(let i=1;i<=100;i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i;
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
