import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Not found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to='/'>Return home</Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
