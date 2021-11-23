//Ф-ция проверки палиндрома

function isPalindrom(str) {
    let arr = str.split('');
    let reversArr = arr.reverse();
    let resString = reversArr.join('');
    let res = str === resString;
    return res;
}

console.log(isPalindrom('тест'));
console.log(isPalindrom('шалаш'));


//Ф-ция поиска короткого слова

function findShort(str){
    let wordsArr = str.split(' ');
    console.log(wordsArr)
    let sortedWordssArr = wordsArr.sort(function(a,b){
        return a.length - b.length;
    });
    return sortedWordssArr[0];
}

console.log(findShort('THe Smallest word in sentence'));// in
console.log(findShort('Just test string'))// just