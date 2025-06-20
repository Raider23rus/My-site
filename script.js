// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Копирование IP-адреса
    window.copyIP = function() {
        const ip = 'mc.ladexmine.ru';
        navigator.clipboard.writeText(ip)
            .then(() => {
                const serverIpElement = document.querySelector('.server-ip');
                const originalHtml = serverIpElement.innerHTML;
                serverIpElement.innerHTML = '<i class="fas fa-check"></i> Скопировано!';
                
                setTimeout(() => {
                    serverIpElement.innerHTML = originalHtml;
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
                alert('Не удалось скопировать IP. Скопируйте вручную: play.mcrealm.ru');
            });
    };
    
    // Функция для обновления онлайн-статуса
    function updateOnlineStatus() {
        // Здесь будет запрос к API сервера
        // Для демонстрации используем случайные значения
        const onlineCount = Math.floor(Math.random() * 60) + 140; // 140-200
        const onlineElement = document.getElementById('online-count');
        const serverOnline = document.getElementById('server-online');
        
        onlineElement.textContent = onlineCount;
        serverOnline.textContent = onlineCount;
    }
    
    // Имитация получения данных с сервера
    updateOnlineStatus();
    setInterval(updateOnlineStatus, 30000); // Обновление каждые 30 секунд
    
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
        const elements = document.querySelectorAll('.feature-card, .privilege-card, .rules, .stat-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Установка начальных значений для анимации
    const animatedElements = document.querySelectorAll('.feature-card, .privilege-card, .rules, .stat-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Инициализация при загрузке
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
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
});
