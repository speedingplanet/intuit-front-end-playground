let fetchPromisesButton = document.querySelector('#button-fetch-promises');
let fetchAsyncButton = document.querySelector('#button-fetch-async');
let outputDiv = document.querySelector('#output');

fetchPromisesButton?.addEventListener('click', fetchWithPromises);
fetchAsyncButton?.addEventListener('click', fetchWithAsync);

function fetchWithPromises() {
	writeToOutput('Fetching data with Promises');
}

function fetchWithAsync() {
	writeToOutput('Fetching data with async/await');
}

function writeToOutput(message: string) {
	if (outputDiv != null) {
		let div = document.createElement('div');
		div.textContent = message;
		outputDiv.prepend(div);
	}
}
