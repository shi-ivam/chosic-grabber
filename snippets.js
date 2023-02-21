
// GRAB ALL NAMES
[...document.querySelectorAll(".track-list-item-info-text")].map(e => e.querySelector('a')).map(e => e.innerText)