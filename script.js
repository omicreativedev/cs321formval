// dropdown elements
const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const form = document.getElementById("flyerForm");

// U.S. states
const statesUS = [
	{ code: "AL", name: "Alabama" },
	{ code: "AK", name: "Alaska" },
	{ code: "AZ", name: "Arizona" },
	{ code: "AR", name: "Arkansas" },
	{ code: "CA", name: "California" },
	{ code: "CO", name: "Colorado" },
	{ code: "CT", name: "Connecticut" },
	{ code: "DE", name: "Delaware" },
	{ code: "FL", name: "Florida" },
	{ code: "GA", name: "Georgia" },
	{ code: "HI", name: "Hawaii" },
	{ code: "ID", name: "Idaho" },
	{ code: "IL", name: "Illinois" },
	{ code: "IN", name: "Indiana" },
	{ code: "IA", name: "Iowa" },
	{ code: "KS", name: "Kansas" },
	{ code: "KY", name: "Kentucky" },
	{ code: "LA", name: "Louisiana" },
	{ code: "ME", name: "Maine" },
	{ code: "MD", name: "Maryland" },
	{ code: "MA", name: "Massachusetts" },
	{ code: "MI", name: "Michigan" },
	{ code: "MN", name: "Minnesota" },
	{ code: "MS", name: "Mississippi" },
	{ code: "MO", name: "Missouri" },
	{ code: "MT", name: "Montana" },
	{ code: "NE", name: "Nebraska" },
	{ code: "NV", name: "Nevada" },
	{ code: "NH", name: "New Hampshire" },
	{ code: "NJ", name: "New Jersey" },
	{ code: "NM", name: "New Mexico" },
	{ code: "NY", name: "New York" },
	{ code: "NC", name: "North Carolina" },
	{ code: "ND", name: "North Dakota" },
	{ code: "OH", name: "Ohio" },
	{ code: "OK", name: "Oklahoma" },
	{ code: "OR", name: "Oregon" },
	{ code: "PA", name: "Pennsylvania" },
	{ code: "RI", name: "Rhode Island" },
	{ code: "SC", name: "South Carolina" },
	{ code: "SD", name: "South Dakota" },
	{ code: "TN", name: "Tennessee" },
	{ code: "TX", name: "Texas" },
	{ code: "UT", name: "Utah" },
	{ code: "VT", name: "Vermont" },
	{ code: "VA", name: "Virginia" },
	{ code: "WA", name: "Washington" },
	{ code: "WV", name: "West Virginia" },
	{ code: "WI", name: "Wisconsin" },
	{ code: "WY", name: "Wyoming" },
];

// Canadian provinces
const provincesCA = [
	{ code: "AB", name: "Alberta" },
	{ code: "BC", name: "British Columbia" },
	{ code: "MB", name: "Manitoba" },
	{ code: "NB", name: "New Brunswick" },
	{ code: "NL", name: "Newfoundland and Labrador" },
	{ code: "NS", name: "Nova Scotia" },
	{ code: "ON", name: "Ontario" },
	{ code: "PE", name: "Prince Edward Island" },
	{ code: "QC", name: "Quebec" },
	{ code: "SK", name: "Saskatchewan" },
	{ code: "NT", name: "Northwest Territories" },
	{ code: "NU", name: "Nunavut" },
	{ code: "YT", name: "Yukon" },
];

// tate and province dropdown
function populateStates(country) {
	stateSelect.innerHTML =
		'<option value="" disabled selected>Select a State or Province</option>';
	let list = country === "US" ? statesUS : country === "CA" ? provincesCA : [];
	list.forEach((state) => {
		let option = document.createElement("option");
		option.value = state.code;
		option.textContent = state.name;
		stateSelect.appendChild(option);
	});
}

// country selection
countrySelect.addEventListener("change", function () {
	populateStates(this.value);
});

