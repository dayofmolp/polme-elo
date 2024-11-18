/* General Styles */
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background: #111;
  color: white;
}

/* Header & Logo */
header {
  padding: 20px 0;
  background: #111;
  text-align: center;
}

.logo {
  font-size: 3rem;
  font-weight: 700;
  color: #FF4C00;
}

.logo-highlight {
  color: #00CFFF;
}

/* Sections */
section {
  padding: 50px 20px;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  color: #FF4C00;
  margin-bottom: 20px;
}

p {
  font-size: 1.1rem;
  color: #bbb;
  margin-bottom: 40px;
}

/* Spotify Embed */
.spotify {
  background: #222;
  animation: fadeIn 1s ease-out;
}

.spotify-player {
  max-width: 900px;
  margin: 0 auto;
  background: #333;
  border-radius: 10px;
  padding: 20px;
}

/* Snake Game */
.game {
  background: #222;
  animation: fadeIn 1s ease-out;
}

.game-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button.cta-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #FF4C00;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.cta-button:hover {
  background-color: #FF6A00;
}

canvas {
  background: #111;
  border: 2px solid #FF4C00;
}

/* Weather Widget */
.weather {
  background: #111;
  padding: 50px 20px;
  animation: fadeIn 1s ease-out;
}

.weather-container {
  max-width: 600px;
  margin: 0 auto;
  background: #222;
  padding: 30px;
  border-radius: 10px;
}

#weather-info {
  color: #fff;
  font-size: 1.2rem;
}

/* Animation */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
