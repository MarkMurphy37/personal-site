import React from 'react'
import { Link } from 'gatsby'
import {
  FaGithub,
  FaLinkedin,
  FaFolder,
  FaEnvelope,
  FaUserCircle,
  FaCommentDots
} from 'react-icons/fa'
import '../scss/components/header.scss'

const links = [
  { id: 1, text: 'About', url: '/about', icon: <FaUserCircle /> },
  { id: 2, text: 'Blog', url: '/blog', icon: <FaCommentDots /> },
  { id: 3, text: 'Contact', url: '/contact', icon: <FaEnvelope /> },
  { id: 4, text: 'Work', url: '/work', icon: <FaFolder /> },
]

const Header = props => {
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <Link
          to="/"
          className={
            '/' === props.activeUrl ? 'active header-title' : 'header-title'
          }
        >
          <div className="header-avatar" />
          <h3>{props.siteTitle}</h3>
        </Link>
        <div className="header-links">
          {links.map(link => (
            <Link
              key={link.id}
              to={link.url}
              className={link.url === props.activeUrl ? 'active' : ''}
            >
              {link.icon} <span>{link.text}</span>
            </Link>
          ))}
          <a href="https://www.linkedin.com/in/markrmurphy/">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
          <a href="https://github.com/MarkMurphy37">
            <FaGithub /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
