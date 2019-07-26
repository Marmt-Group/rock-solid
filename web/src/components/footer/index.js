import React from 'react'
import './style.scss'

const Footer = ({ companyInfo }) => (
    <footer className="footer-7 text-center-xs">
        <div className="container">
            <div className="row">
                <div className="col-sm-10"> <span className="type--fine-print">
                    © {new Date().getFullYear()} {companyInfo.name} — All Rights Reserved</span>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer