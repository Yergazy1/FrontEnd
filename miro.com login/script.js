document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;

    const userData = { email, password };

    fetch("http://127.0.0.1:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User registered:", data);
        alert("User successfully registered");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error registering user");
      });
  });

const container = document.querySelector(".login_by_buttom");
const addButton = document.querySelector(".auth_button_expand");

// Добавляем обработчик событий на кнопку
addButton.addEventListener("click", () => {
  // Создаем кнопки
  const slack = document.createElement("button");
  const fb = document.createElement("button");
  const apple = document.createElement("button");
  const removeButton = document.createElement("button");
  removeButton.id = "remove_added_buttons";
  removeButton.textContent = "-";

  // Slack кнопка
  slack.id = "auth_button_slack";
  slack.title = "Slack";
  const slack_img = document.createElement("img");
  slack_img.src = "images/slack.png"; // Указываем изображение
  slack.appendChild(slack_img); // Вставляем изображение в кнопку

  // Apple кнопка
  apple.id = "auth_button_apple";
  apple.title = "Apple";
  const apple_img = document.createElement("img");
  apple_img.src = "images/apple.png";
  apple.appendChild(apple_img);

  // Facebook кнопка
  fb.id = "auth_button_fb";
  fb.title = "Facebook";
  const fb_img = document.createElement("img");
  fb_img.src = "images/facebook.png";
  fb.appendChild(fb_img);

  // Добавляем кнопки в контейнер
  container.appendChild(slack);
  container.appendChild(apple);
  container.appendChild(fb);
  container.appendChild(removeButton);

  // Применяем изменения к контейнеру
  container.classList.toggle("smaller");

  // Удаляем кнопку "addButton"
  addButton.remove();
  removeButton.addEventListener("click", () => {
    apple.remove();
    fb.remove();
    slack.remove();
    removeButton.remove();
    container.appendChild(addButton);
    container.classList.toggle("bigger");
  });
});
const eInput = document.getElementById("email_input");

eInput.addEventListener("focus", () => {
  eInput.value = "";
});
const pInput = document.getElementById("password_input");

pInput.addEventListener("focus", () => {
  pInput.value = "";
});
pInput.addEventListener("blur", () => {
  if (pInput.value === "") {
    pInput.value = "Enter your password";
  }
});
eInput.addEventListener("blur", () => {
  if (eInput.value === "") {
    eInput.value = "ertaiergazy04@gmail.com";
  }
});
