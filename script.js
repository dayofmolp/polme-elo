// Toggle Dark Mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Tic-Tac-Toe Game Logic
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

function handleClick(index) {
  if (!gameOver && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementById(`cell-${index}`).textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6] // Diagonal
  ];

  winPatterns.forEach(pattern => {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      alert(`${board[a]} Wins!`);
    }
  });

  if (!board.includes("") && !gameOver) {
    alert("It's a Draw!");
  }
}

function renderBoard() {
  let boardHTML = "";
  for (let i = 0; i < board.length; i++) {
    boardHTML += `<div id="cell-${i}" onclick="handleClick(${i})">${board[i]}</div>`;
  }
  document.getElementById('tic-tac-toe').innerHTML = boardHTML;
}

renderBoard();

// Grocery API - Simple Cart System
const groceryItems = ["Apples", "Bananas", "Oranges", "Bread", "Milk"];
let cart = [];

function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

function addItemToCart(item) {
  cart.push(item);
  updateCart();
}

const groceryList = document.querySelector(".grocery-list");
groceryItems.forEach(item => {
  const button = document.createElement("button");
  button.textContent = item;
  button.onclick = () => addItemToCart(item);
  groceryList.appendChild(button);
});

// Love Section - Hearts Animation
const heartsContainer = document.getElementById("hearts");

function generateHearts() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heartsContainer.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 2000);
}

setInterval(generateHearts, 300);

