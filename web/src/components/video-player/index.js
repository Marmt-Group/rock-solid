import React from 'react'
import SanityMuxPlayer from 'sanity-mux-player'
import './style.scss'

const VideoPlayer = ({ data, options }) => {

    let defaults = {
        autoload: true,
        autoplay: true,
        showControls: true,
        loop: false,
        muted: true,
        className: '',
        style: { width: '100%', height: 'auto' },
        height: '',
        width: '100%'
    }

    let actual = Object.assign({}, defaults, options);

    return (
        <div>
            <SanityMuxPlayer
                assetDocument={data}
                autoload={actual.autoload}
                autoplay={actual.autoplay}
                showControls={actual.showControls}
                loop={actual.loop}
                muted={actual.muted}
                className={actual.className}
                style={actual.style}
                height={actual.height}
                width={actual.width}
            />
        </div>
    )
}

export default VideoPlayer
