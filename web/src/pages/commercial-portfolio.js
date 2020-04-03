import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../components/layout'
import HeroNarrow from '../components/hero-narrow'
import ProjectPreviewGrid from '../components/project-preview-grid'
import TestimonialSlider from '../components/testimonial-slider'

export const query = graphql`
  query CommercialPageQuery {
    hero: file(relativePath: { eq: "pool-deck-3.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
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
  const hero = (data || {}).hero
  const testimonials = (data || {}).testimonials
  const projectNodes = {}

  projectNodes.commercial = (data || {}).projects_commercial

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
      <HeroNarrow imgUrl={hero} header={'Lorem ipsum dolor'} lead={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'} />
        {projectNodes && (
          <ProjectPreviewGrid
            gallery={projectNodes}
            largePreview={true}
          />
        )}
      <TestimonialSlider testimonials={testimonials} />
    </Layout>
  )
}

export default CommercialPage
