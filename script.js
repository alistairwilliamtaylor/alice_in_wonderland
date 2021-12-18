// locate elements in the document and assign them to variables
const smallerButton = document.querySelector(".smaller")
const largerButton = document.querySelector(".larger")
const aliceText = document.querySelector("#alice")

// add eventListeners to things that will be clicked on
smallerButton.addEventListener("click", makeAliceSmaller)
largerButton.addEventListener("click", makeAliceLarger)


// define the functions that will be called by the eventListeners when the buttons are clicked
function makeAliceSmaller() {
  aliceText.classList.add("small")
  aliceText.classList.remove("big")
  aliceText.textContent = "Alice is tiny now!"
}

function makeAliceLarger() {
  aliceText.classList.add("big")
  aliceText.classList.remove("small")
  aliceText.textContent = "Alice is ENORMOUS now"
}


// USING THE EVENT OBJECT AND CONDITIONALS

// function changeAliceSize(event) {  
//   if (event.target.className === "larger") {
//     aliceText.textContent = "Alice is large now"
//   } else if (event.target.className === "smaller") {
//     aliceText.textContent = "Alice is small now"
//   }
// }

// smallerButton.addEventListener("click", changeAliceSize)
// largerButton.addEventListener("click", changeAliceSize)