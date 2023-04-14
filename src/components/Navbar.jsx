import { Link } from 'react-router-dom';

export const Navbar = () => {
    return(
        <header className="navBar">
            <Link to="/" className="navLogo">
                <img 
                    width="130"
                    height="50" 
                    src="./images/logo.png" 
                    alt="logo"
                />
            </Link>
            <Link to="/oferta" className="navLink">OFERTA</Link>
            <Link to="/portfolio" className="navLink">PORTFOLIO</Link>
            <Link to="/kontakt" className="navLink">KONTAKT</Link>
        </header>
    )
}