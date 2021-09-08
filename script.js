const error = document.querySelector(".error");
const input = document.querySelector("input");
const submit = document.querySelector(".submit");
const btn = document.querySelector(".btn");
const warning = document.querySelector(".warning");
const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
document.querySelector(".btn").addEventListener("click", () => {
    if (!regex.test(input.value)) {
        error.classList.add("visible");
        submit.style.borderColor = "red";
        btn.style.boxShadow = "0 7px 2px -2px rgba(0,0,0,0.4)";
        btn.style.filter = "brightness(2.2)";
        warning.style.display = "block";
    } else {
        error.classList.remove("visible");
        submit.style.border = " 1px solid hsl(0, 36%, 70%)";
        btn.style.filter = "brightness(2)";
        warning.style.display = "none";
    }
});
