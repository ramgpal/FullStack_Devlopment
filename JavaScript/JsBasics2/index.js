console.log('lets learn about object');
//1. object create
const rectangle = {
    length:1,
    breadth:2,
    draw: function() {
        console.log('drawing rectangle');
    }
};
console.log(rectangle);

function createRectangle() {
    const rectangle = {
        length:1,
        breadth:2,
        draw: function() {
            console.log('drawing rectangle');
        }
    };
    return rectangle;
}
//rectangle.draw(); //we can access like this rectangle.length to access length & rectangle.breadth to access breadth

//factory function

let createObj1=createRectangle();
