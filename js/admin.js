"use strict";
class Admin {
    constructor() {
        this.jwt = localStorage.getItem("admin_jwt");
    }
    getJwt() {
        return this.jwt;
    }
    isLoggedIn() {
        return this.getJwt() !== null;
    }
    isAdmin() {
        if (this.isLoggedIn()) {
            window.location.href = './index.html';
        }
    }
    isGuest() {
        if (!this.isLoggedIn()) {
            window.location.href = './login.html';
        }
    }
    currentUser() {
        if (this.isLoggedIn()) {
        }
    }
    logout() {
        if (this.isLoggedIn()) {
            localStorage.removeItem("admin_jwt");
        }
    }
}
