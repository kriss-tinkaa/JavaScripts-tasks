function isPalindrom(str) {
    let arr = str.split('');
    let reversArr = arr.reverse();
    let resString = reversArr.join('');
    let res = str === resString;
    return res;
}

console.log(isPalindrom('тест'));
console.log(isPalindrom('шалаш'));