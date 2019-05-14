import React from 'react';
import Layout from '../components/layout';
import Emoji from '../components/emoji';
import '../scss/pages/about.scss';
import Helmet from 'react-helmet';

const About = () => (
	<Layout url={'/about'}>
		<Helmet>
			<title>About 👨🏻‍💻 - MarkMurphy.io</title>
		</Helmet>
		<div className="about-wrapper">
			<div className="about-content">
				<h1>
					Mark Murphy <Emoji symbol="👨🏻‍💻" />
				</h1>
				<h2>
					I'm a{' '}
					<a href="https://www.linkedin.com/in/markrmurphy/">
						software developer
					</a>{' '}
					based in Northeast Ohio.
				</h2>
				<p>
					I love to help businesses solve problems by leveraging technology.
					When I'm not working, coding, or{' '}
					<a href="https://twitter.com/MarkMurphy37">tweeting</a>, you can find
					me playing sports, reading a book, or trying to level the playing
					field at <a href="https://fullyequipped.co/">FullyEquipped</a>.
				</p>
				<div className="about-image-gallery">
					<img
						src={require('../images/christmas-party.jpg')}
						alt="Christmas Party"
					/>
					<img src={require('../images/football.jpg')} alt="Indiana Football" />
					<img
						src={require('../images/golden-gate.jpg')}
						alt="Golden Gate Bridge"
					/>

					<img src={require('../images/golf.jpg')} alt="Minerva Golf Outing" />
					<img
						src={require('../images/google.jpg')}
						alt="Google Headquarters"
					/>
					<img src={require('../images/5k.jpg')} alt="The Hammy 5K" />
				</div>
			</div>
		</div>
	</Layout>
);

export default About;
