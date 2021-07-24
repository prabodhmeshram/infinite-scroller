import { Redirect } from "react-router-dom";
import { LoginBox } from "../components/loginBox";
import AuthService from "../services/AuthService";

export function LoginPage(){
    const isLoggedIn = AuthService.isSessionActive();

    return (
        isLoggedIn ?( <Redirect to={'/home'} /> ) :(<LoginBox />)
    )
}