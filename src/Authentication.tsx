export type AuthServiceType = {
    authenticate: () => void;
    isAuthenticated: () => boolean;
}


class Authentication {

    authenticated: boolean = false;

    constructor() {
        console.log("Creating auth service");
        
    }

    authenticate() {
        this.authenticated = true;
        console.log("Authenticating");
    }

    isAuthenticated() {
        console.log("is authenticated?");
        return this.authenticated;        
    }

}


export default new Authentication()
