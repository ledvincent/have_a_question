# 💖 Interactive Valentine's Gift Website

A highly customizable, interactive web application designed as a creative way to ask someone out. This project features a "persuasive" UI where the buttons react to the user's choices, background filters that change with the mood, and a chaotic popup system.

---

## ✨ Features

* **Persuasive Buttons:** The "No" button shrinks and the "Yes" button grows as the user interacts.
* **Dynamic Background:** The background image smoothly transitions to grayscale as the user clicks "No."
* **Chaos Mode:** Spawns random images all over the screen to add humor and personality.
* **Aesthetic Cursor:** A custom heart/emoji trail follows the mouse movement.
* **Fully Responsive:** Uses `clamp()` and `vw/vh` units to look great on any screen size.
* **Infinite Scaling:** Add as many messages or images as you want—the code handles the rest!

---

## 🚀 How to Setup

1. **Clone or Download:** Fork this repository or download the ZIP file to your computer.
2. **Add Your Images:** Place your photos in the `images/` folder. You can add **as many images as you like** for the "chaos" effects.
    * `background.png`: Your main wallpaper.
    * `sad1.png`, `sad2.png`, etc.: Images for the "No" click chaos.
    * `happy1.png`, etc.: Images for the "Yes" click celebration.
    * `loveyou.png`: The final "Yes" screen image.
3. **Configure:** Open `config.js` in a text editor to customize text and settings.
4. **Run:** Open `index.html` in any web browser to see your creation!

---

## ⚙️ How to Customize (`config.js`)

Everything you need to change is located in `config.js`. You don’t need to touch the main code; just edit the values between the quotation marks.

### 1. Text & Titles
* **`title`**: The first line your Valentine will see.
* **`question`**: The main proposal question.
* **`yesButtonText`** & **`noButtonText`**: Customize the button labels.

### 2. The Interaction (Chaos Mode)
* **`numPopups`**: Set how many images fly out per click (e.g., `30`).
* **`popupSize`**: Adjust the width of the popup images in pixels (e.g., `150`).
* **`noMessages`**: Add as many phrases as you want! The more you add, the more "steps" the user has to go through before the final screen.
* **`yesMessages`**: Just like the "No" messages, you can add multiple steps for the "Yes" path too.

### 3. Visuals & Images
* **`background`**: The filename of your main wallpaper.
* **`sadImages` & `happyImages`**: Add all your image filenames here. The script will pick from these randomly.
* **`yesScreen`**: Change the final title, description, and "victory" image.

### 4. The Cursor Trail
* **`floatingEmoji`**: 
    * `enabled`: Set to `true` or `false`.
    * `emoji`: Choose any emoji (like `❤️`, `✨`, or `🌸`) to follow the mouse.
    * `color`: Change the glow color using a Hex code (e.g., `#ff4d6d`).

---

## 🛠️ Built With

* **HTML5 & CSS3**
* **Vanilla JavaScript** (Zero dependencies!)

---

## 📜 License

This project is open-source. Feel free to use it, customize it, and share the love!
