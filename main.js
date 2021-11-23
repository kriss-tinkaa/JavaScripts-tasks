//Ф-ция проверки палиндрома

function isPalindrom(str) {
    let arr = str.split('');
    let reversArr = arr.reverse();
    let resString = reversArr.join('');
    let res = str === resString;
    return res;
}

// console.log(isPalindrom('тест')); //  false
// console.log(isPalindrom('шалаш')); // true


//Ф-ция поиска короткого слова

function findShort(str){
    let wordsArr = str.split(' ');
    let sortedWordssArr = wordsArr.sort(function(a,b){
        return a.length - b.length;
    });
    return sortedWordssArr[0];
}

// console.log(findShort('THe Smallest word in sentence'));// in
// console.log(findShort('Just test string'))// just

// Ф-ция создания инициалов 

function toInitials(name){
    let nameArr = name.split(' ');
    let firstLetterArr = nameArr.map(function(el){
        return el.slice(0, 1).toUpperCase() + '.';
    });
    let initials = firstLetterArr.join('');
    return initials;
}

console.log(toInitials('Bill Gates'))// B.G.
console.log(toInitials('elon mask'))// E.M.