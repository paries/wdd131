const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = today.getFullYear();
document.getElementById("lastModified").textContent = 'Last Modified '+document.lastModified;

