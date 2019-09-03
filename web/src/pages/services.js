import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import HeroNarrow from '../components/hero-narrow'
import FeatureProcess from '../components/feature-process'
import FormChatBot from '../components/form-chat-bot'

export const query = graphql`
  query ServicesPageQuery {
    hero: file(relativePath: { eq: "pool-deck.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    imageAsset: file(relativePath: { eq: "pool-deck-2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

  }
`

const ServicesPage = props => {

  const { data } = props
  const hero = (data || {}).hero
  //const videoAsset = (data || {}).videoCtaUrl.edges[0].node.video.asset
  const imageAsset = (data || {}).imageAsset
  

  return (
    <Layout>
      <SEO title={'Services'} />
      <HeroNarrow imgUrl={hero} header={'Rock Solid Inc specializes in beautiful concrete coatings'} lead={'The installation process takes approximately 5 days to complete (depending on your project of course). We believe we\'ve got the corner on the market.'} />
      <FeatureProcess imageAsset={imageAsset} />
      <FormChatBot />
    </Layout>
  )
}

export default ServicesPage
