document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeStorageKey = 'user-theme'; 
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    }
    const savedTheme = localStorage.getItem(themeStorageKey);
    let initialTheme;
    if (savedTheme) {
        initialTheme = savedTheme; 
    } else {
        
        initialTheme = 'light'; 
    }
    applyTheme(initialTheme);
    updateThemeIcons(initialTheme === 'dark');
     if (!savedTheme) {
         localStorage.setItem(themeStorageKey, initialTheme);
     }
    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark'; 
        applyTheme(newTheme); 
        updateThemeIcons(newTheme === 'dark'); 
        localStorage.setItem(themeStorageKey, newTheme);
    });

});
