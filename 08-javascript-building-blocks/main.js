const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <=5; i++) {
  let filename = `images/pic${ i }.jpg`;
  const newImage = document.createElement('img');
  newImage.setAttribute('src', filename);
  thumbBar.appendChild(newImage);

  /*newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', filename);
  });*/
}

thumbBar.addEventListener('click', function() {
  displayedImage.setAttribute('src', event.target.src);
});


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', lightenAndDarken);

function lightenAndDarken(event) {
  if (event.target.getAttribute('class') === 'dark') {
    event.target.setAttribute('class', 'light');
    event.target.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    event.target.setAttribute('class', 'dark');
    event.target.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
  }
}