import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../header'
import Footer from '../footer'
import FooterCta from '../footer-cta'
import ContactForm from '../contact-form'

import 'modern-normalize/modern-normalize.css'
import '../../styles/bootstrap.scss'
import '../../styles/layout.scss'

const Layout = ({ children, hideCta = false }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site: sanitySiteSettings {
          title
      }
      companyInfo: sanityCompanyInfo {
        address1
        address2
        city
        country
        state
        zipCode
        name
      }
    }
  `)

  const [showContact, setShowContact] = useState(false)

  const handleShowContact = () => {
    setShowContact(true)
  }

  const handleHideContact = () => {
    setShowContact(false)
  }

  return (
    <>
      <Header 
        siteTitle={data.siteTitle} 
        showContact={showContact} 
        onHideContact={handleHideContact}
        onShowContact={handleShowContact}
      />
      <>{children}</>
      <ContactForm showContact={showContact} onHideContact={handleHideContact} />
      {!hideCta &&
      <FooterCta showContact={showContact} onShowContact={handleShowContact} />
      }
      <Footer />
    </>
  )
}

export default Layout
