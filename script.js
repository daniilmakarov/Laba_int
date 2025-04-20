let tg = window.Telegram.WebApp;

function sendData(zodiacId) {
    tg.sendData(zodiacId);
    tg.close();
}