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

// =============== DARK / LIGHT THEME ===============
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
