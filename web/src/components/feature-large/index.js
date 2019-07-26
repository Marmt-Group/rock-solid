import React from "react"
import './style.scss'

const FeatureLarge = () => (
    <section className="feature-large">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <div className="switchable__text">
                        <h2>What is coated concrete?</h2>
                        <p className="lead"> We take your existing patios, walkways, pool decks and more, and coat over it with concrete. No tear out of needed! What you get from us is absolutely beautiful craftsmanship that's built to last. We've been in business since 1995 and employ a hard working team from around the San Francisco Bay area.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="boxed boxed--lg boxed--border">
                        <div className="feature feature-2"> <i className="icon  icon-Money-Smiley" icon-class=" icon-Money-Smiley" title="icon-Money-Smiley"></i>
                            <div className="feature__body">
                                <h5>No tear out needed!</h5>
                                <p> Save time and money by avoiding demolition with existing walkways, patios, or pull decks.</p>
                            </div>
                        </div>
                        <div className="feature feature-2"> <i className="icon  icon-Running" icon-class=" icon-Running" title="icon-Running"></i>
                            <div className="feature__body">
                                <h5>Fast Construction</h5>
                                <p>The installation process takes approximately 5 days to complete (depending on your project of course). Just 5 days to a
                                        completely new, beautiful front drive, pool deck or backyard patio!</p>
                            </div>
                        </div>
                        <div className="feature feature-2"> <i className="icon  icon-Geo2" icon-class=" icon-Geo2" title="icon-Geo2"></i>
                            <div className="feature__body">
                                <h5>Anywhere in the San Francisco Bay Area</h5>
                                <p> Take comfort in 6 months included support with a dedicated support forum </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default FeatureLarge