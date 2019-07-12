import React from 'react'
import { graphql } from 'gatsby'
// import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import FormChatBot from '../components/form-chat-bot'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings {
        keywords
        title
        description
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        <FormChatBot />
      </Container>
    </Layout>
  )
}

export default IndexPage
