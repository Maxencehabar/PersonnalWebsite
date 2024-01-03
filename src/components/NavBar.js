import './navbar.css';
import { Link } from "react-router-dom";


export function NavBar() {
    return (
        <header className="header">
            <Link to="/" className="logo">Maxence.</Link>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </header>
    )
}
