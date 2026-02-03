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

    leftBtn.innerText = "← Go Back";
    leftBtn.className = "btn-back";
    leftBtn.onclick = resetEverything;

    if (noCount === 1) {
        mainText.innerText = "I think you misclicked? 🤨";
        rightBtn.style.transform = "scale(0.8)";
    } 
    else if (noCount === 2) {
        mainText.innerText = "You're breaking my heart...";
        rightBtn.style.transform = "scale(0.6)";
    } 
    else if (noCount === 3) {
        mainText.innerText = "I'm literally shaking.";
        rightBtn.classList.add('shake');
        rightBtn.style.transform = "scale(0.4)";
    } 
    else if (noCount === 4) {
        mainText.innerText = "YOU WILL REGRET THIS";
        rightBtn.style.opacity = "0.4";
        rightBtn.style.transform = "scale(0.2)";
    } 
    else {
        document.getElementById('interactive-content').innerHTML = `
            <h1>Fine... 🥺</h1>
            <p style="margin: 20px 0; font-size: 1.5rem;">I guess I'll take my chocolate and go home.</p>
            <img src="${sadImages[2]}" style="width: 80%; border-radius: 20px;">
            <br>
            <button class="btn-back" onclick="resetEverything()" style="margin-top: 20px;">Try Again?</button>
        `;
    }

    spawnPopups(sadImages);
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
    }
    else if (yesCount === 2) {
        mainText.innerText = "There’s no going back…";
        // Fixed: Added logic to make the Yes button even bigger on step 2
        leftBtn.style.transform = "scale(1.6)";
    } 
    else {
        document.getElementById('interactive-content').innerHTML = `
            <h1 style="color: #ff4d6d; font-size: 3.5rem;">YAY! ❤️</h1>
            <h2 style="margin-bottom: 15px; font-size: 2rem;">See you at the wedding!</h2>
            <img src="${weddingPic}" style="width: 90%; border-radius: 20px;">
            <br>
            <button class="btn-back" onclick="resetEverything()" style="margin-top: 20px;">Back to Start</button>
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
    // Increased i < 10 for more images
    for (let i = 0; i < 10; i++) {
        const img = document.createElement('img');
        img.src = imgArray[Math.floor(Math.random() * imgArray.length)];
        img.className = 'temp-img';
        img.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        img.style.top = Math.random() * (window.innerHeight - 200) + 'px';
        document.body.appendChild(img);
        // Timeout matches the 3s CSS animation
        setTimeout(() => img.remove(), 3000);
    }
}