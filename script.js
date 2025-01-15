 // List of images and their answers
 const images = [
    { url: "M1.png", answers: ["palak"] },
    { url: "G2.jpg", answers: ["8","7","6"] },
    { url: "M3.png", answers: ["silky/muskan","muskan/silky"] },
    { url: "G11.jpg", answers: ["2","1","0.5"] },
    { url: "G1.jpg", answers: ["2","1","3"] },
    { url: "M2.png", answers: ["papa/rakesh mama","rakesh mama/papa"] },
    { url: "G8.jpg", answers: ["8","7","5"] },
    { url: "G3.jpg", answers: ["5","4","6"] },   
    { url: "G5.jpg", answers: ["9","8","10"] },
    { url: "G6.jpg", answers: ["6","5","7"] },
    { url: "G7.jpg", answers: ["0.5","1"] },
    { url: "M4.png", answers: ["raju mama/babu mama","babu mama/raju mama"] },
    { url: "G9.jpg", answers: ["6","5","4"] },
    { url: "G10.jpg", answers: ["7","6","5"] },
    { url: "G4.jpg", answers: ["6","5","7"] },
    { url: "G12.jpg", answers: ["10","9","8"] },
    { url: "G13.jpg", answers: ["7","8","6"] }
];

let currentImage = null;
let score = 0;
let timeLeft = 60; // Game duration in seconds
let timerInterval;

// Function to load a random image
function loadImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    currentImage = images[randomIndex];
    document.getElementById('image').src = currentImage.url;
}

// Function to check the user's guess
function submitGuess() {
    const userGuess = document.getElementById('guess').value.trim().toLowerCase();
    const resultElement = document.getElementById('result');

    // Check if the user's guess matches any valid answer
    if (currentImage.answers.includes(userGuess)) {
        score++;
        resultElement.textContent = "Correct! 🎉";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
    document.getElementById('score').textContent = score;
    document.getElementById('guess').value = "";
    loadImage();
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// Function to trigger the gift box opening animation at the end of the game
function showGiftBox() {
    const giftBox = document.getElementById('birthday-gift');
    const message = document.querySelector('.wishes');
    

    // Show the gift box and start the animation
    giftBox.style.display = 'block';
    message.classList.add('opened');
}

// Function to end the game
function endGame() {
    document.getElementById('result').textContent = `Game Over! Your final score is ${score}.`;
    document.getElementById('result').style.color = "blue";
    document.getElementById('game').style.display = "none";

     // Show the gift box when the game ends
     showGiftBox();
}

// Initialize the game
function initGame() {
    score = 0;
    timeLeft = 60;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = timeLeft;
    document.getElementById('game').style.display = "block";
    document.getElementById('result').textContent = "";
    loadImage();
    startTimer();
}

// Start the game on page load
window.onload = initGame;

  