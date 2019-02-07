// *************************************************************************** //
//  File name   :   _.js													   //
//  Version     :   1.0														   //
//  Description :   This program re-creates the Lodash.js library.			   //
//  Author      :   Lachlan Gorst											   //
//  Contact     :   														   //
//  Compiler    :   Node 													   //
//  Last Update :   06-February-2019										   //
//  Note        :   ...														   //
//																			   //
// (c) Lachlan Gorst 2019 - All Rights Reserved								   //
// *************************************************************************** //

const _ = {};
const testObject = {
	name: 'Lachy',
	age: 21,
	hasLeg: false
};
const testArray = [1,2,3,4,5];

/*
Name:
	clamp
Description:
	Will return a number between the chosen range.
Note:
	-
Parameters: 
	number num    -    chosen number
	number low    -    the chosen lower clamp
	number high   -    the chosen upper clamp
Returns:
	number        -    result of clamp
*/
_.clamp = (num, low, high) => {
	return Math.min(high, Math.max(num, low));
};

/*
Name:
	inRange
Description:
	Will return a boolean result depending on if the number if between a given range.
Note:
	-
Parameters: 
	number num    -    chosen number
	number start  -    the chosen start range
	number end    -    the chosen end range
Returns:
	boolean       -    if number is given range
*/
_.inRange = (num, start, end) => {
	if(end === undefined){
		end = start;
		start = 0;
	} else if (start > end) {
		const temp = end;
		end = start;
		start = temp;
	}
	return (start <= num) && (num < end);
};

/*
Name:
	words
Description:
	Splits string into an array of words.
Note:
	-
Parameters: 
	string sentence    -    input sentence to be split
Returns:
	string[]           -    array of words
*/
_.words = sentence => {
	return sentence.split(" ");
};

/*
Name:
	pad
Description:
	Returns the input string with padding if necessary.
Note:
	-
Parameters: 
	input    -    passed in string
	length   -    desired length of string
Returns:
	string   -    input string with padding if necessary
*/
_.pad = (input, length) => {
	const amount = length - input.length;
	if(amount <= 0){
		return input;
	} else {
		const startPaddingLength = Math.floor(amount/2);
		const endPaddingLength = amount - startPaddingLength;
		return ' '.repeat(startPaddingLength) + input +
			' '.repeat(endPaddingLength);
	}
};

/*
Name:
	has
Description:
	Checks if an object has a value stored at the passed in key.
Note:
	-
Parameters: 
	obj        -    passed in object
	key        -    key in passed object
Returns:
	boolean    -    true if passed in key has a value
*/
_.has = (obj, key) => {
	if(obj[key] !== undefined){
		return true;
	}else{
		return false;
	}
};

/*
Name:
	invert
Description:
	Returns an object with it's keys and values swapped
Note:
	-
Parameters: 
	obj              -    passed in object 
Returns:
	object newObj    -    inverted k/v object
*/
_.invert = obj => {
	const newObj = {};
	for(let i in obj){
		newObj[obj[i]] = i;
	}
	return newObj;
};

/*
Name:
	findKey
Description:
	Returns the key where the resulting functions returns true
Note:
	-
Parameters: 
	obj             -    passed in object
	predicateFun    -    function that returns boolean based on value
Returns:
	key             -    returns key if function equals true, else undefined
*/
_.findKey = (obj, predicateFunc) => {
	for(let i in obj){
		if(predicateFunc(obj[i])){
			return i;
		}
	}
	return undefined; //No key found
};

/*
Name:
	drop
Description:
	Drops specified number of elements from start of array
Note:
	-
Parameters: 
	arr    -    passed in array
	num    -    number of elements to be dropped from array
Returns:
	arr    -    modified array
*/
_.drop = (arr, num) => {
	if(num === undefined){
		num = 1;
	}
	return arr.slice(num);
};

/*
Name:
	dropWhile
Description:
	Drop every element in array until condition returns false
Note:
	-
Parameters: 
	arr                                           -    passed in array
	predicateFunc(currElement, currIndex, arr)    -    returns boolean
Returns:
	arr                                           -    altered array
*/
_.dropWhile = (arr, predicateFunc) => {
	let count = 0;
	while(predicateFunc(arr[count], count, arr)){
		arr.shift();
	}
	return arr;
};

/*
Name:
	chunk
Description:
	Returns an array split in group lengths of n
Note:
	-
Parameters: 
	arr       -    passed in array
	n         -    chunk sizes
Returns:
	newArr    -    array of split passed in array 
*/
_.chunk = (arr, n) => {
	if(n === undefined){
		n = 1;
	}
	const newArr = [];
	for(let i = 0; i < arr.length; i+=n){
		newArr.push(arr.slice(i, i+n));
	}
	return newArr;
}

// Do not write or modify code below this line.
module.exports = _;