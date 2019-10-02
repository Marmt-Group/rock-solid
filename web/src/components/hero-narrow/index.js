import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { window } from 'browser-monads'
import './style.scss'

const HeroNarrow = ({ imgUrl, header, lead }) => (
    <section className="hero narrow imagebg">
        <BackgroundImage className="bg-hero" Tag="div"
            fluid={imgUrl.childImageSharp.fluid}
            style={{backgroundAttachment: window.innerWidth > 2048 ? 'fixed' : 'scroll'}}
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