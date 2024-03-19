// Converting Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    var fahrenheit =(celsius * 9/5) + 32;
    return fahrenheit;
}
var celsius = 100;
console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`);