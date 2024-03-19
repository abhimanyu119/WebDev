// Area and perimeter of a circle
function circleValues(radius) {
    var pi = 3.14;
    var area = pi * radius ** 2;
    var perimeter = 2 * pi * radius;
    return [area, perimeter];
}
var radius = 5;
console.log(`Area of circle with radius ${radius} is ${circleValues(radius)[0]} and perimeter is ${circleValues(radius)[1]}`);