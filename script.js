let noCount = 0;
let yesCount = 0;

const sadImages = ['images/sad1.png', 'images/sad2.png', 'images/sad3.png'];
const happyImages = ['images/happy1.png', 'images/happy2.png'];
const weddingPic = 'images/us-wedding.png';

function handleNo() {
    noCount++;
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const mainText = document.getElementById('main-text');

    // 1. Desperation Stages
    if (noCount === 1) {
        mainText.innerText = "Wait, seriously? Click Yes! 🤨";
        noBtn.style.transform = "scale(0.8)";
    } else if (noCount === 2) {
        mainText.innerText = "You're breaking my heart... 💔";
        noBtn.style.transform = "scale(0.6)";
    } else if (noCount === 3) {
        mainText.innerText = "I'm literally shaking right now.";
        noBtn.classList.add('shake');
        noBtn.style.transform = "scale(0.4)";
    } else if (noCount === 4) {
        mainText.innerText = "Okay, I'm fading away now...";
        noBtn.style.opacity = "0.3";
        noBtn.style.transform = "scale(0.2)";
    } else {
        // Final "No" reveal
        document.getElementById('interactive-content').innerHTML = `
            <h1>Fine... be like that. 🥺</h1>
            <p>I'll just go buy 10 cats and be a hermit.</p>
            <img src="${sadImages[2]}" style="width: 100%; border-radius: 20px;">
        `;
    }

    // 2. Make Yes Button bigger
    yesBtn.style.transform = `scale(${1 + (noCount * 0.4)})`;

    // 3. Chaos: Spawn random sad images
    spawnPopups(sadImages);
}

function handleYes() {
    yesCount++;
    const yesBtn = document.getElementById('yesBtn');

    if (yesCount === 1) {
        yesBtn.innerText = "Wait, really??";
    } else if (yesCount === 2) {
        yesBtn.innerText = "Final answer??";
    } else {
        // Final "Yes" reveal
        document.getElementById('interactive-content').innerHTML = `
            <h1 style="color: #ff4d6d; font-size: 3rem;">YAY! ❤️</h1>
            <h2>See you at the wedding!</h2>
            <img src="${weddingPic}" style="width: 100%; border-radius: 20px;">
        `;
    }
    
    spawnPopups(happyImages);
}

function spawnPopups(imgArray) {
    for (let i = 0; i < 3; i++) {
        const img = document.createElement('img');
        img.src = imgArray[Math.floor(Math.random() * imgArray.length)];
        img.className = 'temp-img';
        img.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        img.style.top = Math.random() * (window.innerHeight - 200) + 'px';
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 1500);
    }
}

function resetPage() {
    location.reload(); // Simplest way to restart from scratch
}
