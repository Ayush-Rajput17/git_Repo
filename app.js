const heading = document.getElementById("heading");
const message = document.getElementById("message");
const button = document.getElementById("btn");

console.log("Project started successfully");

button.addEventListener("click", function () {
    message.innerText = "Button clicked by  2653562776 Sachin!";
});

function showWelcomeMessage() {
    heading.innerText = "Welcome to Our Team Project";
}

showWelcomeMessage();