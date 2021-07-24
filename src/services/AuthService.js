const AuthService = {
    login : (username, password)=>{
        if(username === 'prabodh' && password === 'admin@123'){
            localStorage.setItem('isValidUser',true);
            return new Promise(resolve => setTimeout(()=>{
                resolve(true)
            }, 1000));
        }
        return Promise.resolve(false);
    },

    isSessionActive : ()=>{
        return localStorage.getItem('isValidUser');
    },

    logout : ()=>{
        localStorage.removeItem('isValidUser');
    }
}

export default AuthService;