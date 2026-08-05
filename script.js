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
// ==========================================
// 1. ЛОГИКА КАСТОМНОГО КУРСОРA
// ==========================================
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Увеличиваем курсор при наведении на интерактивные элементы
document.querySelectorAll('a, button, .service-card, .portfolio-item').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});


// ==========================================
// 2. ПЕРЕКЛЮЧАТЕЛЬ СВЕТЛОЙ / ТЕМНОЙ ТЕМЫ
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.textContent = '☀️';
    }
});


// ==========================================
// 3. АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ
// ==========================================
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Перестаем следить за элементом, чтобы анимация сработала только 1 раз
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.15 // Элемент начнет проявляться, когда покажется на 15% своего размера
});

revealElements.forEach(element => {
    revealOnScroll.observe(element);
});
