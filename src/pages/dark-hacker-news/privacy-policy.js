import React from 'react';
import Layout from '../../components/layout';
import { Link } from 'gatsby';
import '../../scss/pages/dark-hacker-news/privacy-policy.scss';
import Helmet from 'react-helmet';
import Emoji from '../../components/emoji';

const PrivacyPolicyPage = () => (
	<Layout url={'/prvacy-policy'}>
		<Helmet>
			<title>Privacy Policy 🕵🏼‍ - Dark Hacker News</title>
		</Helmet>
		<div className="privacy-policy-wrapper">
			<div className="privacy-policy">
				<h1>
					Privacy Policy <Emoji symbol="🕵🏼‍" /> - Dark Hacker News
				</h1>
				<p>
					This policy applies to all information collected or submitted on the
					Dark Hacker News iOS app.
				</p>

				<h2>Information we collect</h2>
				<p>We do not collect any user profile information at this time.</p>
				<p>
					We store information on your device about the stories you view and
					bookmark so we can mark them as such in the application.
				</p>

				<h2>Information usage</h2>
				<p>
					We use the information we collect to operate and improve our apps and
					customer support.
				</p>

				<h2>Security</h2>
				<p>
					We implement a variety of security measures to help keep your
					information secure. For instance, all communication with the app
					require HTTPS.
				</p>

				<h2>Third-party links and content</h2>
				<p>
					Dark Hacker News displays links and content from third-party
					providers. These providers have their own independent privacy
					policies, and we have no responsibility or liability for their content
					or activities.
				</p>

				<h2>California Online Privacy Protection Act Compliance</h2>
				<p>
					We comply with the California Online Privacy Protection Act. We
					therefore will not distribute your personal information to outside
					parties without your consent.
				</p>

				<h2>Children’s Online Privacy Protection Act Compliance</h2>
				<p>
					We never collect or maintain information at our website from those we
					actually know are under 13, and no part of our website is structured
					to attract anyone under 13.
				</p>

				<h2>Information for European Union Customers</h2>
				<p>
					By using Dark Hacker News and providing your information, you
					authorize us to collect, use, and store your information outside of
					the European Union.
				</p>

				<h2>International Transfers of Information</h2>
				<p>
					Information may be processed, stored, and used outside of the country
					in which you are located. Data privacy laws vary across jurisdictions,
					and different laws may be applicable to your data depending on where
					it is processed, stored, or used.
				</p>

				<h2>Your Consent</h2>
				<p>By using our site or apps, you consent to our privacy policy.</p>

				<h2>Contacting Us</h2>
				<p>
					If you have questions regarding this privacy policy, you may email me
					at <strong>Mark@MarkMurphy.io</strong>.
				</p>

				<h2>Changes to this policy</h2>
				<p>
					If we decide to change our privacy policy, we will post those changes
					on this page. Summary of changes so far:
				</p>
				<ul>
					<li>April 29, 2019: First published.</li>
				</ul>
			</div>
		</div>
	</Layout>
);

export default PrivacyPolicyPage;
