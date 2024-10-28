// Function to update phone number input based on selected country code and set maxlength
function updatePhoneNumber() {
  const countryCodeElement = document.getElementById("country-code");
  const selectedCountryCode = countryCodeElement.value;
  const mobileInput = document.getElementById("mobile");

  // Get the max length from the selected option's data-maxlength attribute
  const selectedOption = countryCodeElement.options[countryCodeElement.selectedIndex];
  const maxLength = selectedOption.getAttribute("data-maxlength");

  // Set the phone number field to the selected country code and update maxlength
  mobileInput.value = selectedCountryCode + ' ';
  mobileInput.setAttribute("maxlength", maxLength);
}