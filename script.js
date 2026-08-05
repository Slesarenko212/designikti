document.addEventListener('mousemove', function(e) {
    // Ограничиваем частоту создания искр, чтобы сайт не тормозил
    if (Math.random() > 0.15) return; 

    // Создаем элемент искры
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Находим координаты курсора мыши
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';

    // Генерируем случайное направление разлета (в диапазоне от -40px до 40px)
    const moveX = (Math.random() - 0.5) * 80;
    const moveY = (Math.random() - 0.5) * 80;

    // Передаем эти значения в CSS переменные для анимации
    sparkle.style.setProperty('--mx', `${moveX}px`);
    sparkle.style.setProperty('--my', `${moveY}px`);

    // Задаем случайный размер искры для естественности (от 2px до 6px)
    const size = Math.random() * 4 + 2;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';

    document.body.appendChild(sparkle);

    // Удаляем искру из кода после окончания анимации
    setTimeout(() => {
        sparkle.remove();
    }, 1200);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
