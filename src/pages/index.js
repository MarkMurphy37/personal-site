import React from 'react';
import Layout from '../components/layout';
import TypeWriter from '../components/typewriter';
import { Link } from 'gatsby';
import '../scss/pages/index.scss';
import '../scss/components/button.scss';
import Helmet from 'react-helmet';
import Emoji from '../components/emoji';

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
				Hi there! <Emoji symbol="👋🏼" /> My name is{' '}
				<a target="_blank" href="https://www.linkedin.com/in/markrmurphy/">
					Murph
				</a>
				. I use code to make things. <Emoji symbol="💻" /> I'm currently working
				on <strong>Dark Hacker News</strong>. When I'm not coding, you can find
				me trying to level the playing field at{' '}
				<a target="_blank" href="https://fullyequipped.co/">
					FullyEquipped
				</a>
				. <Emoji symbol="🎒" /> Want to chat? Say hi on{' '}
				<a target="_blank" href="https://twitter.com/MarkMurphy37">
					Twitter
				</a>{' '}
				<Emoji symbol="🐤" /> or send me a <Link to="/contact">message</Link>!
			</div>
		</div>
	</Layout>
);

export default IndexPage;
