function checkAnswer() {
	let val = document.forms["form"]["input"].value;
	let correctVal = document.forms["form"]["svar"].value;
	let href = document.forms["form"]["href"].value;
	//console.log(val);
	//console.log(correctVal);
	//console.log(href);
	if (val.trim().toLowerCase() == correctVal.trim().toLowerCase()) {
		window.location.href = href;
	}
}