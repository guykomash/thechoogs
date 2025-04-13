document.addEventListener("DOMContentLoaded", () => {
    const sidePanel = document.querySelector(".side-panel");
    const toggleButton = document.querySelector(".toggle-side-panel");
    const closeButton = document.querySelector(".close-panel");
  
    toggleButton.addEventListener("click", () => {
      sidePanel.classList.add("open");
    });
  
    closeButton.addEventListener("click", () => {
      sidePanel.classList.remove("open");
    });
  });