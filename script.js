function toCase(text) {
  // write your code here
const lowercaseText = text.toLowerCase();
    // Convert the original text to uppercase
    const uppercaseText = text.toUpperCase();
    // Concatenate them with a hyphen as the delimiter
    const result = `${lowercaseText}-${uppercaseText}`;
    // Return the final result
    return result;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
