let noStage = 0;
let yesStage = 0;

const sadImages = ['images/sad1.png', 'images/sad2.png', 'images/sad3.png'];
const happyImages = ['images/happy1.png', 'images/happy2.png'];
const weddingPic = 'images/us-wedding.png';

// Navigation
function startQuestion() {
    document.getElementById('intro-card').classList.add('hidden');
    document.getElementById('question-card').classList.remove('hidden');
}

function goBack() {
    noStage = 0; // Reset "No" logic if she goes back
    yesStage = 0;
    document.getElementById('question-card').classList.add('hidden');
    document.getElementById('intro-card').classList.remove('hidden');
}

function createParticle(x, y, symbol) {
    for (let i = 0; i < 8; i++) {
        const p = document.createElement('div');
        p.innerText = symbol;
        p.className = 'particle';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.setProperty('--rx', (Math.random() * 200 - 100) + 'px');
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1500);
    }
}

function handleNo() {
    noStage++;
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const mainText = document.getElementById('main-text');

    // Teleportation
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // Effects
    createParticle(x + 50, y + 20, '💧');
    
    // Spawn 3 random images everywhere
    for(let i=0; i<3; i++) {
        spawnPopupImage(sadImages[Math.floor(Math.random() * sadImages.length)]);
    }

    // Scaling
    yesBtn.style.transform = `scale(${1 + (noStage * 0.5)})`;
    noBtn.style.transform = `scale(${1 - (noStage * 0.20)})`;

    if (noStage === 1) {
        mainText.innerText = "Wait, seriously? Click the other one!";
    } else if (noStage === 2) {
        mainText.innerText = "Stop running away! 😤";
    } else if (noStage === 3) {
        mainText.innerText = "I'm literally shaking right now...";
        noBtn.classList.add('shake-violent');
    } else if (noStage >= 4) {
        document.getElementById('question-card').innerHTML = `
            <h1>Fine... I'll just go buy 12 cats. 🥺</h1>
            <p>But you're still my Valentine in my heart!</p>
            <img src="${sadImages[2]}" style="width: 80%; border-radius: 20px; margin-top:20px;">
        `;
    }
}

function handleYes() {
    yesStage++;
    const yesBtn = document.getElementById('yesBtn');
    const rect = yesBtn.getBoundingClientRect();

    createParticle(rect.left + rect.width/2, rect.top, '❤️');
    
    // Success popups
    for(let i=0; i<2; i++) {
        spawnPopupImage(happyImages[Math.floor(Math.random() * happyImages.length)]);
    }

    if (yesStage === 1) {
        yesBtn.innerText = "Are you sure?";
    } else if (yesStage === 2) {
        yesBtn.innerText = "There's no going back...";
    } else {
        document.getElementById('question-card').innerHTML = `
            <h1 style="color: #ff4d6d; font-size: 3rem;">YAY! ❤️</h1>
            <h2>See you at the wedding!</h2>
            <img src="${weddingPic}" style="width: 100%; border-radius: 20px; margin-top: 20px;">
        `;
    }
}

function spawnPopupImage(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'temp-reaction-img';
    // Random position across the ENTIRE screen
    img.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    img.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 1500);
}