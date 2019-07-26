import React, { useState } from 'react'
import Img from 'gatsby-image'
import VideoPlayer from './video-player'
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import './lightbox.scss'

const Lightbox = ({ data, usrOptions, type }) => {

    const [showLightbox, setshowLightBox] = useState(false)

    if (type === 'video') {

        const cta = usrOptions.cta || ''

        return (
            <>
            <div className="video-play-container" onClick={() => setshowLightBox(true)}>
                <div className="video-play-icon video-play-icon--sm box-shadow"></div>
                {cta && (
                    <h2>{cta}</h2>
                )}
                    
               
            </div>

            {showLightbox && (
                <Dialog>
                    <VideoPlayer data={data} options={usrOptions} />
                    
                    <div
                        className="closeButton"
                        onClick={() => setshowLightBox(false)}
                    >
                    <i class="icon  icon-Close-Window" icon-class=" icon-Close-Window" title="icon-Close-Window"></i>
                    </div>
                </Dialog>
            )}
            </>
        )
    } else if (type === 'image') {
        if (data.isArray()) {
            return (
                <div className="lightbox-container">
                    {data.map(image => (
                        <Img
                            key={image.node.childImageSharp.fluid.src}
                            fluid={image.node.childImageSharp.fluid}
                        />
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    <Img fluid={data.node.childImageSharp.fluid} />
                </div>
            )
        }
    }        
}

export default Lightbox