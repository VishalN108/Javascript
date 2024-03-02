// script.js
function updateTime() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const date = now.toDateString();
    const year = now.getFullYear();

    const clockText = `${hours}:${minutes}:${seconds} | ${date} | ${year}`;
    document.getElementById('digital-clock').textContent = clockText;
}


setInterval(updateTime, 1000);
updateTime(); 
