// Thanks to https://codepen.io/bradtraversy/pen/XLrQvz

// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;


// Set Background and Greeting
function setgreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    greeting.textContent = 'Good Morning.';
  } else if (hour < 18) {
    // Afternoon
    greeting.textContent = 'Good Afternoon.';
  } else {
    // Evening
    greeting.textContent = 'Good Evening.';
    document.body.style.color = 'white';
  }
}


// Run
setgreet();

