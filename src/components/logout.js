import { Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";

export default function Logout(){
    AuthService.logout();
    return (
        <Redirect to={'/'} />
    )
}