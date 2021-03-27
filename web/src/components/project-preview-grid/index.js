import React from 'react'
import Lightbox from '../lightbox'
import 'react-perfect-scrollbar/dist/css/styles.css';
import './style.scss'

const ProjectPreviewGrid = ({ gallery, largePreview }) => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Project Images</h1>
                    </div>
                </div>
                <div className="row lightbox__categories-container">
                    
                    <div className="col-sm-12 images__container gallery">
                        {gallery.pools &&
                        <div className="lightbox__category">
                            <Lightbox data={gallery.pools} type={'gallery'} />
                            <p>Pool Decks</p>
                        </div>
                        }

                        {gallery.driveways &&
                        <div className="lightbox__category">
                            <Lightbox data={gallery.driveways} type={'gallery'} />
                            <p>Driveways</p>
                        </div>
                        }

                        {gallery.patios &&
                        <div className="lightbox__category">
                            <Lightbox data={gallery.patios} type={'gallery'} />
                            <p>Patios &amp; Walkways</p>
                        </div>
                        }

                        {gallery.vertical &&
                        <div className="lightbox__category">
                            <Lightbox data={gallery.vertical} type={'gallery'}  />
                            <p>Vertical</p>
                        </div>
                        }

                        {gallery.commercial &&
                        <div className="lightbox__category">
                            <Lightbox data={gallery.commercial} type={'gallery'} largePreview={largePreview} />
                            <p>Commercial</p>
                        </div>
                        }

                        {gallery.beforeAfter &&
                        <div className="lightbox__category">
                            <Lightbox data={gallery.beforeAfter} type={'gallery-beforeAfter'} />
                            <p>Before &amp; After</p>
                        </div>
                        }
                    </div>
                    
                </div>
            </div>
        </section>

    )
}

export default ProjectPreviewGrid
