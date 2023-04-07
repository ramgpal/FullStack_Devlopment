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

//Phases of event
const content=document.querySelector('#wrapper');
content.addEventListener('click',function(event) {
console.log(event);
});