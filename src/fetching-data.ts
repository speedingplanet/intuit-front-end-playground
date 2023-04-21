import { type Movie } from './all-data-typed';

/* eslint-disable @typescript-eslint/no-floating-promises */
let fetchPromisesButton = document.querySelector('#button-fetch-promises');
let fetchAsyncButton = document.querySelector('#button-fetch-async');
let clearOutputButton = document.querySelector('#button-clear-output');
let outputDiv = document.querySelector('#output');

clearOutputButton?.addEventListener('click', () => outputDiv?.replaceChildren());
fetchPromisesButton?.addEventListener('click', fetchWithPromises);
fetchAsyncButton?.addEventListener('click', fetchWithAsync);

async function fetchWithAsync() {
	try {
		let response = await fetch('http://localhost:8000/movies');
		if (response.ok) {
			let movies = await response.json() as Movie[];
			movies.forEach((movie) => { writeToOutput(movie.title); });
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.warn(`Error in fetchWithPromises: ${(error as Error).message}`);
	}
}

function fetchWithPromises() {
	fetch('http://localhost:8000/movies')
		.then(response => {
			writeToOutput('p1 resolved successfully!');
			if (response.ok) { // Response is between 200 and 399
				return response.json() as Promise<Movie[]>;
			} else {
				throw new Error(`Bad response: ${response.status}`);
			}
		})
		.then((movies) => {
			movies.forEach((movie) => { writeToOutput(movie.title); });
		})
		.catch((error: Error) => {
			console.warn(`Error in fetchWithPromises: ${error.message}`);
		});
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function fetchWithPromisesUnchained() {
	// fetch(url: string): Promise<Response>
	let p1 = fetch('http://localhost:8000/movies');

	// promise.then ALWAYS returns another promise
	let p2 = p1.then(response => {
		writeToOutput('p1 resolved successfully!');
		// p2 receives this information
		return response.json() as Promise<Movie[]>;
	});

	p2.then((movies) => {
		movies.forEach((movie) => { writeToOutput(movie.title); });
	});
}

function writeToOutput(message: string) {
	if (outputDiv != null) {
		let div = document.createElement('div');
		div.textContent = message;
		outputDiv.append(div);
	}
}
