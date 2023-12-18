document.addEventListener("DOMContentLoaded", function () {
    const gifts = ["🎁", "🎄", "🧦", "🔔", "🕰", "🍬", "🍭", "🎅"];

    const gameContainer = document.getElementById("game-container");

    // Shuffle the gifts array
    const shuffledGifts = [...gifts].sort(() => Math.random() - 0.5);

    // Create gift boxes
    shuffledGifts.forEach((gift, index) => {
        const giftBox = document.createElement("div");
        giftBox.classList.add("gift-box");
        giftBox.dataset.gift = gift;
        giftBox.addEventListener("click", handleGiftClick);
        gameContainer.appendChild(giftBox);
    });

    function handleGiftClick(event) {
        const clickedGiftBox = event.target;
        clickedGiftBox.classList.add("hidden");
        const revealedGift = clickedGiftBox.dataset.gift;
        alert(`You got: ${revealedGift}`);
    }
});
