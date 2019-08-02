import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './style.scss'

const Faqs = ({ imgUrl, nodes }) => {

    const faqs = nodes.edges

    return (
    <section className="faqs imagebg height-100" data-overlay="6">
        <BackgroundImage Tag="div"
            fluid={imgUrl.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            style={{
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '80vh',
                padding: 0,
            }}
        >
        <div className="darken-bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <Accordion defaultActiveKey="0">
                            {faqs &&
                                faqs.map((node, index) => (
                                    <Card key={index}>
                                        <Accordion.Toggle as={Card.Header} eventKey={index}>
                                            <i className="icon  icon-Arrow-Down2" title="icon-Arrow-Down2"></i> {node.node.question}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={index}>
                                            <Card.Body>{node.node.answer}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                            ))}
                        </Accordion>
                    </div>
                    <div className="col-md-5 col-sm-6"></div>
                </div>
            </div>
        </div>
        </BackgroundImage>
    </section>
    )

}

export default Faqs