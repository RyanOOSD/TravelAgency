// Confirming submit on the form
// Uses a "click" event listener on the submit-btn ID
document.querySelector("#submit-btn")
    .addEventListener("click", function(event) {
        // Prevents the page from being refreshed
        event.preventDefault();
        if (confirm("Would you like to submit the form?")) {
            // Returns true if user clicks "OK", submits the form
            document.querySelector("form").submit();
        }
        else {
            // Returns false if the user clicks "Cancel"
            alert("Submit cancelled.")
        }
});

// Confirming reset on the form
// Uses a "click" event listener on the reset-btn ID
document.querySelector("#reset-btn")
    .addEventListener("click", function(event) {
        // Prevents the page from being refreshed
        event.preventDefault();
        if (confirm("Would you like to reset the form?")) {
            // Returns true if user clicks "OK", resets the form
            document.querySelector("form").reset();
        } else {
            // Returns false if the user clicks "Cancel"
            alert("Reset cancelled.");
        }
});

// Display desciptions for each text field on the form
// Focus listener for the first name field
document.querySelector("#floating-firstname")
    .addEventListener("focus", function() {
        // Modifies CSS display type to "block" to un-hide specified p tag on field focus
        document.getElementById("first-description").style.display="block";
});
// Blur listener for first name field
document.querySelector("#floating-firstname")
    .addEventListener("blur", function() {
        // Modifies CSS display type to "none" to re-hide specified p tag when focus is lost
        document.getElementById("first-description").style.display="none";
});

// Focus listener for the last name field
document.querySelector("#floating-lastname")
    .addEventListener("focus", function() {
        document.getElementById("last-description").style.display="block";
});
// Blur listener for the last name field
document.querySelector("#floating-lastname")
    .addEventListener("blur", function() {
        document.getElementById("last-description").style.display="none";
});

// Focus listener for the email field
document.querySelector("#floating-email")
    .addEventListener("focus", function() {
        document.getElementById("email-description").style.display="block";
});
// Blur listener for the email field
document.querySelector("#floating-email")
    .addEventListener("blur", function() {
        document.getElementById("email-description").style.display="none";
});

// Focus listener for the phone field
document.querySelector("#floating-phone")
    .addEventListener("focus", function() {
        document.getElementById("phone-description").style.display="block";
});
// Blur listener for the email field
document.querySelector("#floating-phone")
    .addEventListener("blur", function() {
        document.getElementById("phone-description").style.display="none";
});


// Focus listener for the password field
document.querySelector("#floating-password")
    .addEventListener("focus", function() {
        document.getElementById("password-description").style.display="block";
});
// Blur listener for the password field
document.querySelector("#floating-password")
    .addEventListener("blur", function() {
        document.getElementById("password-description").style.display="none";
});

// Focus listener for the address field
document.querySelector("#floating-address")
    .addEventListener("focus", function() {
        document.getElementById("address-description").style.display="block";
});
// Blur listener for the address field
document.querySelector("#floating-address")
    .addEventListener("blur", function() {
        document.getElementById("address-description").style.display="none";
});

//Focus listener for the city field
document.querySelector("#floating-city")
    .addEventListener("focus", function() {
        document.getElementById("city-description").style.display="block";
});
// Blur listener for the city field
document.querySelector("#floating-city")
    .addEventListener("blur", function() {
        document.getElementById("city-description").style.display="none";
});

// Focus listener for the postal code field
document.querySelector("#floating-postal")
    .addEventListener("focus", function() {
        document.getElementById("postal-description").style.display="block";
});
document.querySelector("#floating-postal")
    .addEventListener("blur", function() {
        document.getElementById("postal-description").style.display="none";
});