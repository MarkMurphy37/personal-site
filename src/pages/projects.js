import React from 'react';
import Helmet from 'react-helmet';
import Emoji from '../components/emoji';
import Layout from '../components/layout';
import '../scss/pages/projects.scss';

const Projects = () => (
	<Layout url={'/projects'}>
		<Helmet>
			<title>Projects 🛠 - MarkMurphy.io</title>
		</Helmet>
		<div className="projects-wrapper">
			<div className="projects-content">
				<h1>
					Projects <Emoji symbol="🛠" />
				</h1>
				<p>
					When I'm not at{' '}
					<a
						href="https://www.morelandconnect.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						work
					</a>
					, I like to do a little work of my own. Check out some of my personal
					projects and let me know what you think! <Emoji symbol="👇" />
				</p>{' '}
			</div>
			<div className="projects-content">
				<h1>
					Hacky <Emoji symbol="🤖" />
				</h1>
				<p>
					<a
						href="https://apps.apple.com/us/app/dark-hacker-news/id1459946382"
						target="_blank"
						rel="noopener noreferrer"
					>
						Hacky
					</a>{' '}
					is a user-friendly Hacker News Reader for browsing Hacker News stories
					and comments.
				</p>
				<p>
					Download it on the iOS app store{' '}
					<a
						href="https://apps.apple.com/us/app/dark-hacker-news/id1459946382"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					. <Emoji symbol="👈" />
				</p>
				<div className="dark-hacker-news-screenshots">
					<img
						className="screenshot"
						src={require('../images/hacky-2.png')}
						alt="Hacky Screenshot"
					/>
					<img
						className="screenshot"
						src={require('../images/hacky-1.png')}
						alt="Hacky Screenshot"
					/>
				</div>
			</div>
			<div className="projects-content">
				<h1>
					TechReviewHQ <Emoji symbol="📱" />
				</h1>
				<p>Want to read the latest reviews on a new tech product?</p>
				<p>
					TechReviewHQ aggregates tech reviews from across the internet into one
					place, whether from TechCrunch, The Verge, or MKBHD. TechReviewHQ is
					your tech review headquarters. <Emoji symbol="📡" />{' '}
				</p>
				<p>*TechReviewHQ is no longer active.</p>
				<div className="techreviewhq-screenshots">
					<img
						className="screenshot"
						src={require('../images/techreviewhq-1.png')}
						alt="TechReviewHQ Screenshot"
					/>
					<img
						className="screenshot"
						src={require('../images/techreviewhq-2.png')}
						alt="TechReviewHQ Screenshot"
					/>
				</div>
			</div>
		</div>
	</Layout>
);

export default Projects;
