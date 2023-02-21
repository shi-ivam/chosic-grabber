
// GRAB ALL NAMES (ONLY WORKS ON 100 LIST, NOT MORE NOT LESS)
x = []
x = [...document.querySelectorAll(".track-list-item-info-text")].slice(0,99).map(e =>( e.querySelector('div a').innerText + ' - ' + e.querySelector(".track-list-item-info-genres").innerText))
// COPY TO CLIPBOARD
copy(x.join("\n"))