// Добавить в конец файла

// Анимация карточек привилегий
document.addEventListener('DOMContentLoaded', function() {
    const privilegeCards = document.querySelectorAll('.privilege-card');
    
    privilegeCards.forEach(card => {
        // Анимация при прокрутке
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    card.style.transform = 'translateY(20px)';
                    card.style.opacity = '0';
                    card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateY(0)';
                        card.style.opacity = '1';
                    }, 100);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
        
        // Клик по кнопке покупки
        const buyBtn = card.querySelector('.privilege-btn');
        buyBtn.addEventListener('click', function() {
            const privilegeName = card.querySelector('h3').textContent;
            alert(`Вы выбрали: ${privilegeName}\nПеренаправляем на страницу оплаты...`);
            // Здесь будет редирект на страницу оплаты
        });
    });
    
    // Изменение цвета заголовка доната
    const donateHeading = document.querySelector('.donate-section h2');
    if (donateHeading) {
        let donateHue = 100; // Зеленый цвет
        setInterval(() => {
            donateHue = (donateHue + 0.5) % 360;
            donateHeading.style.textShadow = `0 0 15px hsl(${donateHue}, 100%, 50%)`;
        }, 100);
    }
});
