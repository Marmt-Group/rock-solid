import React from "react"
import VideoOneUp from '../video-1-up'
import './style.scss'

const CommercialVideoPortfolio = ({ videos }) => {

    return (
        <section className="video video-1 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Project Videos</h1>
                    </div>
                </div>
                {videos.map((value, index) => (
                    <VideoOneUp videoAsset={value.node.video.asset} key={index} />
                ))}
            </div>
        </section>
    )
}

export default CommercialVideoPortfolio 