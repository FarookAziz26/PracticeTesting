class LoginPage {
    constructor(page) {
        this.page = page;

        // Selectors that I founded by inspecting saucedemo.com
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }

    // navigate to login page the moment browser is opened. So basically this opens the website.
    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    // Filling the User name and password. And then we click on the login button.
    // (this.usernameInput, username) -> this.usernameInput is the selector and username is the value we are filling in the input field.
    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;