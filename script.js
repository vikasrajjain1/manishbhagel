/**
 * Manish Baghel - Portfolio Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (isHidden) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                } else {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                }
            }
        });

        // Close mobile menu when clicking any nav link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Header scroll background enhancement
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('shadow-lg', 'shadow-black/40', 'bg-[#0A0E17]/95');
            header.classList.remove('bg-[#0A0E17]/80');
        } else {
            header.classList.remove('shadow-lg', 'shadow-black/40', 'bg-[#0A0E17]/95');
            header.classList.add('bg-[#0A0E17]/80');
        }
    });

    console.log('%c🚀 Manish Baghel Portfolio Loaded Successfully', 'color: #3b82f6; font-size: 14px; font-weight: bold;');
});
