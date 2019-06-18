import React from 'react';
import Layout from '../components/layout';
import Emoji from '../components/emoji';
import '../scss/pages/about.scss';
import Helmet from 'react-helmet';

const About = () => (
	<Layout url={'/about'}>
		<Helmet>
			<title>About Me 👨🏻‍💻 - MarkMurphy.io</title>
		</Helmet>
		<div className="about-wrapper">
			<div className="about-content">
				<h1>
					About Me <Emoji symbol="👨🏻‍💻" />
				</h1>
				<h2>
					I'm a{' '}
					<a href="https://www.linkedin.com/in/markrmurphy/">
						software developer
					</a>{' '}
					based in Northeast Ohio.
				</h2>
				<p>
					I used to tackle people on the{' '}
					<a href="https://www.youtube.com/watch?v=Y-VT93BWqbU" target="_blank">
						football field
					</a>
					. <Emoji symbol="🏈" /> Nowadays, I tackle software projects instead.{' '}
					<Emoji symbol="💻" /> I love being able to take an idea and make
					something from scratch.
				</p>{' '}
				<p>
					When I'm not coding or{' '}
					<a href="https://twitter.com/MarkMurphy37" target="_blank">
						tweeting
					</a>
					, you can find me on a sports field, reading a book,{' '}
					<Emoji symbol="📚" /> or trying to level the playing field at{' '}
					<a href="https://fullyequipped.co/" target="_blank">
						FullyEquipped
					</a>
					. <Emoji symbol="🎒" />
				</p>
				<div className="about-image-gallery">
					<img
						src={require('../images/mark-nat-shanes-wedding.jpg')}
						alt="Taking wedding pictures by Lake Erie."
					/>
					<img
						src={require('../images/football.jpg')}
						alt="Playing football for the Indiana Hoosiers."
					/>
					<img
						src={require('../images/golden-gate.jpg')}
						alt="Standing on a boat in front of the Golden Gate Bridge."
					/>
					<img
						src={require('../images/golf.jpg')}
						alt="Standing by the FullyEquipped sponsorship sign at the Minerva Golf Outing"
					/>
					<img
						src={require('../images/google.jpg')}
						alt="Standing in front of the Google logo at the Google Headquarters"
					/>
					<img
						src={require('../images/5k.jpg')}
						alt="Getting ready to run the Hammy 5K"
					/>
				</div>
			</div>
		</div>
	</Layout>
);

export default About;
