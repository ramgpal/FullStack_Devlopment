console.log('Lets learn about inbuilt object');

//creation of string in primitive
let lastName='Ram';

//creation of string in object
let firstName=new String('Pal');

//to print whole messege
 let messege=`Hello,
 
 Thanks for the opportunity
 
 Regards,
 Ram G Pal`
 console.log(messege);

//to print date
let date=new Date();
console.log(date);

//2nd tareeka
let date2=new Date('July 2 2004 11:55');
console.log(date2);

//3rd tareeka
 let date3=new Date(2004, 06, 2, 7);
 console.log(date3);
 
 //Array

 //1.Creation of array
 let numbers=[1,3,5,7];
 console.log(numbers);

 //2.insertion in Array
 //insertion in end
 numbers.push(9);
 console.log(numbers);

 //insertion in begin
 numbers.unshift(8);
 console.log(numbers);

 //insertion in the middle of the array
 numbers.splice(2,0,'a','b','c','d');
 console.log(numbers);
 //Searching
 console.log(numbers.indexOf(6));
 //we want to check if number is exist in array
 if(numbers.indexOf(12)!=-1) {
    console.log('Exist');
 }
 else
 console.log('Not exist');
//optimize way to check if number is exist in array
console.log(numbers.includes(7));

//Searching in References
//firstly object banaya 
let courses=[
    {no:1, naam:'Love'},
    {no:2,naam:'Rahul'}
];
console.log(courses);
//ab searching kra (using 'callback function')
let course = courses.find(function(course)
{
    return course.naam=='Love';
}); 
console.log(course);
//Also write as (Shortcut tareeka using arrow function)
let course1= courses.find(course1 => course1.naam==='Kavish');
console.log(course1);

//Removing element from Array
 let arrays=[1,3,5,6,7,8];
 //from end
 arrays.pop(8); 
 //from begining
 arrays.shift(1);
 //from middle
 arrays.splice(2,1);
 
 console.log('array after delation is: '+ arrays);

 //Emptying an array
let nums=[1,2,3,4,5];
nums.length = 0;
//or nums.splice(0,nums.length);
console.log(nums);

//Combining of two arrays
let first=[1,2,3,4];
let second=[5,6];
let combined=first.concat(second);
console.log('combined array is: '+combined);
//slicing
let marks=[10,20,30,40,50,60,70,80];
let ans=marks.slice(2,6);
console.log(ans);

//spread operator
let firstArray=[1,2,3];
let secondArray=[4,5,6];
let combinedArray=[...firstArray,...secondArray];
console.log(combinedArray);

//iterating an array
let array=[10,20,30,40,50];
//using for-of loop
for(let value of array) 
{
console.log(value);
}
//using for each loop
array.forEach(function(number) {
    console.log(number);
});

//joining arrays
let num=[10,20,30,40,50];
let joinedAns=num.join(',');
console.log(joinedAns);

//split arrays
let msg='this is first messege';
let parts=msg.split(' ');
console.log(parts);

//sorting of arrays
//a. increasing
let nos=[4,3,1,5,2];
nos.sort();
console.log(nos);
//b. decresing
nos.reverse();
console.log(nos);

//filtering of arrays
 let no=[1,2,-1,-4];
 let filtered=no.filter(function(value){
    return value>0;
 });
 console.log('array after filtering: '+filtered);

 //Mapping of arrays

 let a=[7,8,9,10];
 let mapped=a.map(function(value){
    return 'student_no'+value;
 });
 console.log(mapped);
