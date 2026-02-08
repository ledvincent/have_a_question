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
        
        // Calculate shrinking: Button goes from 1.0 to 0.2 scale across all messages
        const progress = noCount / CONFIG.noMessages.length;
        const newScale = 1 - (progress * 0.8); 
        rightBtn.style.transform = `scale(${newScale})`;
        
        // Make the background grayscale based on progress
        document.getElementById('bg-image').style.filter = `grayscale(${progress * 100}%)`;

        // Switch Left Button to "Back" functionality
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
        
        // Calculate growth: Button grows by 20% each step
        const newScale = 1 + (yesCount * 0.3);
        leftBtn.style.transform = `scale(${newScale})`;

        // Switch Right Button to "Back" functionality
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
        <h1 class="fade-in">${CONFIG.yesScreen.title}</h1>
        <p class="description">${CONFIG.yesScreen.description}</p>
        <img src="images/${CONFIG.yesScreen.image}" class="loveyou-img">
        <br>
        <button class="btn-back" onclick="resetEverything()">Back to Start</button>
    `;
}

function showFinalNoScreen() {
    startRain("💧");
    document.getElementById('interactive-content').innerHTML = `
        <h1 class="fade-in">${CONFIG.noScreen.title}</h1>
        <p class="description">${CONFIG.noScreen.description}</p>
        <img src="images/${CONFIG.noScreen.image}" class="loveyou-img">
        <br>
        <button class="btn-back" onclick="resetEverything()">Try Again?</button>
    `;
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

function spawnPopups(imgArray) {
    for (let i = 0; i < 10; i++) {
        const img = document.createElement('img');
        img.src = imgArray[Math.floor(Math.random() * imgArray.length)];
        img.className = 'temp-img';
        img.style.left = Math.random() * (window.innerWidth - 120) + 'px';
        img.style.top = Math.random() * (window.innerHeight - 120) + 'px';
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 1300); 
    }
}