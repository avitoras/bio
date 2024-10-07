document.addEventListener('DOMContentLoaded', () => {
    const expandableItems = document.querySelectorAll('.expandable');

    expandableItems.forEach(item => {
        const clickable = item.querySelector('.clickable');
        const details = item.querySelector('.details');
        
        clickable.addEventListener('click', () => {
            const isExpanded = details.style.display === 'block';
            details.style.display = isExpanded ? 'none' : 'block';
            const arrow = clickable.querySelector('.arrow');
            arrow.textContent = isExpanded ? '>' : 'v';
        });
    });
});