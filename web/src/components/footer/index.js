import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query FooterQuery {
            companyInfo: sanityCompanyInfo {
                name
                address1
                address2
                zipCode
                city
                country
                localPhone
                tollPhone
            }
        }
    `)

    const company = (data || {}).companyInfo

    return (
        <footer className="footer-7 text-center-xs">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 fine-print"> 
                        <p>© {new Date().getFullYear()} Rock Solid, Inc. — All Rights Reserved</p><br/>
                        <p>{company.address1}</p>
                        {company.address2 && (
                                <p>{company.address2}</p>
                        )}
                        <p>{data.companyInfo.city}, {data.companyInfo.state} {data.companyInfo.zipCode}</p>
                        <p><a href={`tel:+1${data.companyInfo.localPhone}`}>{data.companyInfo.localPhone}</a> (local) | <a href={`tel:+1${data.companyInfo.tollPhone}`}>{data.companyInfo.tollPhone}</a> (toll free)</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer