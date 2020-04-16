import React from "react"
import VideoPlayer from '../video-player'

const VideoOneUp = ({ videoAsset }) => {

    return( 
        <div className="row asset">
            <div className="col-sm-12 col-md-10 col-lg-7">
                <VideoPlayer data={videoAsset} />
            </div>
        </div>
    )
}

export default VideoOneUp 