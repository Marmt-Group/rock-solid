import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../components/layout'
import HeroNarrow from '../components/hero-narrow'
import ProjectPreviewGrid from '../components/project-preview-grid'
import TestimonialSlider from '../components/testimonial-slider'

export const query = graphql`
  query ProjectsPageQuery {
    hero: file(relativePath: { eq: "pool-deck-3.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    projects_vertical: allSanityProject(sort: {order: DESC, fields: publishedAt}, filter: {categories: {elemMatch: {title: {eq: "Vertical"}}}}) {
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

    projects_patios: allSanityProject(sort: {order: DESC, fields: publishedAt}, filter: {categories: {elemMatch: {title: {eq: "Patios & Walkways"}}}}) {
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

    projects_driveways: allSanityProject(sort: {order: DESC, fields: publishedAt}, filter: {categories: {elemMatch: {title: {eq: "Driveways"}}}}) {
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

    projects_pooldecks: allSanityProject(sort: {order: DESC, fields: publishedAt}, filter: {categories: {elemMatch: {title: {eq: "Pool Decks"}}}}) {
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

    projects_beforeAfter: allSanityBeforeAfter(sort: {order: DESC, fields: publishedAt}) {
      nodes {
        title
        publishedAt
        _id
        beforeImage {
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
        afterImage {
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

    testimonials: allSanityTestimonials {
      nodes {
        person
        quote
      }
    }

  }
`

const ProjectsPage = props => {
  const { data, errors } = props
  const hero = (data || {}).hero.childImageSharp.fluid
  const testimonials = (data || {}).testimonials
  const projectNodes = {}

  projectNodes.vertical = (data || {}).projects_vertical
  projectNodes.commercial = (data || {}).projects_commercial
  projectNodes.patios = (data || {}).projects_patios
  projectNodes.driveways = (data || {}).projects_driveways
  projectNodes.pools = (data || {}).projects_pooldecks
  projectNodes.beforeAfter = (data || {}).projects_beforeAfter

  console.log('hero', hero)

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
      <HeroNarrow imgUrl={hero} header={'If you imagine it, we can do it.'} lead={'Not sure what you’re looking for? No problem! We’re happy to help you design something beautiful. Take a look through our galleries to see some of our favorite designs.'} />
        {projectNodes && (
          <ProjectPreviewGrid
            gallery={projectNodes}
          />
        )}
      <TestimonialSlider testimonials={testimonials} />
    </Layout>
  )
}

export default ProjectsPage
