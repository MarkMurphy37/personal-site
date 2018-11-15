import React from 'react';
import Layout from '../components/layout';
import TypeWriter from '../components/typewriter';
import '../components/terminal.scss'

const IndexPage = () => (
  <Layout>
        <div className='terminal-wrapper'>
          <div className='terminalMenu'>
            <div className='terminalButtons terminalClose'></div>
            <div className='terminalButtons terminalMinimize'></div>
            <div className='terminalButtons terminalZoom'></div>
          </div>
          <div className='terminalScreen'>
            <TypeWriter elementId={'terminal-line-1'} startDelay={0} strings={['Hi there!']}/>
            <TypeWriter elementId={'terminal-line-2'} startDelay={1500} strings={['My name is <a href="https://www.linkedin.com/in/markrmurphy/">Mark Murphy</a>.']}/>
            <TypeWriter elementId={'terminal-line-3'} startDelay={3500} strings={['I\'m a Full-Stack Web Developer.']}/>
            <TypeWriter elementId={'terminal-line-5'} startDelay={6000} strings={['I love to help businesses by leveraging technology.']}/>
            <TypeWriter elementId={'terminal-line-4'} startDelay={10000} strings={['Check out some of my work <a href="/portfolio">here</a>.']}/>
            <TypeWriter elementId={'terminal-line-6'} startDelay={13000} strings={['I\'m also the Director of <a href="https://fullyequipped.co/">FullyEquipped</a>.']}/>
            <TypeWriter elementId={'terminal-line-7'} startDelay={16000} strings={['Want to chat?']}/>
            <TypeWriter elementId={'terminal-line-8'} startDelay={17500} strings={['Feel free to <a href="/contact/">reach out</a>.']}/>
            <TypeWriter elementId={'terminal-line-9'} startDelay={20000} strings={['Thanks for stopping by!']}/>
          </div>
        </div>
  </Layout>
)

export default IndexPage;
