import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
// import { cn } from '../../lib/helpers'
import './style.scss'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {

    const [active, setActive] = useState(false)

    const data = useStaticQuery(graphql`
        query HeaderQuery {
            logo: file(relativePath: { eq: "RSI-Logo.png" }) {
                childImageSharp {
                    fixed(width: 192, height: 46) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const handleToggle = () => {
       return showNav ? onHideNav : onShowNav
    }

    const handleToggleClass = () => {
        setActive(!active);
    }

    return (
        <header>
            <nav className="navbar rci">
                <div className="container">
                    <div className="row">
                        <div className="navbar__menu_links col-md-6">
                            <ul className="navbar__menu_links-menu-horizontal text-left">
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
                                    <Link to='/faqs/'>About</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar__logo_container">
                            <Link to='/'><Img className="logo logo-dark" fixed={data.logo.childImageSharp.fixed} alt={`${siteTitle} logo`} /></Link>
                        </div>
                        <div className="navbar__menu_contact col-md-6 text-right text-left-xs text-left-sm">
                            <button className="btn btn--sm type--uppercase contact-us"> <span className="btn__text">Contact us</span> </button>
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
