document.addEventListener('DOMContentLoaded', () => {
    const expandableSections = document.querySelectorAll('.expandable');

    expandableSections.forEach(section => {
        section.addEventListener('click', () => {
            const isExpanded = section.getAttribute('data-expanded') === 'true';
            section.setAttribute('data-expanded', !isExpanded);
        });
    });
});
