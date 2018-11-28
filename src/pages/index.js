import React from 'react';
import Layout from '../components/layout';
import TypeWriter from '../components/typewriter';
import { Link } from 'gatsby';

import '../scss/pages/index.scss';

const IndexPage = () => (
  <Layout url={'/'}>
    <div className='index-wrapper'>
      <div className='index-header'>
        <TypeWriter elementId={'terminal-line-1'} startDelay={1000} strings={['<h1>Mark Murphy</h1>']}/>
        <TypeWriter elementId={'terminal-line-2'} startDelay={2000} strings={['<h2>Software Developer</h2>']}/>
      </div>
      <div className='index-links'>
          <Link to="/about" className='default-button'>
            About
          </Link>
          <Link to="/contact" className='default-button'>
            Contact
          </Link>
          <Link to="/portfolio" className='default-button'>
            Portfolio
          </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage;
