// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let numebr1  = '';
  let number2 = '';
  array1.map((number) => {
    numebr1 += String(number)
  });
  array2.map((number) =>{
    number2+= String(number);
  });
  return Number(numebr1) + Number(number2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valueArray= [];
  let palindrome = '';
  for(let i = 0 ; i< String(value).length ; i++){
    valueArray.unshift(String(value)[i]);
  }
  valueArray.map((number) =>{
    palindrome+= String(number);
  });
  return value === Number(palindrome);
}


/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
 if(input === undefined ||  input === null || input ===  ''){
  return 'Required field';
 } else if(isNaN(Number(input)) || input === '0'){
  return 'Must be a number besides 0'
 }else{
  return '';
 }
}
