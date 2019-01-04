import React from 'react';
import Layout from '../components/layout';
import TypeWriter from '../components/typewriter';
import { Link } from 'gatsby';
import '../scss/pages/index.scss';
import '../scss/components/button.scss';
import Helmet from 'react-helmet';

const IndexPage = () => (
	<Layout url={'/'}>
		<Helmet>
			<title>🏠 Home - MarkMurphy.io</title>
		</Helmet>
		<div className="index-wrapper">
			<div className="index-header">
				<h1>
					<TypeWriter
						elementId={'typewriter-line-1'}
						startDelay={1000}
						strings={['Mark Murphy']}
					/>
				</h1>
				<h2>
					<TypeWriter
						elementId={'typewriter-line-2'}
						startDelay={2000}
						strings={['⚡ Software Developer ⚡']}
					/>
				</h2>
			</div>
			<div className="index-links">
				<Link to="/about" className="default-button">
					About
				</Link>
				<Link to="/blog" className="default-button">
					Blog
				</Link>
				<Link to="/contact" className="default-button">
					Contact
				</Link>
				<Link to="/work" className="default-button">
					Work
				</Link>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
