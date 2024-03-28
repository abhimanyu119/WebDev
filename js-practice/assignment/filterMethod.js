var objItems = {
    car: 500000,
    bike: 150000,
    cycle: 5000,
    laptop: 50000,
    mobile: 10000
}

console.log(`Items worth more than ₹100000 are: ${Object.keys(objItems).filter(key => objItems[key] > 100000)}`);