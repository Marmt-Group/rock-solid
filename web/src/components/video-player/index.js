import React from 'react'
import SanityMuxPlayer from 'sanity-mux-player'
import './style.scss'

const VideoPlayer = ({ data, options }) => {

    let defaults = {
        autoload: true,
        autoplay: true,
        showControls: true,
        loop: false,
        muted: false,
        className: '',
        style: { width: '100%', height: 'auto' },
        height: '',
        width: '100%'
    }

    return (
        <div>
            <SanityMuxPlayer
                assetDocument={data}
                autoload={defaults.autoload}
                autoplay={defaults.autoplay}
                showControls={defaults.showControls}
                loop={defaults.loop}
                muted={defaults.muted}
                className={defaults.className}
                style={defaults.style}
                height={defaults.height}
                width={defaults.width}
            />
        </div>
    )
}

export default VideoPlayer
