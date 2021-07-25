import AuthService from "../services/AuthService";
import { useHistory } from "react-router-dom";

export default function MenuBar(){
    let history = useHistory();

    function logOut(evt){
        AuthService.logout();
        return history.push("/");
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <h1> Contacts App </h1>
                    </div>
                    <div className="col-2">
                        <button onClick={logOut} className="btn btn-primary" > Logout </button>
                    </div>
                </div>
            </div>
        </>
    )
}