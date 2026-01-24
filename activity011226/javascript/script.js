import { isLoggedIn, setLoggedIn } from './auth.js';
import { injectAuthNav } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const result = document.getElementById('formResult');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelector(`.sidebar ul li a[href="${currentPage}"]`)?.classList.add('active-nav');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const { name, message } = Object.fromEntries(new FormData(form));
        result.innerHTML = `<h3>Submitted Information</h3><p><strong>Name:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>`;
        form.reset();
    });

    // Signup redirect to login
    const signupForm = document.getElementById('signupForm');
    signupForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        setLoggedIn(false);
        window.location.href = 'login.html';
    });

    // Login redirect to profile
    const loginForm = document.getElementById('loginForm');
    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        setLoggedIn(true);
        window.location.href = 'profile.html';
    });

    // Profile page access control
    if (currentPage === 'profile.html') {
        if (!isLoggedIn()) {
            window.location.href = 'login.html';
            return;
        }
        window.logout = function () {
            setLoggedIn(false);
            window.location.href = 'login.html';
        };
    }

    injectAuthNav();
});