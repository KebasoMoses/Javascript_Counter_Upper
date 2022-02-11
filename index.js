
// Count feature JS
let count = 0
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")
console.log(saveEl)


function increment(){
    count += 1
    countEl.textContent = count
}

// Save element feature JS


function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}


// Reset Button JS

function reset(){
    document.getElementById("count-el").innerText = 0
    count = 0
    document.getElementById("save-el").innerText = "Previous Entries: "
}

// Decrement Function JS
function decrement(){
    count -= 1
    countEl.innerText = count
}