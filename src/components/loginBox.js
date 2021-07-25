import { useState } from "react"
import { useHistory } from "react-router-dom";
import AuthService from "../services/AuthService";

export function LoginBox(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    const onUserUpdate = (evt) =>{
        setUsername(evt.target.value);
    }

    const onPasswordUpdate = (evt) =>{
        setPassword(evt.target.value);
    }

    const onSubmit = (evt) =>{
        evt.preventDefault();
        return AuthService.login(username,password)
        .then((response)=>{
            if(response){
                history.push('home');
            }
        })
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={onUserUpdate}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={onPasswordUpdate}/>
                    </div>

                    <button onClick={onSubmit} type="submit" className="login btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
        
    )
}