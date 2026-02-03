let noStage = 0;
let yesStage = 0;

// Image Arrays
const sadImages = ['images/sad1.png', 'images/sad2.png', 'images/sad3.png'];
const happyImages = ['images/happy1.png', 'images/happy2.png'];
const weddingPic = 'images/us-wedding.png'; // Your wedding joke pic

function createParticle(x, y, symbol) {
    for (let i = 0; i < 6; i++) {
        const p = document.createElement('div');
        p.innerText = symbol;
        p.className = 'particle';
        p.style.setProperty('--random-x', Math.random());
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1500);
    }
}

function handleNo() {
    noStage++;
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const mainText = document.getElementById('main-text');

    // 1. Teleport No Button
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // 2. Trigger Tear Particles
    createParticle(x + 20, y + 20, '💧');

    // 3. Scale Buttons (Yes grows, No shrinks)
    yesBtn.style.transform = `scale(${1 + (noStage * 0.4)})`;
    noBtn.style.transform = `scale(${1 - (noStage * 0.20)})`;

    // 4. Stage Progression
    if (noStage === 1) {
        mainText.innerText = "Wait, seriously? Click the other one!";
        spawnPopupImage(sadImages[0]);
    } else if (noStage === 2) {
        mainText.innerText = "Stop running away! 😤";
        spawnPopupImage(sadImages[1]);
    } else if (noStage === 3) {
        mainText.innerText = "I'm literally shaking right now...";
        noBtn.classList.add('shake-violent'); // Start shaking at stage 3
        spawnPopupImage(sadImages[2]);
    } else if (noStage >= 4) {
        // FINAL NO REVEAL
        document.getElementById('main-card').innerHTML = `
            <h1>Fine... I'll just be sad. 🥺</h1>
            <p>I guess I'll take myself on a date... and buy a cat.</p>
            <img src="${sadImages[2]}" style="width: 80%; border-radius: 15px; margin-top:15px;">
        `;
    }
}

function handleYes() {
    yesStage++;
    const yesBtn = document.getElementById('yesBtn');
    const rect = yesBtn.getBoundingClientRect();

    // Trigger Heart Particles
    createParticle(rect.left + rect.width/2, rect.top, '❤️');

    if (yesStage === 1) {
        yesBtn.innerText = "Are you sure?";
        spawnPopupImage(happyImages[0]);
    } else if (yesStage === 2) {
        yesBtn.innerText = "There's no going back...";
        spawnPopupImage(happyImages[1]);
    } else {
        // FINAL YES REVEAL
        document.getElementById('main-card').innerHTML = `
            <h1 style="color: #ff4d6d;">YAY! ❤️</h1>
            <h2>See you at the wedding!</h2>
            <img src="${weddingPic}" style="width: 100%; border-radius: 15px; margin-top: 10px;">
        `;
    }
}

function spawnPopupImage(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'temp-reaction-img';
    img.style.left = Math.random() * 70 + 'vw';
    img.style.top = Math.random() * 70 + 'vh';
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 1200);
}