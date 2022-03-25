function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  //Định dạng số 01,02,03,...
  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);

  var information = hour + ":" + minute + ":" + second;
  document.getElementById("time").innerHTML = information;
  setTimeout("startTime()", 1000);
}
