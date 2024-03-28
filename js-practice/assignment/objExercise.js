var credentials = {
    username: "cameron.weber",
    password: "RmhvX1pNTcoZ"
}

var empDetails = {
    name: "Cameron Weber",
    age: 32,
    leaves: 12
}

if(credentials.username == "cameron.weber" && credentials.password == "RmhvX1pNTcoZ") {
    console.log("Logged In!");
}

empDetails.__proto__ = credentials;
console.log(`Username: ${empDetails.username}`);
console.log(`Password: ${empDetails.password}`);

const leaves_taken = 5;
console.log(`Leaves taken by the employee: ${leaves_taken}`)
console.log(`Remaining leaves: ${empDetails.leaves-leaves_taken}`)