import React from 'react'
import './style.scss'
if (typeof window !== 'undefined') {
import Flickity from 'react-flickity-component'
}

const TestimonialSlider = ({ testimonials }) => {

    if (typeof window !== 'undefined') {
        return (
            <section className="testimonials-slider text-center">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="col-sm-10">
                            <div className="slider" data-paging="true">
                                <div className="slides">
                                    
                                    <Flickity
                                        elementType={'div'} // default 'div'
                                        options={{}} // takes flickity options {}
                                    >
                                    {testimonials.nodes && testimonials.nodes.map((testimonial, index) => (
                                    <div className="slide" key={index}>
                                        <div className="testimonial">
                                            <blockquote>“{testimonial.quote}”</blockquote>
                                            <h5>{testimonial.person}</h5>
                                        </div>
                                    </div>
                                    ))}
                                    </Flickity>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default TestimonialSlider