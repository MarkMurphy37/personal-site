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
					<Emoji symbol="👨🏻‍💻" />
					Mark Murphy
				</h1>
				<h2>I'm a software developer based in Northeast Ohio.</h2>
				<p>
					I enjoy solving complex business problems with simple and intuitive
					technological solutions. When I'm not working, coding, or tweeting,
					you'll find me in the local national park,reading a good book, or
					playing sports.
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
