window.onload = function () {
  var params = new URLSearchParams(window.location.search);
  var redirectURL = params.get("redirectURL");
  var countdown = 15;
  
  var countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdown;
  var interval = setInterval(function () {
    countdown--;
    countdownElement.innerHTML = countdown;
    if (countdown <= 0) {
      clearInterval(interval);
      console.log("Redirecting to " + redirectURL);
      window.location.href = redirectURL;
    }
  }, 1000);
};
