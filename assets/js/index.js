const inputsRegularExp = {
    "first-name": /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
    "last-name": /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
    "user-email": /^[\w.-]+@[a-z]+\..+/,
    "user-number": /^\+380\d{9}$/,
};

const inputs = document.querySelectorAll("input");
inputs.forEach((i) => i.addEventListener("input", inputHandler));
function inputHandler(e) {
    if (inputsRegularExp[e.target.name].test(e.target.value)) {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid");
    } else {
        e.target.classList.remove("valid");
        e.target.classList.add("invalid");
    }
}
