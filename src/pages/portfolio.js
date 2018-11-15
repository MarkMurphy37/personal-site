import React from 'react';
import Layout from '../components/layout';
import './portfolio.scss';

const Portfolio = () => (
  <Layout>
    <div className='portfolio-wrapper'>
        <div className='portfolio-item'>
            <img src='/static/pier-co.png' alt='Pier & Co.'/>
        </div>
    </div>
  </Layout>
)

export default Portfolio;
