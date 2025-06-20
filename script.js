document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Копирование IP-адреса
    window.copyIP = function() {
        const ip = 'play.minelord.ru';
        navigator.clipboard.writeText(ip)
            .then(() => {
                const serverIpElement = document.querySelector('.server-ip');
                const originalText = serverIpElement.innerText;
                serverIpElement.innerText = 'Скопировано!';
                
                setTimeout(() => {
                    serverIpElement.innerText = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
                alert('Не удалось скопировать IP. Скопируйте вручную: play.minelord.ru');
            });
    };
    
    // Анимация карточек
    const cards = document.querySelectorAll('.feature-card, .privilege-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 10px 25px rgba(76, 175, 80, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });
    
    // Изменение цвета заголовка
    const titles = document.querySelectorAll('h1, h2, h3');
    
    if (titles.length > 0) {
        setInterval(() => {
            titles.forEach(title => {
                const hue = Math.floor(Math.random() * 60) + 80; // Зеленые оттенки
                title.style.textShadow = `2px 2px 0 hsl(${hue}, 70%, 30%)`;
            });
        }, 2000);
    }
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню после клика
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Обработка кнопок покупки
    const buyButtons = document.querySelectorAll('.privilege-card .btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const privilegeName = this.closest('.privilege-card').querySelector('h3').textContent;
            alert(`Вы выбрали: ${privilegeName}\nПеренаправляем на страницу оплаты...`);
            // Здесь будет редирект на страницу оплаты
        });
    });
    
    // Анимация при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .privilege-card, .rules');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализация анимации
    window.addEventListener('scroll', animateOnScroll);
    
    // Установка начальных значений для анимации
    const animatedElements = document.querySelectorAll('.feature-card, .privilege-card, .rules');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Инициализация при загрузке
    animateOnScroll();
});