// validate the form
function submitForm(event) {
	event.preventDefault();
	hideAllErrors();

	let isValid = true;

	// validate salutation
	const salutation = document.querySelector('input[name="salutation"]:checked');
	if (!salutation) {
		isValid = false;
		document.getElementById("salutationError").style.display = "inline";
	}

	// validate first name
	const firstName = document.getElementById("fname").value.trim();
	if (!firstName) {
		isValid = false;
		document.getElementById("fnameError").style.display = "inline";
	}

	// validate last name
	const lastName = document.getElementById("lname").value.trim();
	if (!lastName) {
		isValid = false;
		document.getElementById("lnameError").style.display = "inline";
	}

	// validate date of birth
	const dob = document.getElementById("dob").value;
	if (!dob) {
		isValid = false;
		document.getElementById("dobError").style.display = "inline";
	}

	// validate email
	const email = document.getElementById("email").value.trim();
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		isValid = false;
		document.getElementById("emailError").style.display = "inline";
	}

	// validate phone
	const phone = document.getElementById("phone").value.trim();
	if (!phone || !/^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone)) {
		isValid = false;
		document.getElementById("phoneError").style.display = "inline";
	}

	// validate card name
	const cardName = document.getElementById("cardName").value.trim();
	if (!cardName || !/^[A-Za-z\s\-']{2,50}$/.test(cardName)) {
		isValid = false;
		document.getElementById("cardNameError").style.display = "inline";
	}

	// validate card number
	const cardNumber = document.getElementById("card").value.trim();
	if (
		!cardNumber ||
		!/^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/.test(cardNumber)
	) {
		isValid = false;
		document.getElementById("cardError").style.display = "inline";
	}

	// validate expiration date
	const expDate = document.getElementById("expDate").value.trim();
	if (!expDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expDate)) {
		isValid = false;
		document.getElementById("expDateError").style.display = "inline";
	}

	// validate CVV
	const cvv = document.getElementById("cvv").value.trim();
	if (!cvv || !/^\d{3,4}$/.test(cvv)) {
		isValid = false;
		document.getElementById("cvvError").style.display = "inline";
	}

	// validate address - could we do this better?
	const address = document.getElementById("address").value.trim();
	if (!address) {
		isValid = false;
		document.getElementById("addressError").style.display = "inline";
	}

	// validate the country
	const country = countrySelect.value;
	if (!country) {
		isValid = false;
		document.getElementById("countryError").style.display = "inline";
	}

	// validate the state or province
	const state = stateSelect.value;
	if (!state) {
		isValid = false;
		document.getElementById("stateError").style.display = "inline";
	}

	// validate zip code
	const postal = document.getElementById("postal").value.trim();
	if (country === "US" && !/^\d{5}(-\d{4})?$/.test(postal)) {
		isValid = false;
		document.getElementById("postalError").style.display = "inline";
	} else if (
		country === "CA" &&
		!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(postal)
	) {
		isValid = false;
		document.getElementById("postalError").style.display = "inline";
	}

	// is this a valid password?
	const password = document.getElementById("password").value.trim();
	if (!password) {
		isValid = false;
		document.getElementById("passwordError").style.display = "inline";
	}

	// confirm password
	const confirmPassword = document
		.getElementById("confirmPassword")
		.value.trim();
	if (!confirmPassword || password !== confirmPassword) {
		isValid = false;
		document.getElementById("confirmPasswordError").style.display = "inline";
	}

	// show alert with form data if the form is valid from assignment hw4
	if (isValid) {
		let message = `Registration Confirmed\n\n`;
		message += `Salutation: ${salutation?.value || "N/A"}\n`;
		message += `Name: ${firstName} ${lastName}\n`;
		message += `Date of Birth: ${dob}\n`;
		message += `Email: ${email}\n`;
		message += `Phone: ${phone}\n`;
		/* 
		message += `Card Name: ${cardName}\n`;
		message += `Card Number: ${cardNumber}\n`;
		message += `Expiration Date: ${expDate}\n`;
		message += `CVV: ${cvv}\n`;
		*/
		message += `Address: ${address}\n`;
		message += `Country: ${country}\n`;
		message += `State/Province: ${state}\n`;
		message += `Postal Code: ${postal}\n`;
		/* message += `Password: ${password}\n`; */ /* Don't show password */

		alert(message);
	}
}

// put the submitForm to form's submit event
form.addEventListener("submit", submitForm);

// Change Font
function changeFont() {
	document.body.style.fontFamily = "Arial, sans-serif";
}

function resetForm() {
	document.getElementById("flyerForm").reset();
	populateStates(countrySelect.value); // Reset state/province dropdown
	hideAllErrors(); // Hide all error messages
}

// hide error messages
function hideAllErrors() {
	const errorElements = document.querySelectorAll(".error");
	errorElements.forEach((error) => (error.style.display = "none"));
}
