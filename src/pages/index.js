import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Emoji from '../components/emoji';
import Layout from '../components/layout';
import '../scss/components/button.scss';
import '../scss/pages/index.scss';

const IndexPage = () => (
	<Layout url={'/'}>
		<Helmet>
			<title>Home 🏠 - MarkMurphy.io</title>
		</Helmet>
		<div className="index-wrapper">
			<div className="index-header">
				<img
					className="avatar"
					src={require('../images/avatar-casual.png')}
					alt="Mark Murphy Avatar"
					height="200"
					width="200"
				/>
			</div>
			<div className="index-intro">
				Hi there! <Emoji symbol="👋🏼" /> I'm{' '}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/markrmurphy/"
				>
					Murph
				</a>
				, a full-stack software developer. <Emoji symbol="💻" /> Check out my
				iOS app
				{'  '}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://apps.apple.com/us/app/dark-hacker-news/id1459946382"
				>
					Hacky
				</a>
				!<Emoji symbol=" 🤖" /> When I'm not coding, you can find me leveling
				the playing field at{' '}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://fullyequipped.co/"
				>
					FullyEquipped
				</a>
				. <Emoji symbol="🎒" /> Want to chat? Say hi on{' '}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/MarkMurphy37"
				>
					Twitter
				</a>{' '}
				or send me a <Link to="/contact">message</Link>!
			</div>
		</div>
	</Layout>
);

export default IndexPage;
