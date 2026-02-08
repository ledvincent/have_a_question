let noCount = 0;
let yesCount = 0;

window.onload = () => {
    renderMainScreen();
};

function renderMainScreen() {
    document.getElementById('bg-image').style.backgroundImage = `url('images/${CONFIG.background}')`;
    document.getElementById('interactive-content').innerHTML = `
        <h1 id="main-text">${CONFIG.title} <br> ${CONFIG.question}</h1>
        <div class="btn-container">
            <button id="leftBtn" class="btn-pink" onclick="handleYes()">${CONFIG.yesButtonText}</button>
            <button id="rightBtn" class="btn-white" onclick="handleNo()">${CONFIG.noButtonText}</button>
        </div>
    `;
}

function handleNo() {
    const mainText = document.getElementById('main-text');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    if (noCount < CONFIG.noMessages.length) {
        mainText.innerText = CONFIG.noMessages[noCount];
        const progress = (noCount + 1) / CONFIG.noMessages.length;
        rightBtn.style.transform = `scale(${1 - progress * 0.75})`;
        document.getElementById('bg-image').style.filter = `grayscale(${progress * 100}%)`;

        leftBtn.innerText = "← Go Back";
        leftBtn.className = "btn-back";
        leftBtn.onclick = resetEverything;

        spawnPopups(CONFIG.sadImages);
        noCount++;
    } else {
        showFinalNoScreen();
    }
}

function handleYes() {
    const mainText = document.getElementById('main-text');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    if (yesCount < CONFIG.yesMessages.length) {
        mainText.innerText = CONFIG.yesMessages[yesCount];
        leftBtn.style.transform = `scale(${1 + (yesCount + 1) * 0.3})`;
        
        rightBtn.innerText = "← Go Back";
        rightBtn.className = "btn-back";
        rightBtn.onclick = resetEverything;

        spawnPopups(CONFIG.happyImages);
        yesCount++;
    } else {
        showFinalYesScreen();
    }
}

function showFinalYesScreen() {
    startRain("❤️");
    document.getElementById('interactive-content').innerHTML = `
        <h1>${CONFIG.yesScreen.title}</h1>
        <p class="description">${CONFIG.yesScreen.description}</p>
        <img src="images/${CONFIG.yesScreen.image}" class="loveyou-img">
        <button class="btn-back" onclick="resetEverything()" style="margin-top: 10px;">Back to Start</button>
    `;
}

function showFinalNoScreen() {
    startRain("💧");
    document.getElementById('interactive-content').innerHTML = `
        <h1>${CONFIG.noScreen.title}</h1>
        <p class="description">${CONFIG.noScreen.description}</p>
        <img src="images/${CONFIG.noScreen.image}" class="loveyou-img">
        <button class="btn-back" onclick="resetEverything()" style="margin-top: 10px;">Try Again?</button>
    `;
}

function spawnPopups(imgArray) {
    for (let i = 0; i < CONFIG.numPopups; i++) {
        const img = document.createElement('img');
        // Added 'images/' folder prefix here
        img.src = `images/${imgArray[Math.floor(Math.random() * imgArray.length)]}`;
        img.className = 'temp-img';
        img.style.left = Math.random() * (window.innerWidth - 120) + 'px';
        img.style.top = Math.random() * (window.innerHeight - 120) + 'px';
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 1300); 
    }
}

function resetEverything() {
    noCount = 0;
    yesCount = 0;
    document.getElementById('bg-image').style.filter = "grayscale(0%)";
    renderMainScreen();
}

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

// HEART TRAIL LOGIC - Only one listener now!
document.addEventListener('mousemove', function(e) {
    if (!CONFIG.floatingEmoji.enabled) return;

    const heart = document.createElement('div');
    heart.className = 'cursor-trail';
    heart.innerHTML = CONFIG.floatingEmoji.emoji;
    
    // Set size and glow from config
    heart.style.setProperty('--size', CONFIG.floatingEmoji.size);
    heart.style.textShadow = `0 0 10px ${CONFIG.floatingEmoji.color}`;

    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1200);
});