import { Link, BrowserRouter } from "react-router-dom";

export function MenuBar(){
    return (
        <div className="menu-list">
            <BrowserRouter>
                <Link className="btn btn-primary" to="/logout">Logout</Link>
            </BrowserRouter>
        </div>
    )
}