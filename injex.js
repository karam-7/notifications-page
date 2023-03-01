// Get all the elements that need to be modified
const num = document.querySelector('.num');
const titleA = document.querySelector('.title-a');
const unread = document.querySelectorAll('.unread');
const circle = document.querySelectorAll('.circle');

// Set the initial value of num
num.textContent = unread.length;

// Add event listeners to the elements
titleA.addEventListener('click', markAllAsRead);

for (let i = 0; i < unread.length; i++) {
  unread[i].addEventListener('click', markAsRead);
}

// Function to mark a single notification as read
function markAsRead() {
  // Change the class of the notification to read
  this.classList.replace('unread', 'read');

  // Hide the circle
  const circle = this.querySelector('.circle');
  circle.style.display = 'none';

  // Update the num value
  num.textContent = document.querySelectorAll('.unread').length;
}

// Function to mark all notifications as read
function markAllAsRead() {
  // Change the class of all unread notifications to read
  for (let i = 0; i < unread.length; i++) {
    unread[i].classList.replace('unread', 'read');
  }

  // Hide all the circles
  for (let i = 0; i < circle.length; i++) {
    circle[i].style.display = 'none';
  }

  // Update the num value
  num.textContent = 0;
}
