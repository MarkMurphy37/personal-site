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
						<Link to="https://www.linkedin.com/in/markrmurphy/">
							3+ years of experience
						</Link>
						, I've learned how to utilize my work ethic and persistence to solve
						challenging problems and create valuable software solutions for
						businesses.
					</p>
					<p>
						From{' '}
						<Link to="https://www.microsoft.com/en-us/sql-server/sql-server-2017">
							SQL Server
						</Link>{' '}
						to{' '}
						<Link to="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</Link>{' '}
						to <Link to="https://reactjs.org/">ReactJS</Link>, I've built
						full-stack software solutions in a myriad of technologies. Whether
						I'm building a mobile app in{' '}
						<Link to="https://facebook.github.io/react-native/">
							React Native
						</Link>{' '}
						or a web app in <Link to="https://reactjs.org/">ReactJS</Link>, I
						take each project as an opportunity to learn, do my best work, and
						get the job done.
					</p>
					<p>
						From playing Big-Ten{' '}
						<Link to="https://www.youtube.com/watch?v=Y-VT93BWqbU">
							football
						</Link>{' '}
						in college to software problems today, I've made a career of
						tackling things. <Link to="/contact">Let's chat</Link> and see what
						problems we can tackle together.
					</p>
				</div>
				<h1>I've worked with <Emoji symbol="👇🏼" /></h1>
				<div className="work-logos" />
			</div>
		</div>
	</Layout>
);

export default Work;
