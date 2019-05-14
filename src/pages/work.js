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
						I'm a full-stack software developer with 3+ years of professional{' '}
						<a href="https://www.linkedin.com/in/markrmurphy/">
							software development experience
						</a>
						. Over the years I've utilized an array of technologies to solve
						challenging business problems for a diverse portfolio of clients.
					</p>
					<p>
						Whether I'm troubleshooting a bug in{' '}
						<a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a>,
						writing queries in{' '}
						<a href="https://www.microsoft.com/en-us/sql-server/sql-server-2017">
							SQL Server
						</a>
						, or building a web app in{' '}
						<a href="https://reactjs.org/">ReactJS</a>, I take each project as
						an opportunity to learn, do my best work, and get the job done.
					</p>
					<p>
						If you'd like to learn more about my background, projects I've done,
						or have a business inquiry,{' '}
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
