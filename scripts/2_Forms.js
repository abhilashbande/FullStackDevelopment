function onFormSubmit() {
    var no1 = parseInt(window.document.loginForm.no1.value);
    var no2 = parseInt(window.document.loginForm.no2.value);

    window.document.loginForm.addition.value = no1 + no2;

    alert("In Main - Result : " + Addition(no1 + no2));

    window.document.loginForm.sub.value = no1 - no2;
    window.document.loginForm.mul.value = no1 * no2;
    window.document.loginForm.division.value = no1 / no2;
}


function Addition(no1, no2) {
    var result = no1 + no2;
    alert(result);
    return result;
}
