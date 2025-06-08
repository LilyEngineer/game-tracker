# 🎮 Game Tracker - Vanilla JS App

A cute and colorful **Video Game Progress Tracker** app built using **only HTML, CSS, and vanilla JavaScript**. Keep track of your video game backlog, games you're currently playing, and completed games — all in a pastel lilac, pink, and blue aesthetic with adorable emojis and fun fonts!
![App Sceenshot](https://github.com/LilyEngineer/game-tracker/blob/1645151f7a8a37f86e26882c4ae3edc923a0519e/Screenshot%202025-06-07%20185142.png)
---

## Features

- Add new games to your backlog 🎲
- Move games between **Backlog**, **Playing**, and **Completed** stages with easy buttons 🎮➡️🏁
- Delete games from any stage ❌
- Reset the entire tracker with a confirmation 🔄
- Data is saved locally in your browser using `localStorage` so your progress is saved even after refresh
- Cute pastel colors and rounded styling with playful fonts and emojis to brighten your day 🌸💖

---

## How to Use

1. Open the app in your browser (open `index.html`).
2. Enter the name of a game in the input box and click **Add Game 💾**.
3. Your game will appear in the **Backlog** column.
4. Use the buttons next to each game to move it through the stages:
   - 🎮 Move from Backlog to Playing
   - ⬅️ Move back from Playing to Backlog
   - 🏁 Move from Playing to Completed
   - 🔁 Move from Completed back to Backlog
   - ❌ Delete a game from any stage
5. Use **Reset Tracker 🔄** button to clear all your progress (with confirmation).

---

## File Structure (All-in-One)

This is a single HTML file that includes embedded CSS and JavaScript for ease of use:

- `index.html` — Contains the entire app markup, styling, and logic in one file.

---

## Technologies Used

- HTML5
- CSS3 (with Google Fonts: *Cherry Bomb One* and *Quicksand*)
- Vanilla JavaScript (ES6+)
- Browser `localStorage` API for data persistence

---

## Customization

- Change the colors in the CSS to suit your personal taste.
- Add additional stages or functionality by modifying the JavaScript.
- Enhance styling with animations or transitions.
- Replace emojis with icons or images if you prefer.

---

## Testing

A simple **test file** is included to verify the functionality of this app. It checks if:

- Adding a new game works correctly
- Moving a game between stages (Backlog, Playing, Completed) works
- Deleting a game functions as expected
- The reset tracker button clears all data properly

### Instructions for Running the Tests

1. Open `index.html` in your browser.
2. Save the test file as `test.js` in the same directory.
3. Open the **Developer Tools** (`F12` or `Ctrl+Shift+I`) in your browser.
4. Go to the **Console** tab.
5. Run the following code in the console to load the test file:

```javascript
var script = document.createElement('script');
script.src = 'test.js';
document.head.appendChild(script);

License
This project is free to use and modify for personal projects.

Enjoy tracking your games with a sprinkle of pastel magic! 🌈✨

Made with 💜 by a fellow gamer
