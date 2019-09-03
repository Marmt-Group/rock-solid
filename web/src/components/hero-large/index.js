import React from "react"
import BackgroundImage from 'gatsby-background-image'
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
        <BackgroundImage Tag="div"
            fluid={imgUrl.childImageSharp.fluid}
            style={{
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: 'inherit',
                padding: 0,
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>The concrete coating company</h1>
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