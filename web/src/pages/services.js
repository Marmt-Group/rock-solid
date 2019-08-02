import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import HeroNarrow from '../components/hero-narrow'
import FeatureProcess from '../components/feature-process'
import FormChatBot from '../components/form-chat-bot'

export const query = graphql`
  query ServicesPageQuery {
    hero: file(relativePath: { eq: "worker.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    videoCtaUrl: allSanityVideo(filter: {_id: {eq: "759fdb8e-f819-415c-9978-b99e81d80d3f"}}) {
      edges {
        node {
          video {
            asset {
              assetId
              playbackId
              filename
              thumbTime
              status
            }
          }
        }
      }
    }
  }
`

const ServicesPage = props => {

  const { data } = props
  const hero = (data || {}).hero
  const videoAsset = (data || {}).videoCtaUrl.edges[0].node.video.asset
  

  return (
    <Layout>
      <SEO title={'Services'} />
      <HeroNarrow imgUrl={hero} header={'Rock Solid Inc specializes in beautiful limestone concrete coatings'} lead={'The installation process takes approximately 5 days to complete (depending on your project of course). We believe we\'ve got the corner on the market.'} />
      <FeatureProcess videoAsset={videoAsset} />
      <FormChatBot />
    </Layout>
  )
}

export default ServicesPage
