// create a countdown timer using date function

var startingMins = 0.1;
var time = 60 * startingMins;

function updateCountdown() {
    var min = Math.floor(time / 60);
    var seconds = time % 60;

    document.getElementById("countdown").innerHTML = `${min} : ${seconds}`;
    console.log(`${min} : ${seconds}`);
    time--;

    if (time < 0) {
        alert("Time up!!!");
        clearTimeout(timeout);
		time = 60 * 0.1;
    }
}

function countdown() {
    timeout = setInterval(updateCountdown, 1000);
}

// count total number of occurrences of a given character in given string
function getNumberOfOccurances(str, ch) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        if (ch == str.charAt(i)) result++;
    }
    return result;
}

function occurancesOfChar() {
    var result = getNumberOfOccurances(
        document.getElementById("occurString").value,
        document.getElementById("serachChar").value
    );

    document.getElementById("noOfOccur").value = result;
}

// check if the string is palindrome or not
function checkPalindrome(str) {
    var len = str.length;
    var isPalindrome = true;
    for (var i = 0, j = len - 1; i < j; i++, j--) {
        if (i >= j) break;

        if (str.charAt(i) == str.charAt(j)) {
            continue;
        } else {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

function palindrome() {
    var str = document.getElementById("inputString").value;

    var isPalindrome = checkPalindrome(str);

    if (isPalindrome)
        document.getElementById("palindromResult").value =
            "String is palindrome";
    else
        document.getElementById("palindromResult").value =
            "String is NOT palindrome";
}

// Find (list/display) duplicate characters in given string
function getDuplicateChars(str) {
    var len = str.length;
    var result = "";
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (str.charAt(i) == str.charAt(j)) {
                if (result.includes(str.charAt(i))) continue;
                result += str.charAt(i);
                result += " ";
            }
        }
    }
    return result;
}

function duplicateChar() {
    var duplicateChars = getDuplicateChars(
        document.getElementById("dupCharString").value
    );

    document.getElementById("dupCharStringResult").value = duplicateChars;
}
