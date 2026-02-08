const CONFIG = {
    title: "To the cutest person I've met this year...",
    question: "Will you be my Valentine?",
    background: "background.png",
    
    // CHAOS SETTINGS: How many images pop up per click?
    numPopups: 30, 

    sadImages: [
        "images/sad1.png",
        "images/sad2.png",
        "images/sad3.png",
    ],
    happyImages: [
        "images/happy1.png",
        "images/happy2.png",
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
        image: "loveyou.png"
    },
    noScreen: {
        title: "You actually said no? 💔",
        description: "You stole a piece of my heart. Please return it...",
        image: "goodbye.png"
    },

    // 6. Floating Emoji/Cursor Trail Settings
    floatingEmoji: {
        enabled: true,
        emoji: "❤️", // Can be any emoji like ✨, ⭐, or 🌸
        size: "1.2vw", // Proportional size based on screen width
    }
};