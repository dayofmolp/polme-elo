// Snake Game Code
let snake, food, score, gameInterval;

function startSnakeGame() {
  const canvas = document.getElementById('snakeGame');
  const ctx = canvas.getContext('2d');
  const canvasSize = 300;
  const scale = 10;
  const totalCells = canvasSize / scale;

  snake = [{ x: 5, y: 5 }];
  food = { x: Math.floor(Math.random() * totalCells), y: Math.floor(Math.random() * totalCells) };
  score = 0;

  document.addEventListener('keydown', changeDirection);
  gameInterval = setInterval(updateGame, 100);

  function updateGame() {
    moveSnake();
    if (checkCollision()) {
      clearInterval(gameInterval);
      alert('Game Over! Your score: ' + score);
      return;
    }

    if (snake[0].x === food.x && snake[0].y === food.y) {
      score++;
      food = { x: Math.floor(Math.random() * totalCells), y: Math.floor(Math.random() * totalCells) };
    }

    drawCanvas();
  }

  function moveSnake() {
    const head = { ...snake[0] };

    if (direction === 'LEFT') head.x--;
    if (direction === 'RIGHT') head.x++;
    if (direction === 'UP') head.y--;
    if (direction === 'DOWN') head.y++;

    snake.unshift(head);
    snake.pop();
  }

  function drawCanvas() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = 'lime';
    snake.forEach(part => ctx.fillRect(part.x * scale, part.y * scale, scale, scale));
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * scale, food.y * scale, scale, scale);
  }

  function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= totalCells || head.y < 0 || head.y >= totalCells) return true;
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) return true;
    }
    return false;
  }

  let direction = 'RIGHT';
  function changeDirection(event) {
    if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
    if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
    if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
    if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
  }
}

// Weather Widget (using OpenWeather API)
const apiKey = 'your-api-key'; // Replace with your own OpenWeather API key
const weatherContainer = document.getElementById('weather-info');

async function getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cape%20Town&appid=${apiKey}&units=metric`);
  const data = await response.json();

  if (data.cod === 200) {
    const weatherInfo = `
      <p><strong>${data.name}</strong> - ${data.weather[0].description}</p>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
    weatherContainer.innerHTML = weatherInfo;
  } else {
    weatherContainer.innerHTML = `<p>Could not fetch weather data.</p>`;
  }
}

getWeather();
