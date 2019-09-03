import React from "react"
import BackgroundImage from 'gatsby-background-image'
import './style.scss'

const FeatureProcess = ({ imageAsset }) => {
    
    return (
        <section className="process">
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-lg-6">
                        <h3>Our Services</h3>
                        <ol className="process-3">
                            <li className="process_item">
                                <div className="process__number"><i className="icon green  icon-Receipt-4" title="icon-Receipt-4"></i></div>
                                <div className="process__body">
                                    <h4>Free Estimates<br /></h4>
                                    <p> Our estimates are completely free and almost always on the spot. A quick appointment, usually 20-30 minutes at most and you’ll know your costs right there. </p>
                                </div>
                            </li>
                            <li className="process_item">
                                <div className="process__number"><i className="icon brown  icon-Home-5" title="icon-Home-5"></i></div>
                                <div className="process__body">
                                    <h4>Residential<br /></h4>
                                    <p> We can turn your pool deck, walkway, driveway, or patio into your dream hardscape. </p>
                                </div>
                            </li>
                            <li className="process_item">
                                <div className="process__number"><i className="icon yellow icon-Building" title="icon-Building"></i></div>
                                <div className="process__body">
                                    <h4>Commercial<br /></h4>
                                    <p>With tons of experience in the commercial world, we can make your apartment complex or plaza look beautiful. See our
                                    gallery for some examples of our commercial work!</p>
                                </div>
                            </li>
                            <li className="process_item">
                                <div className="process__number"><i className="icon purple icon-Repair" title="icon-Repair"></i></div>
                                <div className="process__body">
                                    <h4>Service and Maintenance<br /></h4>
                                    <p> We maintain and service all of our installations. Have we done work for you before? Give us a call and we can touch up
                                    your project! </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <BackgroundImage Tag="div"
                            fluid={imageAsset.childImageSharp.fluid}
                            backgroundColor={`#040e18`}
                            style={{
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
                                height: '100%',
                                padding: 0,
                                borderRadius: '4px'
                            }}
                        >
                        </BackgroundImage>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default FeatureProcess