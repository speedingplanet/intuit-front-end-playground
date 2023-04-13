/* eslint-disable @typescript-eslint/ban-ts-comment */
let counter = 0;

// do-while loops also exist
while (counter < 10) {
	console.log('Count is', counter);
	counter++;
}

for (let x = 0; x < 10; x++) {
	console.log('Count is', x);
}

let words = [
	'apple', 'banana', 'cat', 'dog', 'egg',
];

for (let word of words) {
	console.log('Current word:', word);
}

interface Person {
	firstName: string;
	lastName: string;
	city: string;
	state: string;
}

let person: Person = {
	firstName: 'John',
	lastName: 'Paxton',
	city: 'Nutley',
	state: 'NJ',
};

// Object.entries(object) -> [key, value]
for (let tuple of Object.entries(person)) {
	console.log(tuple[0], '=', tuple[1]);
}

let states = new Map<string, string>();
states.set('NJ', 'New Jersey');
states.set('NY', 'New York');
states.set('NH', 'New Hampshire');
states.set('CA', 'California');
states.set('TX', 'Texas');
states.set('GA', 'Georgia');

for (let [key, value] of states) {
	console.log(key, '=', value);
}

// array destructuring
// Equivalent to:
// let firstWord = words[0];
// let secondWord = words[1];
let [firstWord, secondWord] = words;

console.log(firstWord, secondWord);
