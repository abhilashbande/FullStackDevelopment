var date = new Date();

function startTimer() {
  var result =
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    ":" +
    date.getMilliseconds();

  window.document.DateForm.timer.value = result;
  timeout = setTimeout("startTimer()", 100);
}

function killTimer() {
  clearTimeout(timeout);
}

function DateFunction() {
  console.log(date);
  console.log("Month : " + date.getMonth());
  console.log("Year : " + date.getYear());
  console.log("Full Year : " + date.getFullYear());
  console.log("Date : " + date.getDate());
}
