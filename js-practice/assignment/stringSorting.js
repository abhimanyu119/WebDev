var myString = "The quick brown and and  aaaa fox";

function vowelCount(myString) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for(i=0; i<myString.length;i++){
        if(vowels.includes(myString[i])){
            count++;
        }
    }
    return count;
}
console.log(`Vowels in the string: ${vowelCount(myString)}`);