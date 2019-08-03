import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/RSI-Logo.png'
import './style.scss'

const Header = ({ siteTitle, showContact, onShowContact }) => {

    const [active, setActive] = useState(false)
    const [showNav, setShowNav] = useState(false)

    const handleToggle = () => {
        setShowNav(!showNav)
    }

    const handleToggleClass = () => {
        setActive(!active);
    }

    return (
        <header>
            <nav className="navbar rci">
                <div className="container">
                    <div className={showNav ? 'row show' : 'row'}>
                        <div className="navbar__menu_links col-lg-6">
                            <ul className="navbar__menu_links-menu-horizontal">
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/services/'>Services</Link>
                                </li>
                                <li>
                                    <Link to='/project-portfolio/'>Project Portfolio</Link>
                                </li>
                                <li>
                                    <Link to='/faqs/'>FAQs</Link>
                                </li>
                                <li className="contact-mobile" onClick={!showContact ? onShowContact : null}>Contact Us</li>
                            </ul>
                        </div>
                        <div className="navbar__logo_container">
                            <Link to='/'><img className="logo logo-dark" src={logo} alt={`${siteTitle} logo`} /></Link>
                        </div>
                        <div className="navbar__menu_contact col-md-6">
                            <button className="btn btn--sm type--uppercase contact-us" onClick={!showContact ? onShowContact : null}> <span className="btn__text">Contact Us</span> </button>
                        </div>
                        <div className="navbar__hamburger text-right">
                            <button className={active ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider'} type="button" onClick={() => { handleToggle(); handleToggleClass()}}>
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>  
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
