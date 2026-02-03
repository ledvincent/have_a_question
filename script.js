let noCount = 0;
let yesCount = 0;

const sadImages = ['images/sad1.png', 'images/sad2.png', 'images/sad3.png'];
const happyImages = ['images/happy1.png', 'images/happy2.png'];
const weddingPic = 'images/us-wedding.png';

function handleNo() {
    noCount++;
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const mainText = document.getElementById('main-text');
    const bg = document.getElementById('bg-image');

    // Progressively Grayscale
    bg.style.filter = `grayscale(${noCount * 25}%)`;

    leftBtn.innerText = "← Go Back";
    leftBtn.className = "btn-back";
    leftBtn.onclick = resetEverything;

    if (noCount === 1) {
        mainText.innerText = "I think you misclicked? 🤨";
        rightBtn.style.transform = "scale(0.8)";
        spawnPopups(sadImages); // Pops on step 1
    } 
    else if (noCount === 2) {
        mainText.innerText = "You're breaking my heart...";
        rightBtn.style.transform = "scale(0.6)";
        spawnPopups(sadImages); // Pops on step 2
    } 
    else if (noCount === 3) {
        mainText.innerText = "I'm literally shaking.";
        rightBtn.classList.add('shake');
        rightBtn.style.transform = "scale(0.4)";
        spawnPopups(sadImages); // Pops on step 3
    } 
    else if (noCount === 4) {
        mainText.innerText = "YOU WILL REGRET THIS";
        rightBtn.style.opacity = "0.4";
        rightBtn.style.transform = "scale(0.2)";
        spawnPopups(sadImages); // Pops on step 4
    } 
    else {
        // FINAL NO REACHED - No popups here
        startRain("💧");
        document.getElementById('interactive-content').innerHTML = `
            <h1>Fine... 🥺</h1>
            <p style="margin: 20px 0; font-size: 1.5rem;">You stole a piece of my heart. Please return it...</p>
            <img src="${sadImages[2]}" style="width: 80%; border-radius: 20px;">
            <br>
            <button class="btn-back" onclick="resetEverything()" style="margin-top: 20px;">Try Again?</button>
        `;
    }
}

function handleYes() {
    yesCount++;
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const mainText = document.getElementById('main-text');

    rightBtn.innerText = "← Go Back";
    rightBtn.className = "btn-back";
    rightBtn.onclick = resetEverything;

    if (yesCount === 1) {
        mainText.innerText = "Wait, really?? 🥺";
        leftBtn.style.transform = "scale(1.3)";
        spawnPopups(happyImages); // Only pops on step 1
    }
    else if (yesCount === 2) {
        mainText.innerText = "There’s no going back…";
        leftBtn.style.transform = "scale(1.6)";
        spawnPopups(happyImages); // Only pops on step 2
    } 
    else {
        // FINAL YES REACHED - No popups here
        startRain("❤️");
        document.getElementById('interactive-content').innerHTML = `
            <h1 style="color: #ff4d6d; font-size: 3.5rem;">YAY! ❤️</h1>
            <h2 style="margin-bottom: 15px; font-size: 2rem;">See you at the wedding!</h2>
            <img src="${weddingPic}" style="width: 90%; border-radius: 20px;">
            <br>
            <button class="btn-back" onclick="resetEverything()" style="margin-top: 20px;">Back to Start</button>
        `;
    }
}   

// ... (startRain, resetEverything, and spawnPopups functions remain the same)

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

function resetEverything() {
    noCount = 0;
    yesCount = 0;
    document.getElementById('bg-image').style.filter = "grayscale(0%)";
    document.getElementById('interactive-content').innerHTML = `
        <h1 id="main-text">To the cutest person I've met this year... <br> Will you be my Valentine?</h1>
        <div class="btn-container">
            <button id="leftBtn" class="btn-pink" onclick="handleYes()">Yes</button>
            <button id="rightBtn" class="btn-white" onclick="handleNo()">No</button>
        </div>
    `;
}

function spawnPopups(imgArray) {
    for (let i = 0; i < 10; i++) {
        const img = document.createElement('img');
        img.src = imgArray[Math.floor(Math.random() * imgArray.length)];
        img.className = 'temp-img';
        
        // Positioning logic
        img.style.left = Math.random() * (window.innerWidth - 120) + 'px';
        img.style.top = Math.random() * (window.innerHeight - 120) + 'px';
        
        document.body.appendChild(img);
        
        // This MUST match the 1.3s (1300ms) in your CSS
        setTimeout(() => {
            img.remove();
        }, 1300); 
    }
}