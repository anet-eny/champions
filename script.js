import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://champions-788f0-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, "endorsements")

const inputFieldEl = document.getElementById("input-field")
const buttonEl = document.getElementById("btn")
const endorsementsListEl = document.getElementById("endorsements-list")

buttonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(endorsementsInDB, inputValue)
    console.log(inputValue)
    clearInputField()
    endorsementsListEl.innerHTML += `<li>${inputValue}</li>`


})

function clearInputField() {
    inputFieldEl.value = ""
}