var myObj = {
    name: "John",
    age: 30,    
    myMethod: function one() {
        this.name = "Smith"
        return (myObj2.name + " is " + this.age + " years old.") 
    }
}

var myObj2 = {
    name: "Smith",
    age: 40,
}
myObj.class = "WebDev"
myObj.myMethod2 = function two()
{
    return myObj.class;
}
console.log(myObj.myMethod())

var {name:nm, age:ag, myMethod:mm,email:em="John@gamil.co",...others} = myObj;

console.log(em)
console.log(myObj.myMethod())
for(key in myObj) {
    console.log(`${key} : ${myObj[key]}`)
}