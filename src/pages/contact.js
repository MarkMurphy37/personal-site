import React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import Emoji from '../components/emoji';
import '../scss/pages/contact.scss';
import Helmet from 'react-helmet';

const Contact = () => (
	<Layout url={'/contact'}>
		<Helmet>
			<title>Contact Me 👋🏼 - MarkMurphy.io</title>
		</Helmet>
		<div className="contact-form">
			<h1>
				Contact Me <Emoji symbol="👋🏼" />
			</h1>
			<p>
				If you have any business inquiries or just want to say hi, fill out the
				form below or email me at <strong>Mark@MarkMurphy.io</strong> and let's
				chat.
			</p>
			<form
				name="contact"
				method="post"
				action="/success"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<input type="hidden" name="form-name" value="contact" />
				<div className="field half first">
					<label className="form-field-label" htmlFor="name">
						Name
					</label>
					<input
						className="form-input"
						type="text"
						name="name"
						id="name"
						placeholder="Michael Scott"
					/>
				</div>
				<div className="field half">
					<label className="form-field-label" htmlFor="email">
						Email
					</label>
					<input
						className="form-input"
						type="text"
						name="email"
						id="email"
						placeholder="MichaelScott@DunderMifflin.com"
					/>
				</div>
				<div className="field">
					<label className="form-field-label" htmlFor="message">
						Message
					</label>
					<textarea
						className="form-input"
						name="message"
						id="message"
						rows="8"
						placeholder="I need help making a website for a charity 5K fun run. It's gonna be called the Dunder Mifflin Scranton Meredith Palmer Memorial Celebrity Rabies Awareness Pro-Am Fun Run Race for the Cure. I've already got some ideas. I hope to talk with you soon!"
					/>
				</div>
				<div className="form-button">
					<Button>Submit</Button>
				</div>
			</form>
		</div>
	</Layout>
);

export default Contact;
