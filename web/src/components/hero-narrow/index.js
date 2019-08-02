import React from "react"
import BackgroundImage from 'gatsby-background-image'
import './style.scss'

const HeroNarrow = ({ imgUrl, header, lead }) => (
    <section className="hero narrow imagebg" data-overlay="5">
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
        <div className="darken-bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-7 text-body">
                        <h1>{header}</h1>
                        <p className="lead">{lead}</p>
                    </div>
                </div>
            </div>
        </div>
        </BackgroundImage>
    </section>
)

export default HeroNarrow