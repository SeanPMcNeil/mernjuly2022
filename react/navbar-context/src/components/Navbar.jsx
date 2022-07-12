import { useContext } from "react";
import NameContext from "../NameContext";

export function Navbar() {
    const userName = useContext(NameContext);

    return(
        <nav className="navbar navbar-dark bg-dark justify-content-end mb-3">
            <h5 className="navbar-text text-white me-5">Hi, { userName.name }!</h5>
        </nav>
    );
}