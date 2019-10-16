import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { window } from 'browser-monads'
import './style.scss'

const HeroLarge = ({ imgUrl }) => {

    const handleClickArrow = (event) => {
        // scroll to #feature-large
        const d = document.getElementById('feature-large');
        const topPos = d.offsetTop;
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: topPos,
                left: 0,
                behavior: 'smooth'
            });
        }

        event.target.style.opacity = 0
    }

    return (
    <section className="hero cover imagebg height-100 text-center">
        <BackgroundImage className="bg-hero" Tag="div"
            fluid={imgUrl.childImageSharp.fluid}
            style={{ backgroundAttachment: window.innerWidth > 2048 ? 'fixed' : 'scroll' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>Rock Solid, Inc</h1>
                        <h2>The concrete coating company</h2>
                        <p className="lead">Serving the Bay Area Since 1994</p>
                    </div>
                    <div className="col-sm-12 text-center">
                        <i className="icon icon-Arrow-Down2" title="icon-Arrow-Down2" onClick={handleClickArrow}></i>
                    </div>
                </div>
            </div>
        </BackgroundImage>
    </section>
    )
}

export default HeroLarge