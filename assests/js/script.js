const hourHand = document.getElementById("clock-hour"),
  minuteHand = document.getElementById("clock-minutes"),
  secondHand = document.getElementById("clock-seconds"),
  digitalHours = document.getElementById("text-hours"),
  digitalMinutes = document.getElementById("text-minutes"),
  digitalSeconds = document.getElementById("text-seconds"),
  day = document.getElementById("date-day"),
  month = document.getElementById("date-month"),
  year = document.getElementById("date-year");

const clock = () => {
  const date = new Date();

  // We need to sync up each hour, minute, and second with the degrees in a circle
  // There's 360deg in a circle. So, we'll divide 360deg by the total possible hours, minutes, and seconds.
  // 360 / 12 = 30 | Hours
  // 360 / 60 = 6  | Minutes & Seconds
  // Every hour we rotate the hour hand 30deg and every minute / second we rotate those hands 6deg.

  const hourHandDegrees = date.getHours() * 30,
    minuteHandDegrees = date.getMinutes() * 6,
    secondHandDegrees = date.getSeconds() * 6;

  // Every minute that's added the hour hand will be updated
  hourHand.style.transform = `rotateZ(${(minuteHandDegrees / 12) + hourHandDegrees}deg)`;
  minuteHand.style.transform = `rotateZ(${minuteHandDegrees}deg)`;
  secondHand.style.transform = `rotateZ(${secondHandDegrees}deg)`;
};

const displayTime = () => {
  const date = new Date();

  const hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  digitalHours.innerText = `${hours >= 10 ? hours + ":" : "0" + hours + ":"}`;
  digitalMinutes.innerText = `${minutes >= 10 ? minutes + ":" : "0" + minutes + ":"}`;
  digitalSeconds.innerText = `${seconds >= 10 ? seconds : "0" + seconds}`;

  month.innerText = `${date.getMonth() + 1} /`;
  day.innerText = `${date.getDate()} /`;
  year.innerText = `${date.getFullYear()}`;
};


setInterval(clock, 1000);
setInterval(displayTime, 1000);
