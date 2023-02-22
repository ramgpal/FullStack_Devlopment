console.log('lets learn about object');
//1. object create
/*const rectangle = {
    length:1,
    breadth:2,
    draw: function() {
        console.log('drawing rectangle');
    }
};
console.log(rectangle); */

/*function createRectangle() {
    const rectangle = {
        length:1,
        breadth:2,
        draw: function() {
            console.log('drawing rectangle');
        }
    };
    return rectangle;
} */
//rectangle.draw(); //we can access like this rectangle.length to access length & rectangle.breadth to access breadth

////object creation using constructor

/* let createObj1=createRectangle(); */

//constructor function-> pascal notation (first letter of every word is capital )
function Rectangle(len,bre) {
    this.length=len;
    this.breadth=bre;
    this.draw=function() {
        console.log('drawing');
    }
}
//object creation using constructor
let rectangleObject=new Rectangle(4,6);

//references

let a={value:10};
function inc(a) {
    a.value++;
}
inc(a);
    console.log(a);


//iteration through objects
let rectangle={
    length:2,
    breadth:4
};
//for-in loop
/*for(let key in rectangle) {
    //keys are reflected through key variable
    //values are reflected through rectangle[key]
    console.log(key,rectangle[key]);
} */
//for-of loop
for(let key of Object.entries(rectangle)) {
console.log(key);
}

//object cloning

//1. Cloning Through iteration

/* let src={
    a:10,
    b:20,
    c:30
};
let dest={};
for(let key in src) {
    dest[key]=src[key];
}
console.log(dest); */

//2.Cloning Through assign operator

/* let src={
    a:10,
    b:20,
    c:30
};
let dest=Object.assign({},src);
console.log(dest); */

//3.Through spread operator
let src={
    a:10,
    b:20,
    c:30
};
let dest={...src};
console.log(dest);