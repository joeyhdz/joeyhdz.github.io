// Add an event listener to the input field for keypress events
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    displayMessage(userInput, "user-message");

    document.getElementById("user-input").value = "";

    fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        displayMessage(data.response, "bot-message");
    })
    .catch(error => {
        console.error("Error:", error);
        displayMessage("Sorry, something went wrong. Please try again later.", "bot-message");
    });
}

function displayMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;

    // Detect if the message contains code
    const isCodeBlock = message.includes("```") || message.includes("<code>");

    if (isCodeBlock) {
        // Create a code block
        const codeElement = document.createElement("pre");
        codeElement.className = "code-block";

        // Sanitize and remove the formatting markers
        const cleanedMessage = message
            .replace(/```/g, "")
            .replace(/<code>/g, "")
            .replace(/<\/code>/g, "");

        codeElement.textContent = cleanedMessage;
        messageElement.appendChild(codeElement);
    } else {
        // Display as plain text (basic HTML handling)
        messageElement.textContent = message;
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
