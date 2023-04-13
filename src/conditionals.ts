
let test = true;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
if (test === true) {
	console.log('test is true!');
} else {
	console.log('test is false');
}

if (test) {
	console.log('test is true!');
} else {
	console.log('test is false');
}

// Numbers can be converted to Booleans
let testNumber = 10;

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (testNumber) {
// if (testNumber !== 0) {
	console.log('testNumber is true!');
} else {
	console.log('testNumber is false');
}

// Strings can be converted to Booleans
let testString = 'Hello';

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (testString) {
	// if (testString !== '') {
	console.log('testString is true!');
} else {
	console.log('testString is false');
}

// true -> literally Boolean true
// Any non-zero number, any non-empty string, are truthy.
// 0, '', null, undefined, NaN (Not a Number) are falsy
// false -> literally Boolean false

let someValue = 10;

if (someValue < 10) {
	console.log('someValue is less than 10');
} else if (someValue === 10) {
	console.log('someValue is exactly 10');
} else {
	console.log('someValue is great then 10');
}

// Comparison operators: > < >= <= ==, ===, != , !==
// Logical operators: && ||
// Unary operators: & | !

let testVar = 'apples';

switch (testVar) {
	case 'pears':
		// whatever
		break;
	case 'bananas':
		// whatever
		break;
	case 'oranges':
		// whatever
		break;
	case 'peaches':
		// whatever
		break;
	case 'apples':
		// whatever
		break;
	default:
		console.log('I do not know that fruit.');
}
