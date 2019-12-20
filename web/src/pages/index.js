import React from 'react'
import { graphql } from 'gatsby'
import HeroLarge from '../components/hero-large'
import SEO from '../components/seo'
import Layout from '../components/layout'
import FormChatBot from '../components/form-chat-bot'
import FeatureLarge from '../components/feature-large'
import VideoCta from '../components/video-cta'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings {
        keywords
        title
        description
    }

    hero: file(relativePath: { eq: "home-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
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

    videoCtaUrl: allSanityVideo(filter: {_id: {eq: "641e0297-d730-40d8-9026-114cd53e5d24"}}) {
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

const IndexPage = props => {
  const { data } = props

  const site = (data || {}).site
  const hero = (data || {}).hero
  const videoImg = (data || {}).videoCtaImg
  const videoAsset = (data || {}).videoCtaUrl.edges[0].node.video.asset

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <HeroLarge imgUrl={hero} />
      <FeatureLarge />
      <VideoCta videoCta={videoImg} videoAsset={videoAsset} />
      <FormChatBot />
    </Layout>
  )
}

export default IndexPage
