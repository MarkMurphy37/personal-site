import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import '../scss/components/layout.scss';
import '../scss/global.scss';
import Particles from 'react-particles-js';

const Layout = ({ children, url }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{
							name: 'description',
							content:
								'Mark Murphy: Software Developer. Helping businesses by leveraging technology.',
						},
						{
							name: 'keywords',
							content:
								'Mark Murphy, Software Developer, Web Developer, Full-Stack Developer, Mobile Developer, Portfolio',
						},
					]}
				>
					<html lang="en" />
				</Helmet>
				<Header siteTitle={data.site.siteMetadata.title} activeUrl={url} />
				<Particles
					className="particles"
					params={{
						particles: {
							number: {
								value: 80,
							},
							color: {
								value: '#fcfcfc',
							},
							shape: {
								type: 'circle',
								stroke: {
									width: 0,
									color: '#000000',
								},
								polygon: {
									nb_sides: 5,
								},
							},
							opacity: {
								value: 0.5,
								random: false,
								anim: {
									enable: false,
									speed: 1,
									opacity_min: 0.1,
									sync: false,
								},
							},
							size: {
								value: 3,
								random: true,
								anim: {
									enable: false,
									speed: 40,
									size_min: 0.1,
									sync: false,
								},
							},
							line_linked: {
								enable: false,
								distance: 150,
								color: '#fcfcfc',
								opacity: 0.4,
								width: 1,
							},
							move: {
								enable: true,
								speed: 3,
								direction: 'none',
								random: false,
								straight: false,
								out_mode: 'out',
								bounce: false,
								attract: {
									enable: false,
									rotateX: 600,
									rotateY: 1200,
								},
							},
						},
						interactivity: {
							detect_on: 'canvas',
							events: {
								onhover: {
									enable: true,
									mode: 'repulse',
								},
								onclick: {
									enable: true,
									mode: 'push',
								},
								onresize: {
									enable: true,
									density_auto: true,
									density_area: 400, // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
								},
							},
							modes: {
								grab: {
									distance: 400,
									line_linked: {
										opacity: 1,
									},
								},
								bubble: {
									distance: 400,
									size: 40,
									duration: 2,
									opacity: 8,
									speed: 3,
								},
								repulse: {
									distance: 200,
									duration: 0.4,
								},
								push: {
									particles_nb: 2,
								},
								remove: {
									particles_nb: 2,
								},
							},
						},
						retina_detect: true,
					}}
				/>
        <div className="layout-wrapper">
          {children}
          <Footer />
        </div>
			</>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
