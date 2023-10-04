export default function () {
  const main = document.querySelector("main")
  const root = document.querySelector(":root")
  const switchIcon = document.getElementById("switchIcon") 
  if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a")
      switchIcon.style.transform = "scaleX(-1)" // Espelhar horizontalmente
      main.dataset.theme = "light"
  } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      switchIcon.style.transform = "scaleX(1)" // Voltar ao normal (sem espelhar)
      
      main.dataset.theme = "dark"
  }
}


