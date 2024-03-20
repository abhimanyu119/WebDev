var myObj = {
    name: "John",
    age: 30,
    myMethod: function one() {
        this.name = "Smith"
        return (myObj2.name + " is " + this.age + " years old.")
    }
}


function one()
{
    console.log(this.name)
}


one.call(myObj)

var ref = one.bind(myObj)

console.log(ref())