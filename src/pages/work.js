import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Emoji from '../components/emoji';
import '../scss/pages/work.scss';
import Helmet from 'react-helmet';

const Work = () => (
	<Layout url={'/work'}>
		<Helmet>
			<title>Work 💪🏼 - MarkMurphy.io</title>
		</Helmet>
		<div className="work-wrapper">
			<div className="work-content">
				<h1>
					Work Hard <Emoji symbol="💪🏼" />
				</h1>
				<div className="blockquote">
					“If a man is called to be a street sweeper, he should sweep streets
					even as a Michelangelo painted, or Beethoven composed music or
					Shakespeare wrote poetry. He should sweep streets so well that all the
					hosts of heaven and earth will pause to say, 'Here lived a great
					street sweeper who did his job well.”
					<p className="blockquote-author">- Martin Luther King Jr.</p>
				</div>
				<div className="work-background">
					<p>
						When it comes to building software, I have a great work ethic,
						incessant attention to detail, and a knack for getting things done.
					</p>
					<p>
						Even after taking my first programming class in 2013 and building my
						first computer, I had no idea my affinity for technology would turn
						into a career. As fate would have it, I started working as a{' '}
						<a target="_blank" href="https://www.linkedin.com/in/markrmurphy/">
							software developer
						</a>{' '}
						for{' '}
						<a target="_blank" href="https://www.gm.com/">
							General Motors
						</a>{' '}
						in 2015 and I haven't looked back.
					</p>
					<p>
						Since then, I've grown into a full-stack developer that is
						comfortable using a variety of technologies. Whether I'm building a
						web app in{' '}
						<a target="_blank" href="https://reactjs.org/">
							React
						</a>{' '}
						or a mobile app in{' '}
						<a target="_blank" href="https://facebook.github.io/react-native/">
							React Native
						</a>
						, I take each project as an opportunity to learn and do my best
						work.
					</p>
					<p>
						If you'd like to learn more about my background, projects I've done,
						or have a business inquiry,{' '}
						<Link to="/contact">send me message</Link> and let's chat!
					</p>
				</div>
				<h2>
					I've done work for <Emoji symbol="👇🏼" />
				</h2>
				<div className="work-logos" />
			</div>
		</div>
	</Layout>
);

export default Work;
