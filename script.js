    const interval = setInterval(() => {
        count += 7;
        if (count >= targetCount) {
            count = targetCount;
            clearInterval(interval);
        }
        counter.textContent = count;
    }, 20);

    // Эффект при наведении на кнопки навигации
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Изменение цвета тени заголовка
    const heading = document.querySelector('h1');
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 1) % 360;
        heading.style.textShadow = `0 0 15px hsl(${hue}, 100%, 70%)`;
    }, 50);
});
