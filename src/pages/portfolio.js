import React from 'react'
import Layout from '../components/layout'
import '../scss/pages/portfolio.scss'
import { Link } from 'gatsby'

const Portfolio = () => (
  <Layout url={'/portfolio'}>
    <div className="portfolio-wrapper">
      <div className="portfolio-item">
        <div className="portfolio-image">
          <Link to="https://pierandco.net">
            <img
              src={require('../images/pier-co.png')}
              alt="Pier & Co. Screenshot"
            />
          </Link>
        </div>
        <div className="portfolio-story">
          This is test story about what I did for Pier & Co.
        </div>
      </div>
      <div className="portfolio-item">
        <div className="portfolio-story">
          This is test story about what I did for Pier & Co.
        </div>
        <div className="portfolio-image">
          <Link to="https://pierandco.net">
            <img
              src={require('../images/pier-co.png')}
              alt="Pier & Co. Screenshot"
            />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio
