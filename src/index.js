import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// change title in title tag
// Function to handle visibility change
function handleVisibilityChange() {
  if (document.hidden) {
    document.title = "Come back please 🤙";
  } else {
    document.title = "Wilson Nshizirungu";
  }
}

// Add event listener for visibility change
document.addEventListener("visibilitychange", handleVisibilityChange, false);

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})


// disabling ctrl+u
document.addEventListener('keydown', function (event) {
  // Check if Control key and 'U' key are pressed
  if (event.ctrlKey && event.key === 'u') {
    // Prevent the default action
    event.preventDefault();
    // Optionally, you can add your own custom behavior here
    // console.log("Ctrl + U is disabled.");
  }
});

document.addEventListener('keydown', function (event) {
  // Check if Control key and 'U' key are pressed
  if (event.ctrlKey && event.key === 'p') {
    // Prevent the default action
    event.preventDefault();
    // Optionally, you can add your own custom behavior here
    // console.log("Ctrl + P is disabled.");
  }
});

document.addEventListener('keydown', function (event) {
  // Check if Control key, Shift key, and 'i' key are pressed
  if (event.ctrlKey && event.shiftKey && (event.key === 'i' || event.code === 'KeyI')) {
    // Prevent the default action
    event.preventDefault();
    // Optionally, you can add your own custom behavior here
    // console.log("Ctrl + Shift + I is disabled.");
  }
});

document.addEventListener('keydown', function (event) {
  // Check if Control key, Shift key, and 'i' key are pressed
  if (event.ctrlKey && event.shiftKey && (event.key === 'p' || event.code === 'KeyP')) {
    // Prevent the default action
    event.preventDefault();
    // Optionally, you can add your own custom behavior here
    // console.log("Ctrl + Shift + I is disabled.");
  }
});



document.addEventListener('keydown', function (event) {
  // Check if Control key and 'I' key are pressed
  if (event.ctrlKey && event.key === 'i') {
    // Prevent the default action
    event.preventDefault();
    // Optionally, you can add your own custom behavior here
    // console.log("Ctrl + I is disabled.");
  }
});

document.addEventListener('keydown', function (event) {
  // Check if Control key and 'I' key are pressed
  if (event.ctrlKey && event.key === 's') {
    // Prevent the default action
    event.preventDefault();
    // Optionally, you can add your own custom behavior here
    // console.log("Ctrl + S is disabled.");
  }
});


document.addEventListener('contextmenu', function (event) {
  // Prevent the default right-click behavior
  event.preventDefault();
  // Optionally, you can add your own custom behavior here
  // console.log("Right-click is disabled.");
});



document.addEventListener('keydown', function (event) {
  // Check if F12 key is pressed
  if (event.key === 'F12' || event.keyCode === 123) {
    // Prevent the default action
    event.preventDefault();
    // Optionally, you can add your own custom behavior here
    console.log("F12 key is disabled.");
    // Or alert a message
    // alert("F12 key is disabled.");
  }
});

// Prevent drag and drop for all images
document.addEventListener('dragstart', function (event) {
  event.preventDefault();
});