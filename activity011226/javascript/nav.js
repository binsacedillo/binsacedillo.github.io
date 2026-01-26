"use strict";
import { isLoggedIn, setLoggedIn } from './auth.js';

// Navigation logic
export function injectAuthNav() {
    const sidebarList = document.querySelector('.sidebar ul');
    if (!sidebarList) return;
    sidebarList.innerHTML = '';
    const navLinks = [
        { href: 'index.html', text: 'Home' },
        { href: 'aboutus.html', text: 'About' },
        { href: 'contactus.html', text: 'Contact Us' },
        { href: 'cart.html', text: 'Cart' },
        { href: 'catalog.html', text: 'Product Catalog' }
    ];
    navLinks.forEach(linkData => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = linkData.href;
        a.textContent = linkData.text;
        li.appendChild(a);
        sidebarList.appendChild(li);
    });
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
