var Employee = {
    FirstName: "John",
    LastName: "Smith",
    Designation: "Clerk",
    Salary: 30000,
    Experience: 4,
    Method1: function promote() {
        if(this.Designation == "Clerk" && this.Experience > 3) {
            this.Designation = "Senior Clerk";
            this.Salary += 0.1*(this.Salary);
            console.log(`Congratulations, you've been promoted! \n Salary updated to: ${this.Salary}`);
        }
    },
    Method2: function fullName() {
        console.log(`Name: ${this.FirstName + this.LastName}`);
    }
}
Employee.Method1();