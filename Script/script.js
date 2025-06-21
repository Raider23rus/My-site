document.addEventListener('DOMContentLoaded', function() {
    function adaptBackground() {
        const body = document.body;
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches;

        if (isMobile) {
            // Дополнительные настройки для мобильных
            console.log("Mobile device detected - adapting background");
        } else if (isTablet) {
            // Дополнительные настройки для планшетов
            console.log("Tablet device detected - adapting background");
        }
    }

    // Вызываем при загрузке и при изменении размера окна
    adaptBackground();
    window.addEventListener('resize', adaptBackground);
});
