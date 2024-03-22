// one = () =>
// {
//     console.log(this)
// }


// one()

var myObj = {
    name: "John",
    age: 30,
    myMethod: function()
    {

    setTimeout(()=> {
        console.log(this.name)
    },3000)
    }
}
myObj.myMethod()

// setTimeout(myObj.myMethod.bind(myObj),1000) //undefined