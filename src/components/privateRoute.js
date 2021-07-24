import { Redirect, Route } from "react-router-dom";
import AuthService from "../services/AuthService";


export default function PrivateRoute({ component: Component, ...rest }){
    const isLoggedIn = AuthService.isSessionActive();
    return(
        <Route 
            {...rest}
                render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname : '/'}} />
                )
            }
        />
    )
}