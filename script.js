const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
txt = document.querySelector(".txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    //spliting user input character, reversing them
    //and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    txt.style.display = "block";
    if(filterInput != reverseInput) {
        return txt.innerHTML = `No <span> '${txtInput.value}' </span> is not Palindrome`;
    }
    return txt.innerHTML = `Yes <span> '${txtInput.value}' </span> is a Palindrome`;
});

txtInput.addEventListener("keyup", () => {
    //removing spaces and all special character from entered input
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    txt.style.display = "none";
    checkBtn.classList.remove("active");
})