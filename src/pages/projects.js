import React from 'react';
import Layout from '../components/layout';
import Emoji from '../components/emoji';
import '../scss/pages/projects.scss';
import Helmet from 'react-helmet';

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
					TechReviewHQ <Emoji symbol="📱" />
				</h1>
				<p>
					TechReviewHQ is your tech review headquarters. <Emoji symbol="📡" />{' '}
				</p>
				<p>
					We aggregate tech reviews from across the internet into one place,
					whether from TechCrunch, The Verge, or MKBHD. Want to read the latest
					reviews on a new tech product? <Emoji symbol="📱" />
					You're in the right place.{' '}
				</p>
				<p>
					Stay up-to-date on the latest tech reviews at{' '}
					<a
						href="https://TechReviewHQ.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						TechReviewHQ.com
					</a>{' '}
					or follow us on Twitter 👉{' '}
					<a
						className="twitter-handle"
						target="_blank"
						rel="noopener noreferrer"
						href="https://twitter.com/TechReviewHQ"
					>
						@TechReviewHQ
					</a>
				</p>
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
			<div className="projects-content">
				<h1>
					Dark Hacker News <Emoji symbol="😈" />
				</h1>
				<p>
					It's like normal Hacker News, but darker... and easier on the eyes.{' '}
					<a
						href="https://apps.apple.com/us/app/dark-hacker-news/id1459946382"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dark Hacker News
					</a>{' '}
					is a simple Dark-Themed Hacker News app for browsing Hacker News
					stories and comments.
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
						src={require('../images/dark-hacker-news-1.png')}
						alt="Dark Hacker News Screenshot"
					/>
					<img
						className="screenshot"
						src={require('../images/dark-hacker-news-2.png')}
						alt="Dark Hacker News Screenshot"
					/>
				</div>
				<p>
					<strong>Features Include:</strong>
				</p>
				<ul>
					<li>Dark theme for easy reading and browsing</li>
					<li>View stories by Trending, New, Ask HN, and Show HN</li>
					<li>Bookmark your favorite storiesand come back to them later</li>
					<li>Share interesting stories you find with your friends</li>
					<li>
						Traverse the comments easily by collapsing them with a simple tap
					</li>
					<li>Viewed stories turn grey so you know where you've been</li>
					<li>Theme switcher for when you're not feeling so dark</li>
				</ul>
			</div>
		</div>
	</Layout>
);

export default Projects;
