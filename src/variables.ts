/* eslint-disable @typescript-eslint/no-unused-vars */

// Primitives
let aString = 'a string';
let aNumber = 42;
let aBoolean = true;

// Object references
let anArray = [
	1, 2, 3, 4, 5,
];

// Object literal (dictionary, lookup, associative array)
let anObject = {
	a: 'apple',
	n: 10,
	b: false,
	f1: function () {
		return 2 + 2;
	},
	f2() {
		return 3 + 3;
	},
	random: [
		4, 9, 2, 5,
	],
	address: {
		street: '123 Anywhere Street',
		city: 'Walla Walla',
		state: 'WA',
	},
};

// Objects from constructors
let today = new Date();

// Sets
let s = new Set();

// Maps (basic key value pairs)
let m = new Map();

export {};
