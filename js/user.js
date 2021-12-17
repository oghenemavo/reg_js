"use strict";
class User {
    constructor() {
        this.jwt = localStorage.getItem("jwt");
    }
    getJwt() {
        return this.jwt;
    }
    isLoggedIn() {
        return this.getJwt() !== null;
    }
    isUser() {
        if (this.isLoggedIn()) {
            window.location.href = './index.html';
        }
    }
    isGuest() {
        if (!this.isLoggedIn()) {
            window.location.href = './login.html';
        }
    }
    navSetup() {
        var no_auth = Array.from(document.getElementsByClassName("no_auth"));
        var auth = Array.from(document.getElementsByClassName("auth"));
        if (no_auth && auth) {
            if (this.isLoggedIn()) {
                no_auth.forEach(el => {
                    el.style.display = "none";
                });
                auth.forEach(el => {
                    el.style.display = "block";
                });
            }
            else {
                no_auth.forEach(el => {
                    el.style.display = "block";
                });
                auth.forEach(el => {
                    el.style.display = "none";
                });
            }
        }
    }
    currentUser() {
        if (this.isLoggedIn()) {
        }
    }
    logout() {
        if (this.isLoggedIn()) {
            localStorage.removeItem("jwt");
        }
    }
}
