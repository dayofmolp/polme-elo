// Particle.js config
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": "#00CFFF"
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

// Dark mode toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Weather Widget
async function getWeather() {
  const weatherContainer = document.getElementById("weather-info");
  const apiKey = "your-api-key";
  const city = "Cape Town";
  
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  
  if (data.weather) {
    const weatherInfo = `
      <h3>${city}</h3>
      <p>${data.weather[0].description}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
    weatherContainer.innerHTML = weatherInfo;
  } else {
    weatherContainer.innerHTML = `<p>Could not fetch weather data.</p>`;
  }
}

getWeather();

// Snake Game
let canvas = document.getElementById('snakeGame');
let ctx = canvas.getContext("2d");

let snake = [{ x: 10, y: 10 }];
let direction = "right";
let gameInterval;

function startSnakeGame() {
  clearInterval(gameInterval);
  snake = [{ x: 10, y: 10 }];
  direction = "right";
  gameInterval = setInterval(drawSnakeGame, 100);
}

function drawSnakeGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? "#FF4C00" : "#00CFFF";
    ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
  });

  let head = snake[0];
  let newHead;
  
  if (direction === "right") newHead = { x: head.x + 1, y: head.y };
  if (direction === "left") newHead = { x: head.x - 1, y: head.y };
  if (direction === "up") newHead = { x: head.x, y: head.y - 1 };
  if (direction === "down") newHead = { x: head.x, y: head.y + 1 };
  
  snake.unshift(newHead);
  snake.pop();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && direction !== "down") direction = "up";
  if (e.key === "ArrowDown" && direction !== "up") direction = "down";
  if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
  if (e.key === "ArrowRight" && direction !== "left") direction = "right";
});
