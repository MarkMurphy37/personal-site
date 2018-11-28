import React from 'react';
import { Link } from 'gatsby';
import {
  FaGithub,
  FaLinkedin,
  FaFolder,
  FaEnvelope,
  FaUserCircle,
} from 'react-icons/fa';
import '../scss/components/header.scss';

const links = [
  {id: 1, text: 'About', url: '/about', icon: <FaUserCircle/>},
  {id: 2, text: 'Contact', url: '/contact', icon: <FaEnvelope/>},
  {id: 3, text: 'GitHub', url: 'https://github.com/MarkMurphy37', icon: <FaGithub/>},
  {id: 4, text: 'LinkedIn', url: 'https://www.linkedin.com/in/markrmurphy/', icon: <FaLinkedin/>},
  {id: 5, text: 'Portfolio', url: '/portfolio', icon: <FaFolder/>},
];

const Header = (props) => {

  return (
    <div className="header-wrapper">
      <div className="header-content">
        <Link to="/" className={'/' === props.activeUrl ? 'active header-title' : 'header-title'}>
          <div className="header-avatar" />
          <h3>{props.siteTitle}</h3>
        </Link>
        <div className="header-links">
          {links.map(link => 
            <Link key={link.id} to={link.url} className={link.url === props.activeUrl ? 'active' : ''}>
              {link.icon} {link.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header;
