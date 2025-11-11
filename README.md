# 🎯 Number Guessing Game

A simple and interactive **Number Guessing Game** built using **HTML**, **CSS**, and **JavaScript**.  
Test your luck and logic — guess a random number between 1 and 100 within 10 attempts!

---

## 🚀 Features

- Generates a **random number** between 1 and 100 each round  
- Allows **10 attempts** per game  
- Provides **hints** after each guess (Higher or Lower)  
- Displays all **previous guesses**  
- Announces **win or game over**  
- Includes a **"Start New Game"** button to reset and play again  

---

## 🕹️ How to Play

1. Enter a number between **1 and 100** in the input box.  
2. Click **Submit guess**.  
3. You’ll get feedback:
   - 📈 “Try a Higher number” if your guess is too low  
   - 📉 “Try a Lower number” if your guess is too high  
   - 🎉 “Congratulations!” if you guess correctly  
4. You have **10 chances** — use them wisely!  
5. Click **Start New Game** to play again.

---

## 💻 Technologies Used

- **HTML5** – Structure of the webpage  
- **CSS3 / Tailwind (optional)** – Styling and layout  
- **JavaScript (ES6)** – Game logic and interactivity  

---

## 📁 Project Structure

number-guessing-game/
│
├── index.html # Main HTML file
├── style.css # Custom styling
└── script.js # JavaScript game logic

## ⚙️ How to Run

1. **Clone this repository:**
   ```bash
   git clone https://github.com/notVivekG/number-guessing-game.git
   ```

2. **Navigate into the project folder**:

    cd number-guessing-game

3. Open **index.html** in your browser.


## 🧠 Game Logic Overview

- A random number between 1–100 is generated at the start.

- Each valid guess increases your attempt count.

- After each guess:

- Feedback is displayed.

- Remaining attempts are updated.

- When you win or run out of attempts, the input disables and a New Game button appears.

**Example Gameplay**

Enter a guess: 45
📈 Try a Higher number.
Guesses Remaining: 9

Enter a guess: 67
📉 Try a Lower number.
Guesses Remaining: 8

Enter a guess: 52
🎉 Congratulations! Your guess 52 was correct!

⭐ *If you like this project, consider giving it a star on GitHub!*