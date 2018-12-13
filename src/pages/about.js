import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import '../scss/pages/about.scss';
import Emoji from '../components/emoji';

const About = () => (
	<Layout url={'/about'}>
		<div className="about-wrapper">
			<div className="about-content">
				<h1>
					<Emoji symbol="👨🏻‍💻" /> Mark Murphy
				</h1>
				<h2>
					I'm a{' '}
					<Link to="https://www.linkedin.com/in/markrmurphy/">
						software developer
					</Link>{' '}
					based in Northeast Ohio.
				</h2>
				<p>
					I love to help businesses solve problems by leveraging technology.
					When I'm not working, coding, or{' '}
					<Link to="https://twitter.com/MarkMurphy37">tweeting</Link>, you can
					find me playing sports, reading a book, or trying to level the playing
					field at <Link to="https://fullyequipped.co/">FullyEquipped</Link>.
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
