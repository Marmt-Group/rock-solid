import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../components/layout'
import HeroNarrow from '../components/hero-narrow'
import ProjectPreviewGrid from '../components/project-preview-grid'
import CommercialVideoPortfolio from '../components/commercial-video-portfolio'
import TestimonialSlider from '../components/testimonial-slider'
import '../styles/commercial-portfolio.scss'

export const query = graphql`
  query CommercialPageQuery {
    hero: allSanityProject(filter: {id: {}, _id: {eq: "ec06db87-0827-4f46-8804-7c3a16dee523"}}) {
      edges {
        node {
          mainImage {
            asset {
              fluid {
                srcSetWebp
                srcSet
                base64
                src
                srcWebp
                aspectRatio
                sizes
              }
            }
          }
        }
      }
    }

    projects_commercial: allSanityProject(sort: {order: DESC, fields: publishedAt}, filter: {categories: {elemMatch: {title: {eq: "Commercial"}}}}) {
      nodes {
        title
        publishedAt
        _id
        mainImage {
          crop {
            _key
            _type
            bottom
            left
            right
            top
          }
          hotspot {
            _key
            _type
            height
            width
            x
            y
          }
          asset {
            _id
            assetId
          }
          alt
        }
      }
    }

    videos: allSanityVideo {
      edges {
        node {
          video {
            asset {
              assetId
              filename
              playbackId
              status
              thumbTime
            }
          }
          _id
        }
      }
    }

    testimonials: allSanityTestimonials {
      nodes {
        person
        quote
      }
    }

  }
`

const CommercialPage = props => {
  const { data, errors } = props
  const hero = (data || {}).hero.edges[0].node.mainImage.asset.fluid
  const testimonials = (data || {}).testimonials
  const videos = (data || {}).videos
  const projectNodes = {}
  projectNodes.commercial = (data || {}).projects_commercial

  const videoIds = ['70a7fee7-2822-4523-b73a-ac01a173578a', '40320f12-d2ab-43fb-a88b-26ea74079a85']
  const videosFiltered = videos.edges.filter((video) => {
    return videoIds.includes(video.node._id)
  })

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title={'Projects Portfolio'} />
      <HeroNarrow imgUrl={hero} header={'Our work is best in class'} lead={'Our attention to detail we promise will meet or exceed your expecations. Have a look at our image gallery below and videos'} />
        {projectNodes && (
          <ProjectPreviewGrid
            gallery={projectNodes}
            largePreview={true}
          />
        )}
      <CommercialVideoPortfolio videos={videosFiltered} />
      <TestimonialSlider testimonials={testimonials} />
    </Layout>
  )
}

export default CommercialPage
