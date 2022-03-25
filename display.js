function checkTime(y) {
  if (y < 10) {
    y = "0" + y;
  }
  return y;
}

function display() {
    var now = new Date();
    var d = now.getDate();
    var month = now.getMonth()+1;
    var y = now.getFullYear();

    month = checkTime(month);
    d = checkTime(d);

    document.write("<span style='position:absolute; right:286px;'>HOURS</span>");
    document.write("<span style='position:absolute; right:169px;'>MINUTES</span>");
    document.write("<span style='position:absolute; right:48px;'>SECONDS</span>");
    document.write("<p>" + d + "/" + month + "/" + y + "<p>");

    
  }