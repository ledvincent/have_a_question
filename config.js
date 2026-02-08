const CONFIG = {
    title: "To the cutest person I've met this year...",
    question: "Will you be my Valentine?",
    background: "background.png",
    
    // Arrays for popups - Users can add 1 or 100 images here
    sadImages: [
        "images/sad1.png",
        "images/sad2.png",
        "images/sad3.png",
        "images/sad4.png", // They can keep adding
    ],
    happyImages: [
        "images/happy1.png",
        "images/happy2.png",
    ],
    
    // Button settings
    yesButtonText: "Yes",
    noButtonText: "No",

    // Dynamic No Sequence
    // The script will automatically calculate button shrinking based on this list length
    noMessages: [
        "I think you misclicked? 🤨",
        "You're breaking my heart...",
        "I'm literally shaking.",
        "YOU WILL REGRET THIS",
        "Fine... 🥺"
    ],

    // Dynamic Yes Sequence
    // The script will scale the Yes button based on how many messages are here
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
    }
};