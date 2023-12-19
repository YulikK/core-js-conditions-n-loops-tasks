/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxValue = null;
  if (a >= b && a >= c) maxValue = a;
  if (b >= a && b >= c) maxValue = b;
  if (c >= a && c >= b) maxValue = c;
  return maxValue;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let isSheCan = false;

  if (
    queen.x + queen.y === king.x + king.y ||
    queen.x - king.x === queen.y - king.y
  ) {
    isSheCan = true;
  } else if (queen.x === king.x || queen.y === king.y) {
    isSheCan = true;
  }
  return isSheCan;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let isIsosceles = false;
  if (a === b && a + b > c && c !== 0) isIsosceles = true;
  if (a === c && a + c > b && b !== 0) isIsosceles = true;
  if (b === c && b + c > a && a !== 0) isIsosceles = true;
  return isIsosceles;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let numAra = num;
  let result = '';
  const rom = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];
  const ara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (let x = 0; x < rom.length; x += 1) {
    while (numAra >= ara[x]) {
      result += rom[x];
      numAra -= ara[x];
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const arr = [...`${numberStr}`];
  let strNum = '';
  let i = 0;
  while (i < arr.length) {
    if (strNum.length) strNum += ' ';
    switch (arr[i]) {
      case '0':
        strNum += 'zero';
        break;
      case '1':
        strNum += 'one';
        break;
      case '2':
        strNum += 'two';
        break;
      case '3':
        strNum += 'three';
        break;
      case '4':
        strNum += 'four';
        break;
      case '5':
        strNum += 'five';
        break;
      case '6':
        strNum += 'six';
        break;
      case '7':
        strNum += 'seven';
        break;
      case '8':
        strNum += 'eight';
        break;
      case '9':
        strNum += 'nine';
        break;
      case '-':
        strNum += 'minus';
        break;
      case '.':
        strNum += 'point';
        break;
      case ',':
        strNum += 'point';
        break;
      default:
        break;
    }
    i += 1;
  }
  return strNum;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let isPalindromeStr = true;
  const strArr = [...`${str}`];
  for (let i = 0; i < strArr.length - 1; i += 1) {
    if (strArr[i] !== strArr[strArr.length - 1 - i]) isPalindromeStr = false;
  }
  return isPalindromeStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  const strArr = [...`${str}`];
  let result = -1;
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] === letter) {
      result = i;
      break;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numArr = [...`${num}`];
  let result = false;
  let strDigit = '';
  strDigit += digit;
  for (let i = 0; i < numArr.length; i += 1) {
    if (numArr[i] === strDigit) {
      result = true;
      break;
    }
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let indexBalance = -1;
  for (let i = 0; i < arr.length; i += 1) {
    let prevSum = 0;
    let afterSum = 0;
    for (let prev = 0; prev < i; prev += 1) {
      prevSum += arr[prev];
    }
    for (let next = i + 1; next < arr.length; next += 1) {
      afterSum += arr[next];
    }
    if (afterSum === prevSum) {
      indexBalance = i;
      break;
    }
  }
  return indexBalance;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }
  let row = 0;
  let col = 0;
  let rowEnd = size - 1;
  let colEnd = size - 1;
  let counter = 1;
  while (col <= colEnd && row <= rowEnd) {
    for (let i = col; i <= colEnd; i += 1) {
      arr[row][i] = counter;
      counter += 1;
    }
    row += 1;

    for (let i = row; i <= rowEnd; i += 1) {
      arr[i][colEnd] = counter;
      counter += 1;
    }
    colEnd -= 1;

    for (let i = colEnd; i >= col; i -= 1) {
      arr[rowEnd][i] = counter;
      counter += 1;
    }
    rowEnd -= 1;

    for (let i = rowEnd; i >= row; i -= 1) {
      arr[i][col] = counter;
      counter += 1;
    }
    col += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const startValue = JSON.parse(JSON.stringify(matrix));
  const matrixResult = matrix;
  for (let i = 0; i < matrixResult.length; i += 1) {
    for (let j = 0; j < matrixResult[i].length; j += 1) {
      matrixResult[j][matrixResult.length - 1 - i] = startValue[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const n = arr.length;
  const arrSorted = arr;
  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < n - 1 - i; j += 1) {
      if (arrSorted[j + 1] < arrSorted[j]) {
        const t = arrSorted[j + 1];
        arrSorted[j + 1] = arrSorted[j];
        arrSorted[j] = t;
      }
    }
  }
  return arrSorted;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  for (let i = 0; i < iterations; i += 1) {
    let even = '';
    let odd = '';
    for (let char = 0; char < result.length; char += 1) {
      if (char % 2 === 0) even += result[char];
      else odd += result[char];
    }
    result = even + odd;
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numberArray = Array.from(String(number), Number);
  let result = number;
  let indexSmaller;
  for (
    indexSmaller = numberArray.length - 1;
    indexSmaller >= 0;
    indexSmaller -= 1
  ) {
    if (numberArray[indexSmaller] > numberArray[indexSmaller - 1]) break;
  }

  let x = numberArray[indexSmaller - 1];
  let smallest = indexSmaller;

  for (let j = indexSmaller + 1; j < numberArray.length; j += 1) {
    if (numberArray[j] > x && numberArray[j] < numberArray[smallest])
      smallest = j;
  }

  const temp = numberArray[smallest];
  numberArray[smallest] = numberArray[indexSmaller - 1];
  numberArray[indexSmaller - 1] = temp;
  x = 0;
  for (let j = 0; j < indexSmaller; j += 1) x = x * 10 + numberArray[j];

  result = numberArray.slice(indexSmaller, numberArray.length + 1);
  result.sort();

  for (let j = 0; j < numberArray.length - indexSmaller; j += 1)
    x = x * 10 + result[j];

  return x;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
