/* eslint-disable @typescript-eslint/no-unused-vars */

// Declaring but not initializing a variable
let firstName: string;
let age: number;
let atHome: boolean;

// Primitives, types inferred
let aString = 'a string';
let aNumber = 42;
let aBoolean = true;

// TypeScript will complain about this:
// aString = 10;

// Object references
let anArray = [
	1, 2, 3, 4, 5,
];

interface anObjectInterface {
	a: string;
	n: number;
	b: boolean;
	f1: () => number;
	f2: () => number;
	random: number[];
	address: object; // Maybe a little more general than we need
}

// Object literal (dictionary, lookup, associative array)
// Typing can be inferred, or we can provide a defined interface to type
let anObject: anObjectInterface = {
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

console.log(anObject.f1() + anObject.f2());

// Objects from constructors
let today = new Date();

// Sets
let s = new Set<string>();

// Maps (basic key value pairs)
let m = new Map<string, number>();
