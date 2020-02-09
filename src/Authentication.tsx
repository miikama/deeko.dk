

class Authentication {

    constructor() {
        console.log("Craeting auth service")
    }

    login() {
        console.log("logging in")
    }

    logout() {
        console.log("logging out")
    }

    getCurrentUser() {
        console.log("getting user")
    }


}

export default new Authentication()