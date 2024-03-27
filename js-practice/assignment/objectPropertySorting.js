var items = {
    "TV": 30000,
    "Piano": 50000,
    "Jewelry": 200000,
    "Mobile": 80000,
    "Laptop": 60000
};
var temp = 0;

//Array method
// for(let i = 0; i < (Object.keys(items).length); i++) {
//     if(items[Object.keys(items)[i]] > temp) {
//         temp = items[Object.keys(items)[i]];
//     }
// }
// console.log(`${Object.keys(items).find(key => items[key] === temp)} was the most expensive item stolen which costed ₹${temp}`);

for(element in items) {
    if(items[element] > temp) {
        temp = items[element];
        var ftemp = element;
    }
}
console.log(`The most expensive item was ${ftemp} and it costed ₹${temp}`)