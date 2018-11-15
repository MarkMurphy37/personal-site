import React from 'react';
import { Link } from 'gatsby';
import { FaTwitter, FaGithub, FaLinkedin, FaStackOverflow, FaFolder, FaEnvelope } from 'react-icons/fa';
import './header.scss';

const Header = ({ siteTitle }) => (
  <div className='header-wrapper'>
    <div className='header-content'>
      <Link to="/" className='header-title'>
        <div className='header-avatar'></div>
        <h3>
          {siteTitle}
        </h3>
      </Link>  
      <div className='header-links'>
        <a href="/portfolio">
          <FaFolder />
        </a>
        <a href="/contact">
          <FaEnvelope />
        </a>
        <a href="https://twitter.com/MarkMurphy37">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/markrmurphy/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/MarkMurphy37">
          <FaGithub />
        </a>
        <a href="https://stackoverflow.com/users/story/4068591">
          <FaStackOverflow />
        </a>
      </div>
    </div>
  </div>
)

export default Header;
