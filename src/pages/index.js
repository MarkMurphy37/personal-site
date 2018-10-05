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
            <TypeWriter elementId={'terminal-line-2'} startDelay={2000} strings={['My name is <a href="https://www.linkedin.com/in/markrmurphy/" target="_blank">Mark Murphy</a>.']}/>
            <TypeWriter elementId={'terminal-line-3'} startDelay={4500} strings={['I\'m a Full-Stack Web Developer.']}/>
            <TypeWriter elementId={'terminal-line-4'} startDelay={7500} strings={['My primary stack is C#, ASP.NET Core, and SQL Server.']}/>
            <TypeWriter elementId={'terminal-line-5'} startDelay={12500} strings={['Most recently I\'ve been diving into ReactJS.']}/>
            <TypeWriter elementId={'terminal-line-6'} startDelay={17000} strings={['I\'m also the Director of <a href="https://fullyequipped.co/" target="_blank">FullyEquipped</a>.']}/>
            <TypeWriter elementId={'terminal-line-7'} startDelay={21000} strings={['Want to chat? Feel free to <a href="/contact/">reach out</a>.']}/>
            <TypeWriter elementId={'terminal-line-8'} startDelay={25000} strings={['Have a great day and God bless! :)']}/>
          </div>
        </div>
  </Layout>
)

export default IndexPage;
