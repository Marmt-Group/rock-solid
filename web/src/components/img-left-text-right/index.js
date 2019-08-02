import React from "react"
import Img from 'gatsby-image'
import './style.scss'

const ImgLeftTextRight = ({ tedImg }) => (
    <section className="feature-large narrow">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-5"> 
                    <Img 
                        fluid={tedImg.childImageSharp.fluid} 
                        alt="Image of Ted, founder of Rock Solid, Inc." 
                        style={{width: '100%', height: '400px'}}
                    />
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="switchable__text">
                        <div className="text-block" style={{ margin: '0 0 0.78787878787879em' }}>
                            <h2 style={{ margin: '0'}}>Ted Fitch</h2> <span>Founder &amp; President</span> </div>
                        <p className="lead"> After many years of trade shows, and many years of hard work, we've made our mark on the Bay Area as one of the few companies that do what we do. I began my career as a tile worker, and after several years founded Rock Solid Inc. It is my pleasure to be of your service.</p>
                        <ul className="social-list list-inline list--hover">
                            <li><a href="mailto:tjfhoop@aol.com " target="_self"><i className="socicon socicon-mail icon icon--xs"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default ImgLeftTextRight