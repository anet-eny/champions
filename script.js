const inputFieldEl = document.getElementById("input-field")
const buttonEl = document.getElementById("btn")

buttonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    console.log(inputValue)
})