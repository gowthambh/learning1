document.addEventListener("DOMContentLoaded", function () {
    const participants = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Harry"];

    const matchContainer = document.getElementById("match-container");

    // Shuffle the participants array
    const shuffledParticipants = [...participants].sort(() => Math.random() - 0.5);

    // Display the Secret Santa match
    const secretSantaMatch = shuffledParticipants.reduce((matchObj, participant, index) => {
        matchObj[participant] = shuffledParticipants[(index + 1) % shuffledParticipants.length];
        return matchObj;
    }, {});

    Object.keys(secretSantaMatch).forEach((participant) => {
        const matchText = document.createElement("p");
        matchText.classList.add("secret-santa-match");
        matchText.textContent = `${participant} -> ${secretSantaMatch[participant]}`;
        matchContainer.appendChild(matchText);
    });
});
