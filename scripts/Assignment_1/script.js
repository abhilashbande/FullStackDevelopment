function loadImage() {
    window.open("./../../images/1.jpg", "GOW1");
}

var newWindowHandle = null;
function openWindow() {
    newWindowHandle = window.open(
        "./../../images/2.jpg",
        "GOW2",
        "left=500,width=200,height=200"
    );
}

function closeWindow() {
    if (newWindowHandle) {
        newWindowHandle.close();
        newWindowHandle = null;
    } else {
        alert("There is no window opened..");
    }
}

var newWindowHandleOpenClose = null;
function openCloseWindow() {
    if (!newWindowHandleOpenClose) {
        document.getElementById("OpenCloseButton").className =
            "btn btn-outline-danger";
        document
            .getElementById("OpenCloseButton")
            .setAttribute("value", "Close");
        newWindowHandleOpenClose = window.open(
            "./../../images/3.jpg",
            "GOW3",
            "top=500,left=500,width=1000,height=1000"
        );
    } else {
        document.getElementById("OpenCloseButton").className =
            "btn btn-outline-success";
        document
            .getElementById("OpenCloseButton")
            .setAttribute("value", "Open");

        newWindowHandleOpenClose.close();
        newWindowHandleOpenClose = null;
    }
}

function floatingWindow() {
    let pos = 0;
    let handle = window.open(
        "./../../images/4.jpg",
        "GOW4",
        "top=20,left=20,width=500,height=500"
    );
    for (let i = 0; i < 1000; i++) {
        pos += 10;
        handle.moveTo(pos, pos);
        // setTimeout(function () {
        //     console.log(i + " - " + pos);
        //
        // }, 1000);
    }
}

function calculateMathFunctions() {
    var value = parseInt(document.MathFunctionForm.inputNumber.value);
    console.log(value);
    document.MathFunctionForm.sinValue.value = Math.sin(
        (value * Math.PI) / 180
    ).toFixed(2);
    document.MathFunctionForm.cosValue.value = Math.cos(
        (value * Math.PI) / 180
    ).toFixed(2);
    document.MathFunctionForm.tanValue.value = Math.tan(
        (value * Math.PI) / 180
    ).toFixed(2);
}

var valueParsed = false;
var number1 = 0;
var number2 = 0;

function valuesChanged() {
    console.log("Values are being modified..");
    valueParsed = false;
}

function ParseInputBox() {
    console.log("Parsing text boxes...");
    number1 = parseInt(document.calculator.number1.value);
    number2 = parseInt(document.calculator.number2.value);
}

function ParseInput() {
    if (!valueParsed) {
        ParseInputBox();
        console.log("Adding " + number1 + " and " + number2);
        valueParsed = true;
    }
}

function add() {
    ParseInput();
    document.calculator.result.value = number1 + number2;
}

function sub() {
    ParseInput();
    document.calculator.result.value = number1 - number2;
}

function div() {
    ParseInput();
    document.calculator.result.value = number1 / number2;
}

function mul() {
    ParseInput();
    document.calculator.result.value = number1 * number2;
}
