const heading = document.getElementById("heading");
const message = document.getElementById("message");
const button = document.getElementById("btn");

console.log("Project started successfully");

button.addEventListener("click", function () {
    message.innerText = "Button clicked by ayush2";
});

function showWelcomeMessage() {
    heading.innerText = "Welcome to Our Team Project";
}

showWelcomeMessage();