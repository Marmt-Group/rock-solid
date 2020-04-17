import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../components/layout'
import CommercialVideoPortfolio from '../components/commercial-video-portfolio'

export const query = graphql`
  query CommercialPageQuery {

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

  }
`

const CommercialPage = props => {
  const { data, errors } = props
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
    <Layout hideCta={true}>
      <CommercialVideoPortfolio videos={videosFiltered} />
    </Layout>
  )
}

export default CommercialPage
