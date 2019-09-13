import React from 'react';
import { Link } from 'gatsby';
import {
	FaGithub,
	FaLinkedin,
	FaFolder,
	FaEnvelope,
	FaUserCircle,
	FaCommentDots,
	FaLaptop,
} from 'react-icons/fa';
import '../scss/components/header.scss';

const links = [
	{ id: 1, text: 'About', url: '/about', icon: <FaUserCircle /> },
	// { id: 2, text: 'Blog', url: '/blog', icon: <FaCommentDots /> },
	{ id: 3, text: 'Contact', url: '/contact', icon: <FaEnvelope /> },
	{ id: 4, text: 'Projects', url: '/projects', icon: <FaFolder /> },
	{ id: 5, text: 'Work', url: '/work', icon: <FaLaptop /> },
];

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
				</Link>
				<div className="header-links">
					{links.map(link => (
						<Link
							key={link.id}
							to={link.url}
							className={link.url === props.activeUrl ? 'active' : ''}
						>
							{link.icon} {link.text}
						</Link>
					))}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/markrmurphy/"
					>
						<FaLinkedin /> LinkedIn
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/MarkMurphy37"
					>
						<FaGithub /> GitHub
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
