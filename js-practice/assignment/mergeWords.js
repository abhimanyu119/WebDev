function mergeWords(word) {
    let result = word;

    function inner(nextWord) {
        if (nextWord) {
            result += ' ' + nextWord;
            return inner;
        } else {
            console.log(result);
        }
    }
    return inner;
}

mergeWords('There')('is')('no')('spoon.')();