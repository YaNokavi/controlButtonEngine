const tg = window.Telegram.WebApp;
tg.setHeaderColor("#191919");
document.getElementById("button").addEventListener("click", function () {
  this.classList.toggle("active");
});
