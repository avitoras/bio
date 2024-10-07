document.addEventListener('DOMContentLoaded', () => {
    const expandables = document.querySelectorAll('.expandable');

    expandables.forEach(expandable => {
        expandable.addEventListener('click', () => {
            const isExpanded = expandable.getAttribute('data-expanded') === 'true';
            expandable.setAttribute('data-expanded', !isExpanded);
        });
    });
});
