import React from 'react'
import Layout from '../components/layout'
import '../scss/pages/portfolio.scss'

const Portfolio = () => (
  <Layout url={'/portfolio'}>
    <div className="portfolio-wrapper">
      <div className="portfolio-item">
        <div className="portfolio-image">
          <img
            src={require('../images/pier-co-screenshot.jpg')}
            alt="Pier & Co. Screenshot"
          />
        </div>
        <div className="portfolio-story">
          This is test story about what I did for MarkMurphy.io. Show technologies used here.
        </div>
      </div>
      <div className="portfolio-item">
        <div className="portfolio-story">
          This is test story about what I did for Pier & Co.
        </div>
        <div className="portfolio-image">
          <img
            src={require('../images/pier-co-screenshot.jpg')}
            alt="Pier & Co. Screenshot"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio
