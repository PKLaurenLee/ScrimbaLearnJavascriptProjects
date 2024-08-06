const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!",
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]",
    ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const passwordLength = 10;
const passwordElements = document.getElementsByClassName("password-button");

function generatePasswords() {
    for (const passwordEl of passwordElements) {
        passwordEl.innerHTML = getTooltipHTML() + generatePassword();
    }
}

function getTooltipHTML() {
    return "<span class=\"tooltiptext\" id=\"myTooltip\">Copy to clipboard</span>"
}

function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += randomCharacter();
    }

    return password
}

// Return random character from an array.
function randomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)]
}

// Copies password to clipboard.
function copy(button) {
    const childTooltip = button.querySelector(".tooltiptext");
    childTooltip.innerText = ""
    const password = button.innerText;
    navigator.clipboard.writeText(password);
    childTooltip.innerText = "Copied password: " + password;
}