// Массив с альтернативными текстами
const texts = [
    "Приветствуем вас на нашем сайте!",
    "Здесь вы найдёте много интересного",
    "Мы рады вашему визиту",
    "Спасибо, что заглянули к нам"
];

// Функция для изменения текста
function changeText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    document.querySelector('p').textContent = texts[randomIndex];
    
    // Анимация изменения текста
    const p = document.querySelector('p');
    p.style.animation = 'none';
    void p.offsetWidth; // Триггер перезапуска анимации
    p.style.animation = 'fadeIn 1s';
}

// Добавляем обработчик события для кнопки
document.getElementById('changeTextBtn').addEventListener('click', changeText);

// Инициализация при загрузке страницы
window.onload = function() {
    console.log('Сайт успешно загружен!');
};
