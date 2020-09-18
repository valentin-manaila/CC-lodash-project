const _ = {
	//   CLAMP option 1
	clamp1(number, lower, upper) {
		let lowerClampedValue = Math.max(
			number,
			lower
		);
		let clampedValue = Math.min(
			lowerClampedValue,
			upper
		);
		return clampedValue;
	},
	//  CLAMP option 2
	clamp2(number, lower, upper) {
		let currUpper;
		if (number < lower) {
			currUpper = lower;
		} else {
			currUpper = number;
		}
		if (currUpper < upper) {
			return currUpper;
		} else {
			return upper;
		}
	},
	// IN RANGE
	inRange(number, start, end) {
		if (end === undefined) {
			end = start;
			start = 0;
		}
		if (start > end) {
			// option 1 using a temp variable
			// let temp = end;
			// end = start;
			// start = temp;
			// option 2
			[start, end] = [
				end,
				start,
			]; /* this swaps the values using a destructuring assignment*/
		}
		// option 1 using a function
		// let isInRange =
		// 	start <= number &&
		// 	number < end;
		// return isInRange;

		// option 2 using and if else statement
		if (number < start) {
			return false;
		} else if (number > end) {
			return false;
		} else if (
			number >= start &&
			number <= end
		) {
			return true;
		}
	},
	// WORDS, converts a string to an array of individual words based on the space between words using .split() method
	words(str) {
		let words = str.split(" ");
		return words;
	},
	// PAD, adds space padding to the beginning and end of a string
	pad1(str, length) {
		let diff = length - str.length;
		let space = " ";
		// let paddedStr = "";
		if (str.length <= length) {
			let frontSpaces = Math.floor(
				diff / 2
			);
			let backSpaces = Math.ceil(
				diff / 2
			);
			paddedStr =
				space.repeat(frontSpaces) +
				str +
				space.repeat(backSpaces);
			return paddedStr;
		} else {
			return str;
		}
	},
	// PAD option 2
	pad2(str, length) {
		if (str.length >= length) {
			return str;
		}
		const startPaddingLength = Math.floor(
			(length - str.length) / 2
		);
		const endPaddingLength =
			length -
			str.length -
			startPaddingLength;
		const paddedString =
			" ".repeat(
				startPaddingLength
			) +
			str +
			" ".repeat(endPaddingLength);
		return paddedString;
	},
	// HAS takes two arguments: an object and a key
	// .has() checks to see if the provided object contains a value at the specified key
	has1(obj, key) {
		if (obj[key] === undefined) {
			return false;
		} else {
			return true;
		}
	},
	// HAS option 1
	has2(object, key) {
		const hasValue = object[key];
		if (hasValue != undefined) {
			return true;
		} else {
			return false;
		}
	},
	// INVERT this doesn't work.

	// invert(obj) {
	// 	let invertedObject = {};
	// 	console.log(invertedObject);
	// 	for (let key in obj) {
	// 		console.log(obj[key]);
	// 		let originalValue = obj[key];
	// 		// console.log(originalValue);
	// 		let invertedObject = {
	// 			originalValue: key,
	// 		};
	// 		console.log(invertedObject);
	// 	}
	// 	// return invertedObject;
	// },
	findKey(object, predicate) {
		for (let key in object) {
			let value = object[key];
			let predicateReturnVal = predicate(
				value
			);
			if (predicateReturnVal) {
				return key;
			}
		}
		undefined;
		return undefined;
	},

	// DROP - in Arrays, drops first element
	drop(array, n) {
		if (n === undefined) {
			n = 1;
		}
		let droppedArray = array.slice(
			n,
			array.length
		);
		return droppedArray;
	},
	// DROP-WHILE
	dropWhile(array, predicate) {
		const cb = (element, index) => {
			return !predicate(
				element,
				index,
				array
			);
		};
		let dropNumber = array.findIndex(
			cb
		);
		let droppedArray = this.drop(
			array,
			dropNumber
		);
		return droppedArray;
	},
	// CHUNK
	chunk(array, chunk = 1) {
		let arrayChunks = [];

		for (
			let i = 0;
			i < array.length;
			i += chunk
		) {
			let arrayChunk = array.slice(
				i,
				i + chunk
			);
			arrayChunks.push(arrayChunk);
		}
		return arrayChunks;
	},
	// array.slice(start, end)
	// array.push('val')
};

const object = {
	d: "1",
	b: 2,
	c: 3,
};

const array = [1, 2, 3, 7, 9];
const array2 = [
	"ant",
	"bison",
	"camel",
	"duck",
	"elephant",
];

console.log(_.chunk(array, 3));
// console.log(_.drop(array2, 4));
// console.log(_.findKey(object, "b"));
// console.log(_.invert(object));
// console.log(_.has2(object, "a"));
// console.log(_.pad1("car", 8));
// console.log(_.pad2("car", 1));
// console.log(_.words("bla bla bla"));
// console.log(_.inRange(-2, 3, 1));
// console.log(_.clamp1(2, 5, 1));
// console.log(_.clamp2(2, 5, 1));
