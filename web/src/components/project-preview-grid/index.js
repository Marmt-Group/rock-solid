import React from 'react'
import Lightbox from '../lightbox'
import 'react-perfect-scrollbar/dist/css/styles.css';
import './style.scss'

const ProjectPreviewGrid = ({ gallery }) => {

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Project Images</h1>
                    </div>
                </div>
                <div className="row lightbox__categories-container">
                    
                    <div className="col-sm-12 col-lg-7 images__container gallery">
                        <div className="lightbox__category">
                            <Lightbox data={gallery.pools} type={'gallery'} />
                            <p>Pool Decks</p>
                        </div>
                        <div className="lightbox__category">
                            <Lightbox data={gallery.driveways} type={'gallery'} />
                            <p>Driveways</p>
                        </div>
                        <div className="lightbox__category">
                            <Lightbox data={gallery.patios} type={'gallery'} />
                            <p>Patios &amp; Walkways</p>
                        </div>
                        <div className="lightbox__category">
                            <Lightbox data={gallery.vertical} type={'gallery'} />
                            <p>Vertical</p>
                        </div>
                        <div className="lightbox__category">
                            <Lightbox data={gallery.commercial} type={'gallery'} />
                            <p>commercial</p>
                        </div>
                    </div>

                    <ul className="col-sm-12 col-lg-5 images__container">
                        <li className="lightbox__category">
                            <Lightbox data={gallery.beforeAfter} type={'gallery-beforeAfter'} />
                            <p>Before &amp; After</p>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </section>

    )
}

export default ProjectPreviewGrid
