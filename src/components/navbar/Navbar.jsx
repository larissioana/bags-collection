import { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className={`nav-links ${isMobileNavOpen ? "open" : ""}`}>
                <div className="nav-left">
                    <h1>Bags.</h1>
                </div>
                <div className="nav-right">
                    <a href="#">Products</a>
                    <a href="#">Sale</a>
                    <a href="#">Gallery</a>
                </div>
                <a href="#">Sign up</a>
            </div>
            <div className="burger" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar
