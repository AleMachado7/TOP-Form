let password = document.querySelector("#pwd");
let passwordConfirmation = document.querySelector("#pwd-cnf");
let messageBox = document.createElement("p");
messageBox.textContent = "Passwords do not match!";
messageBox.style.cssText = "margin-top: 2px; color: #f33232; font-size: 16px;"

passwordConfirmation.addEventListener('keydown', () => {    
    password.value === passwordConfirmation.value ? null : passwordConfirmation.parentElement.append(messageBox);
})