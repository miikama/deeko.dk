

class Authentication {

    constructor() {
        console.log("Craeting auth service")                
    }

    authenticate() {
        console.log("Authenticating")
    }

    isAuthenticated() {
        console.log("is authenticated?")
        return true
    }

    logout() {
        console.log("logging out")
    }

    getCurrentUser() {
        console.log("getting user")
    }


}

export default new Authentication()