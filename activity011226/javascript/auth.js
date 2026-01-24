"use strict";

// Authentication logic
export function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

export function setLoggedIn(val) {
    localStorage.setItem('isLoggedIn', val ? 'true' : 'false');
}
