import React from 'react'
import Slider from "react-slick";
import './style.scss'

const TestimonialSlider = ({ testimonials }) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <section className="testimonials-slider text-center">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-10">
                        <div className="slider" data-paging="true">
                            <div className="slides">
                                <Slider {...settings}>
                                    {testimonials.nodes && testimonials.nodes.map((testimonial, index) => (
                                        <div className="slide" key={index}>
                                            <div className="testimonial">
                                                <blockquote>“{testimonial.quote}”</blockquote>
                                                <h5>{testimonial.person}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSlider