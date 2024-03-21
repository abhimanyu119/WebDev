function bank() {
    var bankBalance = 1000;
    function withdrawBalance(amount) {
        bankBalance -= amount;
        return bankBalance;
    }
}