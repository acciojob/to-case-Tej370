function toCase(text) {
let lowercaseText = text.toLowerCase();

    let uppercaseText = text.toUpperCase();
    let result = `${lowercaseText}-${uppercaseText}`;
    return result
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
