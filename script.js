// Keep track of button clicks
let noCount = 0;
let yesCount = 0;

// Load the initial screen when the page opens
window.onload = () => {
    renderMainScreen();
};

// Function to set up the main question screen
function renderMainScreen() {
    // Set background from config
    document.getElementById('bg-image').style.backgroundImage = `url('images/${CONFIG.background}')`;
    
    // Create the main card content
    document.getElementById('interactive-content').innerHTML = `
        <h1 id="main-text">${CONFIG.title} <br> ${CONFIG.question}</h1>
        <div class="btn-container">
            <button id="leftBtn" class="btn-pink" onclick="handleYes()">${CONFIG.yesButtonText}</button>
            <button id="rightBtn" class="btn-white" onclick="handleNo()">${CONFIG.noButtonText}</button>
        </div>
    `;
}

// Handle clicking the "No" button
function handleNo() {
    const mainText = document.getElementById('main-text');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    if (noCount < CONFIG.noMessages.length) {
        // Change text and shrink the button
        mainText.innerText = CONFIG.noMessages[noCount];
        const progress = (noCount + 1) / CONFIG.noMessages.length;
        rightBtn.style.transform = `scale(${1 - progress * 0.75})`;
        
        // Fade the background to grayscale
        document.getElementById('bg-image').style.filter = `grayscale(${progress * 100}%)`;

        // Turn the Yes button into a "Back" button
        leftBtn.innerText = "← Go Back";
        leftBtn.className = "btn-back";
        leftBtn.onclick = resetEverything;

        spawnPopups(CONFIG.sadImages);
        noCount++;
    } else {
        showFinalNoScreen();
    }
}

// Handle clicking the "Yes" button
function handleYes() {
    const mainText = document.getElementById('main-text');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    if (yesCount < CONFIG.yesMessages.length) {
        // Change text and grow the Yes button
        mainText.innerText = CONFIG.yesMessages[yesCount];
        leftBtn.style.transform = `scale(${1 + (yesCount + 1) * 0.3})`;
        
        // Turn the No button into a "Back" button
        rightBtn.innerText = "← Go Back";
        rightBtn.className = "btn-back";
        rightBtn.onclick = resetEverything;

        spawnPopups(CONFIG.happyImages);
        yesCount++;
    } else {
        showFinalYesScreen();
    }
}

// Display the final success screen
function showFinalYesScreen() {
    startRain("❤️");
    document.getElementById('interactive-content').innerHTML = `
        <h1>${CONFIG.yesScreen.title}</h1>
        <p class="description">${CONFIG.yesScreen.description}</p>
        <img src="images/${CONFIG.yesScreen.image}" class="loveyou-img">
        <button class="btn-back" onclick="resetEverything()" style="margin-top: 10px;">Back to Start</button>
    `;
}

// Display the final "rejection" screen
function showFinalNoScreen() {
    startRain("💧");
    document.getElementById('interactive-content').innerHTML = `
        <h1>${CONFIG.noScreen.title}</h1>
        <p class="description">${CONFIG.noScreen.description}</p>
        <img src="images/${CONFIG.noScreen.image}" class="loveyou-img">
        <button class="btn-back" onclick="resetEverything()" style="margin-top: 10px;">Try Again?</button>
    `;
}

// Chaos Mode: Spawn random images on click
function spawnPopups(imgArray) {
    for (let i = 0; i < CONFIG.numPopups; i++) {
        const img = document.createElement('img');
        img.src = `images/${imgArray[Math.floor(Math.random() * imgArray.length)]}`;
        img.className = 'temp-img';
        
        const size = CONFIG.popupSize || 100; 
        img.style.width = size + 'px';
        
        // Randomize position within screen bounds
        img.style.left = Math.random() * (window.innerWidth - size) + 'px';
        img.style.top = Math.random() * (window.innerHeight - size) + 'px';
        
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 1300); 
    }
}

// Reset the app to its original state
function resetEverything() {
    noCount = 0;
    yesCount = 0;
    document.getElementById('bg-image').style.filter = "grayscale(0%)";
    renderMainScreen();
}

// Background Effect: Emojis falling like rain
function startRain(emoji) {
    const amount = 50; 
    for (let i = 0; i < amount; i++) {
        setTimeout(() => {
            const drop = document.createElement("div");
            drop.className = "drop";
            drop.innerText = emoji;
            drop.style.left = Math.random() * 100 + "vw";
            drop.style.fontSize = (Math.random() * 20 + 20) + "px";
            drop.style.animationDuration = (Math.random() * 2 + 2) + "s";
            document.body.appendChild(drop);
            setTimeout(() => drop.remove(), 4000);
        }, i * 100);
    }
}

// Cursor Effect: Floating trail as mouse moves
document.addEventListener('mousemove', function(e) {
    if (!CONFIG.floatingEmoji || !CONFIG.floatingEmoji.enabled) return;

    const heart = document.createElement('div');
    heart.className = 'cursor-trail';
    heart.innerHTML = CONFIG.floatingEmoji.emoji;
    
    // Set custom size and glow color from config
    heart.style.setProperty('--size', CONFIG.floatingEmoji.size);
    if (CONFIG.floatingEmoji.color) {
        heart.style.textShadow = `0 0 10px ${CONFIG.floatingEmoji.color}`;
    }

    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
});