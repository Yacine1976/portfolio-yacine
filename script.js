console.log("JS connecté sur la vraie page ✅");

// On récupère l'élément avec l'id "welcome-message"
const welcomeElement = document.getElementById("welcome-message");

// On vérifie qu'il existe AVANT de l'utiliser
if (welcomeElement) {
    welcomeElement.textContent = "Bienvenue sur ma page de présentation !";
} else {
    console.log("⚠️ Élément #welcome-message introuvable");
}
