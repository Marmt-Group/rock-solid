import React from 'react'
import VideoPlayer from './video-player'
import { Dialog } from "@reach/dialog"

const LightboxVideoCta = ({ video, options, showLightbox, onShowLightbox, onHideLightbox }) => {

    const cta = options.cta || ''
    
    return (
        <>
        <div className="video-play-container" onClick={!showLightbox ? onShowLightbox : null}>
            <div className="video-play-icon video-play-icon--sm box-shadow"></div>
            {cta && (
                <h2>{cta}</h2>
            )}
        </div>

        {showLightbox && (
        <Dialog>
            <VideoPlayer data={video} options={options} />
            <div className="closeButton" onClick={showLightbox ? onHideLightbox : null}>
                <i className="icon  icon-Close-Window" title="icon-Close-Window"></i>
            </div>
        </Dialog>
        )}
        </>
    )
}

export default LightboxVideoCta