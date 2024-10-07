document.querySelectorAll('.clickable').forEach(function(element) {
    element.addEventListener('click', function() {
        const details = element.nextElementSibling; // Получаем следующий элемент (div с классом details)
        const isExpanded = element.parentElement.getAttribute('data-expanded') === 'true';

        details.style.display = isExpanded ? 'none' : 'block'; // Скрываем или показываем детали
        element.parentElement.setAttribute('data-expanded', !isExpanded); // Обновляем атрибут
    });
});
