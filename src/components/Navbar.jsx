import { Link } from 'react-router-dom';

export const Navbar = () => {
    return(
        <nav className="navBar">
            <Link to="/" className="navLogo">
                <img 
                    width="140"
                    height="80" 
                    src="./images/logo.jpg" 
                    alt="logo"
                />
            </Link>
            <Link to="/oferta" className="navLink">OFERTA</Link>
            <Link to="/portfolio" className="navLink">PORTFOLIO</Link>
            <Link to="/kontakt" className="navLink">KONTAKT</Link>
        </nav>
    )
}