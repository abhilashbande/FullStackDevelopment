// Add validation to age field (must be in a range (16-35))

function validateAge(iAge) {
    var no = "1234567890";

    for (var i = 0; i < iAge.length; i++) {
        if (no.indexOf(iAge.charAt(i)) == -1) {
            alert("You have entered invalid characters for age...");
            document.getElementById("age").select();
            break;
        }
    }

    var age = parseInt(iAge);
    if (age < 18 || age > 65) {
        alert("Please enter age between 18 to 65...");
        document.getElementById("age").select();
    }
}

// Add validation to a form (*hint : override onSubmit() event)
function validateForm() {
    var obj = validateEmailID(document.getElementById("emailID").value);
    console.log(obj);
    return obj;
}

// Add email validation for a text field (do NOT use input type="email")
function validateEmailID(emailID) {
    if (!(emailID.includes("@") || emailID.includes(".com"))) {
        alert("Invalid email id...");
        document.getElementById("emailID").select();
        return false;
    }
    return true;
}
