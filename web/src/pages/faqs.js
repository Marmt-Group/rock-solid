import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Faqs from '../components/faqs'
import FormChatBot from '../components/form-chat-bot'

export const query = graphql`
  query FaqPageQuery {
    hero: file(relativePath: { eq: "faq-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    faqs: allSanityFaq {
      edges {
        node {
          question
          answer
        }
      }
    }
  }
`

const FaqsPage = props => {

  const { data } = props
  const hero = (data || {}).hero
  const faqs = (data || {}).faqs
  

  return (
    <Layout>
      <SEO title={'Services'} />
      <Faqs imgUrl={hero} nodes={faqs} />
      <FormChatBot />
    </Layout>
  )
}

export default FaqsPage
