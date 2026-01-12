
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const result = document.getElementById('formResult');
    const navLinks = document.querySelectorAll('.sidebar ul li a');
    let currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === undefined) {
        currentPage = 'index.html';
    }
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-nav');
        }
    });
    
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            result.innerHTML = `<h3>Submitted Information</h3><p><strong>Name:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>`;
            form.reset();
        });
    }
});
