document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a, .footer-links a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
