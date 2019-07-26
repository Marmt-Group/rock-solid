import React from 'react'
import Header from '../header'
import Footer from '../footer'

import 'modern-normalize/modern-normalize.css'
import '../../styles/bootstrap.scss'
import '../../styles/layout.scss'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <>{children}</>
    <Footer companyInfo={companyInfo} />
  </>
)

export default Layout
