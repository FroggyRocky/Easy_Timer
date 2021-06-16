   const button = document.querySelector(`.button__time`);
   const headerTime = document.querySelector(".time__header");
   const headerDate = document.querySelector(".date__header");
   const form = document.querySelector("form")
  const ding = new Audio("./Ding.mp3");


button.addEventListener('click', () => {    

  var hours = Number(document.getElementById("hour").value);
  var minutes = Number(document.getElementById("minute").value);
  var seconds = Number(document.getElementById("second").value);
  var headerCountDown = document.querySelector(".countDown__header");

function displayTime() {
  
  headerCountDown.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
var interval = setInterval(() => {
      if (hours == 0 || minutes == 0) {
        seconds -= 1; }

        if (minutes !== 0 && seconds == 0) {
          minutes -= 1;
          seconds = 60  }

        if (hours == 0 && seconds == 0 && minutes == 0) {
          clearInterval(interval);   // SPECIAL FUNCTION JS "CLEARINTERVAL"
         ding.play(); }

   displayTime();

  }, 1000);

  form.style.display = "none"

})
