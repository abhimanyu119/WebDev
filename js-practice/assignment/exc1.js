function bank() {
    var bankBalance = 1000;
    function withdrawBalance(amount) {
        bankBalance -= amount;
        return bankBalance;
    }
    function depositBalance(amount) {
        bankBalance += amount;
        return bankBalance;
    }
    return [withdrawBalance, depositBalance];
}
var myBank = bank();
console.log(`Credit: ₹${myBank[0](100)}`);
console.log(`Credit: ₹${myBank[1](300)}`);