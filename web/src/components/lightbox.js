import React, { useState } from 'react'
import Img from 'gatsby-image'
import LightboxVideoCta from '../components/lightbox-video-cta'
import LightboxGallery from '../components/lightbox-gallery'
import "@reach/dialog/styles.css"
import './lightbox.scss'

const Lightbox = ({ data, usrOptions, type }) => {

    const [showLightbox, setshowLightBox] = useState(false)

    const handleShowLightbox = () => {
        setshowLightBox(true)
    }

    const handleHideLightbox = () => {
        setshowLightBox(false)
    }

    if (type === 'video-cta') {
        return (
            <LightboxVideoCta video={data} options={usrOptions} showLightbox={showLightbox} onShowLightbox={handleShowLightbox} onHideLightbox={handleHideLightbox} />
        )
    } else if (type === 'gallery') {
        return (
            <LightboxGallery assets={data} defaults={{}} />
        )
    } else if (type === 'gallery-beforeAfter') {
        return (
            <LightboxGallery assets={data} defaults={{beforeAfter: true}} />
        )
    } else if (type === 'image') {
        return (
            <div>
                <Img fluid={data.node.childImageSharp.fluid} />
            </div>
        )
    }       
}

export default Lightbox