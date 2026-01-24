import { isLoggedIn, setLoggedIn } from './auth.js';
import { injectAuthNav } from './nav.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const result = document.getElementById('formResult');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelector(`.sidebar ul li a[href="${currentPage}"]`)?.classList.add('active-nav');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Clear previous errors
        ['name','email','subject','message'].forEach(id => {
            document.getElementById(id+'Error').textContent = '';
        });
        let valid = true;
        const fd = Object.fromEntries(new FormData(form));
        // Name validation
        if (!fd.name || fd.name.trim().length < 2) {
            document.getElementById('nameError').textContent = 'Please enter your full name.';
            valid = false;
        }
        // Email validation
        if (!fd.email || !/^\S+@\S+\.\S+$/.test(fd.email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
        }
        // Subject validation
        if (!fd.subject || fd.subject.trim().length < 3) {
            document.getElementById('subjectError').textContent = 'Please enter a subject.';
            valid = false;
        }
        // Message validation
        if (!fd.message || fd.message.trim().length < 5) {
            document.getElementById('messageError').textContent = 'Please enter a message (at least 5 characters).';
            valid = false;
        }
        if (!valid) return;
        result.innerHTML = `<h3>Thank you for contacting us!</h3><p>We have received your message and will respond soon.</p><ul><li><strong>Name:</strong> ${fd.name}</li><li><strong>Email:</strong> ${fd.email}</li><li><strong>Subject:</strong> ${fd.subject}</li><li><strong>Message:</strong> ${fd.message}</li></ul>`;
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