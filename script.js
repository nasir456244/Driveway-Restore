document.addEventListener('DOMContentLoaded', () => {

    // Sticky header functionality
    const topBar = document.getElementById('top-bar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            topBar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            topBar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        }
    });

});

