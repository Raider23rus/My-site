// Массив с URL фоновых изображений
const backgroundImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
];

// Функция для установки фонового изображения
function setBackgroundImage(url) {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${url}')`;
}

// Функция для загрузки случайного фона
function loadRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage(backgroundImages[randomIndex]);
}

// Установка начального фона при загрузке страницы
window.onload = function() {
    // Используем изображение из вашей ссылки (может потребоваться прямая ссылка)
    const yourImageUrl = "https://example.com/your-image.jpg"; // Замените на прямую ссылку на изображение
    setBackgroundImage(yourImageUrl);
    
    // Или загружаем случайное изображение из массива
    // loadRandomBackground();
};

// Обработчик кнопки для смены фона
document.getElementById('changeBgBtn').addEventListener('click', loadRandomBackground);
