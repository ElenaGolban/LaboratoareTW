const button = document.getElementById('submitButton');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const telefonInput = document.getElementById('telefon');
const cityInput = document.getElementById('city');
const genderInput = document.getElementById('gender');
const fotoInput = document.getElementById('foto');

button.addEventListener('click', () => {
	const valid = validateField('firstName', 'First name is required') &&
	validateField('lastName', 'Last name is required') &&
	validateField('email', 'Email is required') &&
	validateEmail('Email must contain "@" and "."');
	document.getElementById('submitButton').addEventListener('click', function () {
		const nameValid = validateField('firstName', 'First name is required');
		const lastNameValid = validateField('lastName', 'Last name is required');
  
		let cityHasValue = validateField('city', 'City is required');
		let emailHasValue = validateField('email', 'Email is required');
  
		if (valid) {
			 console.log(firstNameInput.value + "\n" + lastNameInput.value + "\n" + emailInput.value);
		if (emailHasValue) {
			 emailHasValue = validateEmail();
		}
  
		if (cityHasValue) {
			 cityHasValue = validateCity();
		}
  
		const allFieldsValid = nameValid && lastNameValid && cityHasValue && emailHasValue;
		if (allFieldsValid) {
			 showValues();
		} else {
			 hideValues();
		}
  };
  function showValues() {
	[
		 'firstName',
		 'lastName',
		 'email',
		 'city'
	].forEach(id => {
		 const emelent = document.getElementById(id);
		 const valueElement = document.getElementById(`${id}Display`);
		 valueElement.innerHTML = `${id}: ${emelent.value};`;
	});
}

function hideValues () {
	[
		 'firstName',
		 'lastName',
		 'email',
		 'city'
	].forEach(id => {
		 const valueElement = document.getElementById(`${id}Display`);
		 valueElement.innerHTML = null;
	});
}


function validateField(id, errorMessage) {
	const fieldInput = document.getElementById(id);
	const label = fieldInput.parentElement.children.item(0);
	const error = document.getElementById(`${id}Error`);
	const value = fieldInput.value;

function validateField(fieldName, errorMessage) {
	const error = document.getElementById(`${fieldName}Error`);
	const field =  document.getElementById(fieldName);
	const value = field.value;
	if (value === '' || value === null || value.trim() === '') {
	if (value === null || value === '' || value.trim() === '') {
		 error.innerHTML = errorMessage;
		 error.style.display = 'block';
		 field.classList.add('error');
		 label.classList.add('error');
		 return false;
	} else {
		 error.innerHTML = '';
		 error.style.display = 'none';
		 field.classList.remove('error');
		 label.classList.remove('error');
	}

	return true;
}

function validateEmail(errorMessage) {
	const error = document.getElementById('emailError');
	const field =  document.getElementById('email');
	const value = field.value;
	if (value.includes('@') && value.includes('.')) {

function validateEmail() {
	const emailInput = document.getElementById('email');
	const label = emailInput.parentElement.children.item(0);
	const error = document.getElementById(`emailError`);
	const value = emailInput.value;


	if (!value.includes('@') || !value.includes('.') || value.lastIndexOf('.') < value.lastIndexOf('@')) {
		 error.innerHTML = 'Email is invalid';
		 error.style.display = 'block';
		 label.classList.add('error');
		 return false;
	} else {
		 error.innerHTML = '';
		 error.style.display = 'none';
		 field.classList.remove('error');
		 return true;
	}
	return true;
}



function validateCity() {
	const cityInput = document.getElementById('city');
	const label = cityInput.parentElement.children.item(0);
	const error = document.getElementById(`cityError`);
	const value = cityInput.value;


	if (value.length < 4) {
		 error.innerHTML = 'City length must be greater then 3';
		 error.style.display = 'block';
		 field.classList.add('error');
		 label.classList.add('error');
		 return false;
	} else {
		 error.innerHTML = '';
		 error.style.display = 'none';
		 label.classList.remove('error');
	}

