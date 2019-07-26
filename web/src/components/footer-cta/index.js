import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import './style.scss'

const FooterCta = () => {

    const data = useStaticQuery(graphql`
        query FooterCTAQuery {
            footer: file(relativePath: { eq: "footer-cta-bg.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <section className="footer-cta" data-overlay="4">
            <BackgroundImage Tag="div"
                fluid={data.footer.childImageSharp.fluid}
                backgroundColor={`#040e18`}
                style={{
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    padding: 0,
                    height: '146px'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="cta">
                            <div className="col-sm-12 col-lg-8">
                                <h4>Contact us today for a free quote!</h4>
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <button className="btn btn-primary text-uppercase contact-us">get a free quote </button>
                            </div>
                        </div>
                    </div>
                </div>
            </BackgroundImage>
        </section>
    )
}

export default FooterCta