class Admin {
    jwt!: any;

    constructor() {
        this.jwt = localStorage.getItem("admin_jwt");
    }

    getJwt():string {
        return this.jwt;
    }

    isLoggedIn():boolean {
        return this.getJwt() !== null;
    }

    isAdmin():void {
        if (this.isLoggedIn()) {
            window.location.href = './index.html';
        }
    }

    isGuest():void {
        if (!this.isLoggedIn()) {
            window.location.href = './login.html';
        }
    }

    currentUser() {
        if (this.isLoggedIn()) {
        }
    }
    
    logout():void {
        if (this.isLoggedIn()) {
            localStorage.removeItem("admin_jwt");
        }
    }
}