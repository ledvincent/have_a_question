let noStage = 0;
let yesStage = 0;

const sadImages = ['images/sad1.png', 'images/sad2.png', 'images/sad3.png'];
const happyImages = ['images/happy1.png', 'images/happy2.png'];
const weddingPic = 'images/us-wedding.png';

function resetProject() {
    noStage = 0;
    yesStage = 0;
    const content = document.getElementById('dynamic-content');
    content.innerHTML = `
        <h1 id="main-text">To the cutest person I've met this year... <br> Will you be my Valentine?</h1>
        <div class="btn-container">
            <button id="yesBtn" onclick="handleYes()">Yes</button>
            <button id="noBtn" onclick="handleNo()">No</button>
        </div>
    `;
}

function createParticle(x, y, symbol, type) {
    for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.innerText = symbol;
        p.className = 'particle';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        const yDir = type === 'tear' ? 200 : -200;
        p.style.setProperty('--ty', (Math.random() * yDir) + 'px');
        p.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1200);
    }
}

function handleNo() {
    noStage++;
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const mainText = document.getElementById('main-text');

    // 1. Move No Button instantly after click
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // 2. Tear Particles
    createParticle(x + 50, y + 20, '💧', 'tear');

    // 3. Spawn 4 sad images everywhere on screen
    for (let i = 0; i < 4; i++) {
        spawnPopupImage(sadImages[Math.floor(Math.random() * sadImages.length)]);
    }

    // 4. Update UI Scaling
    yesBtn.style.transform = `scale(${1 + (noStage * 0.6)})`;
    noBtn.style.transform = `scale(${1 - (noStage * 0.15)})`;

    // 5. Progression Text
    if (noStage === 1) mainText.innerText = "Wait, are you sure? 🤨";
    if (noStage === 2) mainText.innerText = "Please stop clicking that! 😤";
    if (noStage === 3) {
        mainText.innerText = "Okay, now I'm actually crying...";
        noBtn.classList.add('shake-violent');
    }

    if (noStage >= 5) {
        document.getElementById('dynamic-content').innerHTML = `
            <h1>Fine... I'll just go buy 12 cats. 🥺</h1>
            <p>You broke my heart, but I still love you.</p>
            <img src="${sadImages[2]}" style="width: 100%; border-radius: 20px; margin-top: 15px;">
        `;
    }
}

function handleYes() {
    yesStage++;
    const yesBtn = document.getElementById('yesBtn');
    const rect = yesBtn.getBoundingClientRect();

    createParticle(rect.left + rect.width/2, rect.top, '❤️', 'heart');

    if (yesStage === 1) {
        yesBtn.innerText = "Wait, really??";
    } else if (yesStage === 2) {
        yesBtn.innerText = "Final answer??";
    } else {
        document.getElementById('dynamic-content').innerHTML = `
            <h1 style="color: #ff4d6d; font-size: 3rem;">YAY! ❤️</h1>
            <h2>See you at the wedding!</h2>
            <img src="${weddingPic}" style="width: 100%; border-radius: 20px; margin-top: 15px;">
        `;
    }
}

function spawnPopupImage(src) {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'temp-reaction-img';
    img.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    img.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 1500);
}