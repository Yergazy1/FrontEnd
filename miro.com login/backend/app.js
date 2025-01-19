const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();

// Настройки CORS
const corsOptions = {
  origin: "http://127.0.0.1:5500", // Укажите порт, на котором работает фронтенд
};
app.use(cors(corsOptions)); // Используем cors с настройками

// Middleware для парсинга JSON
app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "2005",
  port: 2005,
});

// Обработчик POST запроса на регистрацию (с использованием callback)
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  // Callback функция для выполнения запроса
  function handleQuery(err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error inserting user" });
    }
    res.status(200).json(result.rows[0]);
  }

  // Выполнение запроса с callback
  pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
    [email, password],
    handleQuery
  );
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
