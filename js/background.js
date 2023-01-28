const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const body = document.body; 
const bgImage =  `url('img/${chosenImage}')`;

body.style.backgroundImage = bgImage;