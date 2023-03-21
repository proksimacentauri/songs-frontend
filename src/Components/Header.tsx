
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";



const Header: FC = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <nav className="nav-links">  <Link to={'/'}>Home</Link> </nav>
            <button onClick={() => navigate('/AddSong')} className="button">Add Song</button>
        </header>
    );
}


export default Header;