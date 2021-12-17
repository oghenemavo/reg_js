class User {
    jwt!: any;

    constructor() {
        this.jwt = localStorage.getItem("jwt");
    }

    getJwt():string {
        return this.jwt;
    }

    isLoggedIn():boolean {
        return this.getJwt() !== null;
    }

    isUser():void {
        if (this.isLoggedIn()) {
            window.location.href = './index.html';
        }
    }

    isGuest():void {
        if (!this.isLoggedIn()) {
            window.location.href = './login.html';
        }
    }

    navSetup() {
        var no_auth = Array.from(document.getElementsByClassName("no_auth") as HTMLCollectionOf<HTMLElement>);
        var auth = Array.from(document.getElementsByClassName("auth") as HTMLCollectionOf<HTMLElement>);

        if (no_auth && auth) {
            if (this.isLoggedIn()) {
                no_auth.forEach(el => {
                    el.style.display = "none";
                });
                auth.forEach(el => {
                    el.style.display = "block";
                });
            } else {
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
    
    logout():void {
        if (this.isLoggedIn()) {
            localStorage.removeItem("jwt");
        }
    }

}