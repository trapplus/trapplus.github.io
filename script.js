// MD3 Expressive animations with smooth timing
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('.skill-card, .contact-card, .language-card, .name-title, .about-section');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // Add subtle animation to skill items
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.zIndex = '5';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.zIndex = '1';
        });
    });

    // Add smooth reveal animation for all cards
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all skill cards and other containers
    document.querySelectorAll('.skill-card, .contact-card, .language-card, .about-section').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)';
        observer.observe(card);
    });
});
