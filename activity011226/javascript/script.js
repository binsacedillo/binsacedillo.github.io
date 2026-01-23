document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const result = document.getElementById('formResult');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Optional Chaining Example:
    // The ?. operator checks if the element exists before calling classList.add().
    // If document.querySelector(...) returns null, nothing happens (no error thrown).
    document.querySelector(`.sidebar ul li a[href="${currentPage}"]`)?.classList.add('active-nav');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Destructuring Example:
        // This extracts 'name' and 'message' properties from the object returned by Object.fromEntries(new FormData(form))
        // Instead of: const data = Object.fromEntries(...); const name = data.name; const message = data.message;
        const { name, message } = Object.fromEntries(new FormData(form));
        result.innerHTML = `<h3>Submitted Information</h3><p><strong>Name:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>`;
        form.reset();
    });

    // Simple login state using localStorage
    function isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }
    function setLoggedIn(val) {
        localStorage.setItem('isLoggedIn', val ? 'true' : 'false');
    }

    // Signup redirect to login
    const signupForm = document.getElementById('signupForm');
    signupForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add validation here if needed
        setLoggedIn(false);
        window.location.href = 'login.html';
    });

    // Login redirect to profile
    const loginForm = document.getElementById('loginForm');
    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add authentication logic here if needed
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

    // Inject Login/Profile nav links based on login state (all pages)
    function injectAuthNav() {
        const sidebarList = document.querySelector('.sidebar ul');
        if (!sidebarList) return;
        // Remove all existing nav links
        sidebarList.innerHTML = '';
        // Always inject Home, About, Contact links
        const navLinks = [
            { href: 'index.html', text: 'Home' },
            { href: 'aboutus.html', text: 'About' },
            { href: 'contactus.html', text: 'Contact Us' }
        ];
        navLinks.forEach(linkData => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = linkData.href;
            a.textContent = linkData.text;
            li.appendChild(a);
            sidebarList.appendChild(li);
        });
        // Inject Profile and Logout links if logged in, else Login link
        if (isLoggedIn()) {
            const profileLi = document.createElement('li');
            const profileA = document.createElement('a');
            profileA.href = 'profile.html';
            profileA.textContent = 'Profile';
            profileLi.appendChild(profileA);
            sidebarList.appendChild(profileLi);

            const logoutLi = document.createElement('li');
            const logoutA = document.createElement('a');
            logoutA.href = '#';
            logoutA.textContent = 'Logout';
            logoutA.addEventListener('click', function (e) {
                e.preventDefault();
                setLoggedIn(false);
                window.location.href = 'login.html';
            });
            logoutLi.appendChild(logoutA);
            sidebarList.appendChild(logoutLi);
        } else {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = 'login.html';
            a.textContent = 'Login';
            li.appendChild(a);
            sidebarList.appendChild(li);
        }
    }
    injectAuthNav();
});