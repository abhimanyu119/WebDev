function bank() {
    var bankBalance = 1000;
    return (
        function withdrawBalance(amount) {
            bankBalance -= amount;
            return bankBalance;
        }
    )
}
var myBank = bank();
console.log(myBank(100));