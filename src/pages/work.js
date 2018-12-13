import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Emoji from '../components/emoji';
import '../scss/pages/work.scss';

const Work = () => (
	<Layout url={'/work'}>
		<div className="work-wrapper">
			<div className="work-content">
				<h1>Dream Big. Work Hard.</h1>
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
						As a well-rounded software developer with{' '}
						<a href="https://www.linkedin.com/in/markrmurphy/">
							3+ years of experience
						</a>
						, I've learned how to utilize my work ethic and persistence to solve
						challenging problems and create valuable software solutions for
						businesses.
					</p>
					<p>
						From{' '}
						<a href="https://www.microsoft.com/en-us/sql-server/sql-server-2017">
							SQL Server
						</a>{' '}
						to <a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a>{' '}
						to <a href="https://reactjs.org/">ReactJS</a>, I've built full-stack
						software solutions in a myriad of technologies. Whether I'm building
						a mobile app in{' '}
						<a href="https://facebook.github.io/react-native/">React Native</a>{' '}
						or a web app in <a href="https://reactjs.org/">ReactJS</a>, I take
						each project as an opportunity to learn, do my best work, and get
						the job done.
					</p>
					<p>
						From{' '}
						<a href="https://www.youtube.com/watch?v=Y-VT93BWqbU">playing</a>{' '}
						Big-Ten football in college to developing software today, I've made
						a career of tackling things. If you'd like to learn more about my
						background, projects I've done, or you have a business inquiry,{' '}
						<Link to="/contact">send me message</Link> and let's chat!
					</p>
				</div>
				<h2>
					I've worked with <Emoji symbol="👇🏼" />
				</h2>
				<div className="work-logos" />
			</div>
		</div>
	</Layout>
);

export default Work;
