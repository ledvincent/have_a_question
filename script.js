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

    // Change Yes button into a Back button
    leftBtn.innerText = "← Go Back";
    leftBtn.className = "btn-back";
    leftBtn.onclick = resetEverything;

    // Progression
    if (noCount === 1) {
        mainText.innerText = "Wait, seriously? 🤨";
        rightBtn.style.transform = "scale(0.8)";
    } else if (noCount === 2) {
        mainText.innerText = "You're breaking my heart...";
        rightBtn.style.transform = "scale(0.6)";
    } else if (noCount === 3) {
        mainText.innerText = "I'm literally shaking.";
        rightBtn.classList.add('shake');
        rightBtn.style.transform = "scale(0.4)";
    } else if (noCount >= 4) {
        // Final No Reveal
        document.getElementById('interactive-content').innerHTML = `
            <h1>Fine... 🥺</h1>
            <p style="margin:15px 0;">I guess I'll just be a hermit.</p>
            <img src="${sadImages[2]}" style="width: 100%; border-radius: 20px;">
            <button class="btn-back" onclick="resetEverything()" style="margin-top:20px;">Try Again?</button>
        `;
    }

    spawnPopups(sadImages);
}

function handleYes() {
    yesCount++;
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const mainText = document.getElementById('main-text');

    // Change No button into a Back button
    rightBtn.innerText = "← Go Back";
    rightBtn.className = "btn-back";
    rightBtn.onclick = resetEverything;

    if (yesCount === 1) {
        mainText.innerText = "Wait, really??";
        leftBtn.innerText = "Yes!!";
        leftBtn.style.transform = "scale(1.2)";
    } else {
        // Final Yes Reveal
        document.getElementById('interactive-content').innerHTML = `
            <h1 style="color: #ff4d6d;">YAY! ❤️</h1>
            <h2 style="margin:10px 0;">See you at the wedding!</h2>
            <img src="${weddingPic}" style="width: 100%; border-radius: 20px;">
            <button class="btn-back" onclick="resetEverything()" style="margin-top:20px;">Back to Start</button>
        `;
    }
    
    spawnPopups(happyImages);
}

function resetEverything() {
    noCount = 0;
    yesCount = 0;
    document.getElementById('interactive-content').innerHTML = `
        <h1 id="main-text">To the cutest person I've met this year... <br> Will you be my Valentine?</h1>
        <div class="btn-container">
            <button id="leftBtn" class="btn-pink" onclick="handleYes()">Yes</button>
            <button id="rightBtn" class="btn-white" onclick="handleNo()">No</button>
        </div>
    `;
}

function spawnPopups(imgArray) {
    for (let i = 0; i < 3; i++) {
        const img = document.createElement('img');
        img.src = imgArray[Math.floor(Math.random() * imgArray.length)];
        img.className = 'temp-img';
        img.style.left = Math.random() * (window.innerWidth - 150) + 'px';
        img.style.top = Math.random() * (window.innerHeight - 150) + 'px';
        document.body.appendChild(img);
        setTimeout(() => img.remove(), 1500);
    }
}