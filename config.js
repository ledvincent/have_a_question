const CONFIG = {
    title: "To the cutest person I've met this year...",
    question: "Will you be my Valentine?",
    background: "background.png",
    
    // CHAOS SETTINGS: How many images pop up per click?
    numPopups: 30, 

    // Just the filenames, the script will handle the "images/" folder
    sadImages: [
        "sad1.png",
        "sad2.png",
        "sad3.png",
    ],
    happyImages: [
        "happy1.png",
        "happy2.png",
    ],
    
    yesButtonText: "Yes",
    noButtonText: "No",

    noMessages: [
        "I think you misclicked? 🤨",
        "You're breaking my heart...",
        "I'm literally shaking.",
        "YOU WILL REGRET THIS",
    ],

    yesMessages: [
        "Wait, really?? 🥺",
        "There’s no going back…",
        "Final answer? ❤️"
    ],

    yesScreen: {
        title: "YAY! ❤️",
        description: "See you at the wedding!",
        image: "loveyou.png" // Make sure this is in your images folder
    },
    noScreen: {
        title: "You actually said no? 💔",
        description: "You stole a piece of my heart. Please return it...",
        image: "goodbye.png" // Make sure this is in your images folder
    },

    // 6. Floating Emoji/Cursor Trail Settings
    floatingEmoji: {
        enabled: true,
        emoji: "✨", 
        size: "1vw",
        color: "#ff4d6d", // Glow color for the heart
    }
};