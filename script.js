function toCase(text) {
  // write your code here
	const lower = text.toLowerCase();
	const upper = text.toUpperCase();

	return `${lower}-${upper}`
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
