import calculate from "./calculate.js"
import cotyToClipBoard from "./copyToClipBoard.js"
import { handleButtonPress, handleClearButton, handleType} from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"


document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById("clear").addEventListener("click", handleClearButton)
document.getElementById('input').addEventListener("keydown", handleType)
document.getElementById("equal").addEventListener("click", calculate)
document.getElementById("copyToClipboard").addEventListener("click", cotyToClipBoard )
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher )