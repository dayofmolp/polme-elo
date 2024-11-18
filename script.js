// Particle.js config
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100
    },
    "color": {
      "value": "#FF4C00"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 5,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});

// Audio Visualizer
let audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
let canvas = document.getElementById('visualizer');
let ctx = canvas.getContext('2d');
let analyser = new (window.AudioContext || window.webkitAudioContext)().createAnalyser();

audio.play();
audio.loop = true;

function drawVisualizer() {
  analyser.getByteFrequencyData(buffer);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < buffer.length; i++) {
    let barWidth = (canvas.width / buffer.length) * 2.5;
    let barHeight = buffer[i];
    ctx.fillStyle = '#FF4C00';
    ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth, barHeight);
  }

  requestAnimationFrame(drawVisualizer);
}

audio.addEventListener('play', () => {
  drawVisualizer();
});

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Contact Form Animation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
});
