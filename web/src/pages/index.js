import React from 'react'
import { graphql } from 'gatsby'
import HeroLarge from '../components/hero-large'
import SEO from '../components/seo'
import Layout from '../components/layout'
import FormChatBot from '../components/form-chat-bot'
import FeatureLarge from '../components/feature-large'
import VideoCta from '../components/video-cta'
import ImgLeftTextRight from '../components/img-left-text-right'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings {
        keywords
        title
        description
    }

    hero: file(relativePath: { eq: "IMG_1791-2950.jpg" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    videoCtaImg: file(relativePath: { eq: "worker.jpg" }) {
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

    tedImg: file(relativePath: { eq: "ted.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

  }
`

const IndexPage = props => {
  const { data } = props

  const site = (data || {}).site
  const hero = (data || {}).hero
  const videoImg = (data || {}).videoCtaImg
  const videoAsset = (data || {}).videoCtaUrl.edges[0].node.video.asset
  const tedImg = (data || {}).tedImg

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <HeroLarge imgUrl={hero} />
      <FeatureLarge />
      <VideoCta videoCta={videoImg} videoAsset={videoAsset} />
      <ImgLeftTextRight tedImg={tedImg} />
      <FormChatBot />
    </Layout>
  )
}

export default IndexPage
