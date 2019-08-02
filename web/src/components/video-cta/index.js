import React from "react"
import BackgroundImage from 'gatsby-background-image'
import Lightbox from '../lightbox'
import './style.scss'

const VideoCta = ({ videoCta, videoAsset }) => {

    let options = {
        cta: 'Show me how this works!',
        // muted: false,
    }

    return (
        <section className="video video-1 text-center imagebg" data-overlay="4">
            <BackgroundImage Tag="div"
                fluid={videoCta.childImageSharp.fluid}
                backgroundColor={`#040e18`}
                style={{
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    padding: 0,
                    height: '270px'
                }}
            ></BackgroundImage>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Lightbox data={videoAsset} type={'video-cta'} usrOptions={options} />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default VideoCta 