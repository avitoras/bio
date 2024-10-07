document.addEventListener('DOMContentLoaded', function () {
    const expandableItems = document.querySelectorAll('.expandable');

    expandableItems.forEach((expandable) => {
        const details = expandable.nextElementSibling;
        const arrow = expandable.querySelector('.arrow');

        expandable.addEventListener('click', function () {
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                arrow.textContent = 'v'; // Изменение стрелки на вниз
            } else {
                details.style.display = 'none';
                arrow.textContent = '>'; // Вернуть стрелку вправо
            }
        });
    });
});
