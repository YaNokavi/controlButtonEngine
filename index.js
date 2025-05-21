const tg = window.Telegram.WebApp;
tg.expand();
tg.setHeaderColor("#191919");

document.getElementById("button").addEventListener("click", async function () {
  const isActive = this.classList.contains("active");

  this.classList.toggle("active");

  const action = isActive ? "stop" : "start";

  if (!isActive) {
    document.getElementById("button").innerText = "Стоп";
  } else {
    document.getElementById("button").innerText = "Старт";
  }

  const response = await fetch("http://localhost:8000/api/action", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: action }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка сети: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Ответ сервера:", data.message);
      // Выводим сообщение на страницу, например, в элемент с id="responseMessage"
      const msgElem = document.getElementById("responseMessage");
      if (msgElem) {
        msgElem.textContent = data.message;
      }
    })
    .catch((error) => {
      console.error("Ошибка при запросе:", error);
    });
});
