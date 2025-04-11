const images = [
  "pictures/img1.png",
  "pictures/img2.png",
  "pictures/img3.png",
  "pictures/img4.png",
  "pictures/img5.png",
  "pictures/img6.png",
  "pictures/img7.png",
  "pictures/img8.png",
];

let currentIndex = 0;
const sliderContainer = document.getElementById("slider-container");

function showImages() {
  sliderContainer.classList.add("fade-out");

  setTimeout(() => {
    sliderContainer.innerHTML = "";

    for (let i = 0; i < 4; i++) {
      const img = document.createElement("img");
      img.src = images[(currentIndex + i) % images.length];
      sliderContainer.appendChild(img);
    }

    currentIndex = (currentIndex + 4) % images.length;

    sliderContainer.classList.remove("fade-out");
  }, 700);
}

showImages(); // Первые 4
setInterval(showImages, 5000); // Каждые 5 секунд

const translations = {
  ru: {
    heading: "Пошив штор",
    servicesTitle: "Наши услуги",
    whyUsTitle: "Почему мы?",
    services: [
      "Выезд дизайнера, замеры",
      "Дизайн проекта",
      "Подбор материалов и фурнитуры",
      "Установка карнизов",
      "Навеска",
    ],
    whyUs: [
      "Опыт работы 10 лет",
      "2500+ уютных квартир",
      "13 оформленных ресторанов",
      "10 оптовых заказов",
      "Большой выбор тканей, тюлей и фурнитуры",
    ],
    consultation: "Консультация дизайнера",
  },
  kz: {
    heading: "Перделерді тігу",
    servicesTitle: "Қызметтеріміз",
    whyUsTitle: "Неге біз?",
    services: [
      "Дизайнердің шығуы, өлшеу",
      "Жобаның дизайны",
      "Материалдар мен фурнитураны таңдау",
      "Карниздерді орнату",
      "Перделерді ілу",
    ],
    whyUs: [
      "10 жылдық тәжірибе",
      "2500+ жайлы пәтер",
      "13 безендірілген мейрамхана",
      "10 көтерме тапсырыс",
      "Мата, тюль және фурнитураның үлкен таңдауы",
    ],
    consultation: "Дизайнер кеңесі",
  },
};

const switcher = document.getElementById("language-switcher");

switcher.addEventListener("change", () => {
  const lang = switcher.value;
  const t = translations[lang];

  document.querySelector("header h1").textContent = t.heading;
  document.querySelector("h2").textContent = t.servicesTitle;
  document.querySelector(".why-us-title").textContent = t.whyUsTitle;

  const servicesList = document.querySelector(".services ul");
  servicesList.innerHTML = t.services
    .map((item) => `<li>${item}</li>`)
    .join("");

  const whyUsList = document.querySelector(".why-us ul");
  whyUsList.innerHTML = t.whyUs.map((item) => `<li>${item}</li>`).join("");

  document.querySelector(".consultation-btn").textContent = t.consultation;
});
