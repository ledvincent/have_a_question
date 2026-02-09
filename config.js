// Main configuration for the website
const CONFIG = {
    title: "To the cutest person I've met this year...", // The very first line
    question: "Will you be my Valentine?", // The second line (question)
    background: "background.png", // Filename of your background image
    
    // CHAOS SETTINGS: How many images pop up per click?
    numPopups: 20,
    popupSize: 80, // New: size in pixels (e.g., 150 means 150px wide) 

    // Filenames for images (make sure they are in the "images/" folder)
    sadImages: [
        "sad1.png",
        "sad2.png",
        "sad3.png",
    ],
    happyImages: [
        "happy1.png",
        "happy2.png",
    ],
    
    // Button text
    yesButtonText: "Yes",
    noButtonText: "No",

    // Messages that appear when clicking "No"
    noMessages: [
        "I think you misclicked? 🤨",
        "You're breaking my heart...",
        "I'm literally shaking.",
        "YOU WILL REGRET THIS",
    ],

    // Messages that appear when clicking "Yes" (before the final screen)
    yesMessages: [
        "Wait, really?? 🥺",
        "There’s no going back…",
        "Final answer? ❤️"
    ],

    // Final screen content if they say Yes
    yesScreen: {
        title: "YAY! ❤️",
        description: "See you at the wedding!",
        image: "loveyou.png" 
    },
    
    // Final screen content if they say No
    noScreen: {
        title: "You actually said no? 💔",
        description: "You stole a piece of my heart. Please return it...",
        image: "goodbye.png" 
    },

    // Cursor Trail/Floating Emoji Settings
    floatingEmoji: {
        enabled: true,
        emoji: "✨", 
        size: "1.2vw",
        color: "#ff4d6d", // Glow color
    }
};
