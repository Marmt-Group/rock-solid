import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../components/layout'
import HeroNarrow from '../components/hero-narrow'
import ProjectPreviewGrid from '../components/project-preview-grid'

export const query = graphql`
  query ProjectsPageQuery {
    hero: file(relativePath: { eq: "pool-deck.jpg" }) {
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
          }
          alt
        }
      }
    }

    projects_patios: allSanityProject(sort: {order: DESC, fields: publishedAt}, filter: {categories: {elemMatch: {title: {eq: "Patios & Walkways"}}}}) {
      nodes {
        title
        publishedAt
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
          }
          alt
        }
      }
    }

    projects_commercial: allSanityProject(sort: {order: DESC, fields: publishedAt}, filter: {categories: {elemMatch: {title: {eq: "Commercial"}}}}) {
      nodes {
        title
        publishedAt
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
          }
          alt
        }
      }
    }

    projects_driveways: allSanityProject(sort: {order: DESC, fields: publishedAt}, filter: {categories: {elemMatch: {title: {eq: "Driveways"}}}}) {
      nodes {
        title
        publishedAt
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
          }
          alt
        }
      }
    }

    projects_pooldecks: allSanityProject(sort: {order: DESC, fields: publishedAt}, filter: {categories: {elemMatch: {title: {eq: "Pool Decks"}}}}) {
      nodes {
        title
        publishedAt
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
          }
          alt
        }
      }
    }

    projects_beforeAfter: allSanityBeforeAfter(sort: {order: DESC, fields: publishedAt}) {
      nodes {
        title
        publishedAt
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
          }
          alt
        }
      }
    }

  }
`

const ProjectsPage = props => {
  const { data, errors } = props
  const hero = (data || {}).hero
  const projectNodes = {}

  projectNodes.vertical = (data || {}).projects_vertical
  projectNodes.commercial = (data || {}).projects_commercial
  projectNodes.patios = (data || {}).projects_patios
  projectNodes.driveways = (data || {}).projects_driveways
  projectNodes.pools = (data || {}).projects_pooldecks
  projectNodes.beforeAfter = (data || {}).projects_beforeAfter

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
      <HeroNarrow imgUrl={hero} header={'If you imagine it, we can do it.'} lead={'We can even help guide you along if you’re not so sure what you want. Take a look through our concrete coating galleries to see our range of experience.'} />
        {projectNodes && (
          <ProjectPreviewGrid
            gallery={projectNodes}
          />
        )}
    </Layout>
  )
}

export default ProjectsPage
