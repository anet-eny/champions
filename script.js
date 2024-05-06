import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    clearInputFieldEl()
})

onValue(endorsementsInDB, function(snapshot) {
    let itemsArray = Object.values(snapshot.val())

    clearEndorsementsListEl()
    
    for(let i = 0; i < itemsArray.length; i++) {
        appendItemToEndorsementsListEl(itemsArray[i])
    }
})

function clearEndorsementsListEl() {
    endorsementsListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToEndorsementsListEl(item) {
    endorsementsListEl.innerHTML += `<li>${item}</li>`
}