
/**  Task 1 
* 
* Implement function countOccurrences:
*
* Implement function which takes two params (`str`, `substr`) and returns the
* number of times the `substr` appears in `str`.
*
* e.g. for str = 'azyxxzyzy', substr = 'zy' it should return 3, because 'zy'
* appears 3 times: 'a[zy]xx[zy][zy]'.
* 
* countOccurrences(azyxxzyzy, zy) === 3
* countOccurrences(ababagalamaga, ba) === 2
* 
**/



function countOccurrences(str, substr) {
    if(typeof str !== "string"|| typeof substr !== "string"){
        return 'string and substring are not string'
    }
    return str.split(substr).length;
   }


//console.log(countOccurrences('azyxxzyzy', 'zy'));
//console.log(countOccurrences('ababagalamaga', 'ba'));
   
   


/** STORAGE
* Implement function storage:
*
* function works with next pattern:
* const propsStorage = storage();
* propsStorage.setValue('name', 'Peter');
* propsStorage.setValue('age', 30);
* propsStorage.getValue('name'); // Peter
* propsStorage.getValue('age'); // 30
* propsStorage.setValue('age', 31);
* propsStorage.getValue('age'); // 31
* propsStorage.getValue('occupation'); //undefined
*
*/


function storage() {
    return {
        setValue: function(name, value){
            window.localStorage.setItem(name, JSON.stringify(value))
        },
        getValue: function(name){
            window.localStorage.getItem(name);
        }
    }
   
}
const propsStorage = storage();
propsStorage.setValue('name', 'Peter');
propsStorage.getValue('name'); // Peter



/** toDigitArray
* Implement function toDigitArray:
*
* Function takes a natural number N and returns an array with its digits in
* order from least significant to most significant. Least significant means the
* last digit in a number and most significant means the first one.
*
* e.g. for N = 46156 it should return [6, 5, 1, 6, 4]. Make sure all items
* in returned arrays are numbers. ['6', '5', '1', '6', '4'] is wrong answer.
*
*/

function toDigitArray(number){
    const newArr = number.toString().split('').reverse().forEach(digit => Number(digit));
    return newArr
}

// function toDigitArray2(number){
//     let newArr = [];
//     for( let i = 0; i < number.length; i++){
//         newArr.unshift(number[i]);
//     }
//     return newArr;
// }

//console.log(toDigitArray(46156))




/** roundedRating
* Implement function calculateRoundedRating:
*
* Function takes an exact rating of the product - the float number between 1
* and 5 including (range `[1, 5]`) and returns the rounded rating to closest
* 0.5 (1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5 or 5).
*
* calculateRoundedRating(3.666); // 3.5
* calculateRoundedRating(1.92); // 2
* calculateRoundedRating(4.299999); // 4.5
* calculateRoundedRating(1.2499999); // 1
*/


function calculateRoundedRating(rating) {
    let step = 0.5;
    return Math.round(rating / step) * step;
}

//console.log(calculateRoundedRating(1.2499999))
//console.log(calculateRoundedRating(1.92))
//console.log(calculateRoundedRating(3.666))
//console.log(calculateRoundedRating(4.299999))




/** countWords
* Implement function countWords:
*
* Function takes a text without punctuation marks and returns the number of
* words in the given text. Words are separated by one or many whitespaces.
* Also, whitespaces can appear at the beginning and end of the text.
*
* e.g. for `text = '   You  area programmer '` it should return `3`.
*
*/


function countWords(text) {
    var counter = 0;
    text = text.replace(/\s+/g, ' ').trim()
    return text.split(' ').length
}
//console.log(countWords('   You  area programmer '))




/** extractYears
* Implement function extractYears:
*
* Function takes a text and returns array of years between 1900 and 2099
* including (range `[1900, 2099]`) which appear in the given text. The order of
* years in the returned array is the same as they appear in the text. If no
* year found the function returns an empty array.
*
* e.g. for text:
*
* Usually people who were born in 1995 can find they first job not later than
* in 2020 but also not earlier than in 2012. Number 11999 is not included in
* the result because it's too big. It is out of range between 1900 and 2099.
*
* The result should be `[1995, 2020, 2012, 1900, 2099]`
*
* @param {string} text
*
* @return {number[]}
*/


function extractYears(text) {
 // write code here
 let newArr = [];

 text.split(' ').forEach(function(elem) {
	if(elem >= 1990 && elem <= 2099) {
        newArr.push(Math.round(elem))
    }
});
return newArr
}

// console.log(extractYears(`Usually people who were born in 1995 can find they first job not later than
// in 2020 but also not earlier than in 2012. Number 11999 is not included in
// the result because it's too big. It is out of range between 1900 and 2099.
// `))

