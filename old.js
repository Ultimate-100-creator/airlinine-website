function showHidePassword() {
  const passwordInput = document.getElementById('password');
  const showHideBtn = document.getElementById('show-hide-btn');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showHideBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    showHideBtn.textContent = 'Show';
  }
}

function showPopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  popup.style.display = "block";
  overlay.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  popup.style.display = "none";
  overlay.style.display = "none";
}

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


// Function to validate the form and show the popup only if all fields are filled
function validateAndSubmitForm(event) {
  event.preventDefault(); // Prevent form submission to allow validation

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const terms = document.getElementById("terms").checked;
  const captcha = document.getElementById("captcha").checked;

  if (!email || !password || !mobile || !firstName || !lastName || !terms || !captcha) {
      alert("Please fill out all required fields.");
      return;
  }

  // If all required fields are filled, show the popup
  showPopup();
}

// Function to validate the form and show the popup only if all fields are filled
function validateAndSubmitForm(event) {
    event.preventDefault(); 
    // Prevent form submission to allow validation
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const terms = document.getElementById("terms").checked;
    const captcha = document.getElementById("captcha").checked;

    if (!email || !password || !mobile || !firstName || !lastName || !captcha) {
        alert("Please fill out all required fields.");
        return;
    }

    if (!terms) {
        showTermsPopup(); // Show terms agreement popup
    } else {
        showPopup(); // Show success popup
    }
}

// Function to show terms agreement popup
function showTermsPopup() {
    const termsPopup = document.getElementById("terms-popup");
    const termsOverlay = document.getElementById("terms-overlay");
    termsPopup.style.display = "block";
    termsOverlay.style.display = "block";
}

// Function to close terms agreement popup
function closeTermsPopup() {
    const termsPopup = document.getElementById("terms-popup");
    const termsOverlay = document.getElementById("terms-overlay");
    termsPopup.style.display = "none";
    termsOverlay.style.display = "none";
    document.getElementById("terms").focus(); // Focus on terms checkbox
}

// Function to show success popup
function showPopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    popup.style.display = "block";
    overlay.style.display = "block";
}


//

// Function to validate the form and show the popup only if all fields are filled
function validateAndSubmitForm(event) {
  event.preventDefault(); 
  // Prevent form submission to allow validation
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const terms = document.getElementById("terms").checked;
  const captcha = document.getElementById("captcha").checked;

  if (!email || !password || !mobile || !firstName || !lastName || !captcha) {
      alert("Please fill out all required fields.");
      return;
  }

  if (!terms) {
      showTermsPopup(); // Show terms agreement popup
  } else {
      showPopup(); // Show success popup
  }
}

// Function to show terms agreement popup
function showTermsPopup() {
  const termsPopup = document.getElementById("terms-popup");
  const termsOverlay = document.getElementById("terms-overlay");
  termsPopup.style.display = "block";
  termsOverlay.style.display = "block";
}

// Function to close terms agreement popup
function closeTermsPopup() {
  const termsPopup = document.getElementById("terms-popup");
  const termsOverlay = document.getElementById("terms-overlay");
  termsPopup.style.display = "none";
  termsOverlay.style.display = "none";
  document.getElementById("terms").focus(); // Focus on terms checkbox
}

// Function to show success popup
function showPopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  popup.style.display = "block";
  overlay.style.display = "block";
}

// Function to close success popup
function closePopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  popup.style.display = "none";
  overlay.style.display = "none";
}
