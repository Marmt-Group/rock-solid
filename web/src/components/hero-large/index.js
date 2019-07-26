import React from "react"
import BackgroundImage from 'gatsby-background-image'
import './style.scss'

const HeroLarge = ({ imgUrl }) => (
    <section className="hero cover imagebg height-100 text-center" data-overlay="3">
        <BackgroundImage Tag="div"
            fluid={imgUrl.childImageSharp.fluid}
            backgroundColor={`#040e18`}
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
                        <p className="lead">Serving the Bay Area Since 1995</p>
                    </div>
                </div>
            </div>
        </BackgroundImage>
    </section>
)

export default HeroLarge