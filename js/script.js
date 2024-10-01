// Confirming submit on the form
// Uses a "click" event listener on the submit-btn ID
document.querySelector("#submit-btn")
    .addEventListener("click", function(r) {
        // Prevents the page from being refreshed
        r.preventDefault();
        if (confirm("Would you like to submit the form?")) {
            document.querySelector("form").submit();
        }
        else {
            alert("Submit cancelled.")
        }
});

// Confirming reset on the form
// Uses a "click" event listener on the reset-btn ID
document.querySelector("#reset-btn")
    .addEventListener("click", function(r) {
        r.preventDefault();
        if (confirm("Would you like to reset the form?")) {
            document.querySelector("form").reset();
        } else {
            alert("Reset cancelled.");
        }
});

// Display desciptions for each field in the form
